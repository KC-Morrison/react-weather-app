import React, { useState } from "react";

import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
	const [weatherData, setWeatherData] = useState({ ready: false });
	const [city, setCity] = useState(props.defaultCity);

	function handleResponse(response) {
		console.log(response.data);
		setWeatherData({
			ready: true,
			coordinates: response.data.coord, //this is to send the longitude and latitude to the forecast as that API only uses by coordinates
			temperature: response.data.main.temp,
			humidity: response.data.main.humidity,
			wind: response.data.wind.speed,
			city: response.data.name,
			icon: response.data.weather[0].icon,
			description: response.data.weather[0].description,
			feel: response.data.main.feels_like,
			date: new Date(response.data.dt * 1000),
		});
	}

	function search() {
		//this runs on load. It makes an API call with the city being sent from App.js
		const apiKey = "8ccf37f47c78fce7cbde0d0a29369196";
		let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
		axios.get(apiUrl).then(handleResponse);
	}

	function handleSubmit(event) {
		event.preventDefault();
		search(city);
	}

	function handleCityChange(event) {
		//we want to store the value of the search bar inside a state
		setCity(event.target.value);
	}

	if (weatherData.ready) {
		//this checks if the weather data is ready, by default it is false so will be ignored on load and go to else
		return (
			<div className="Weather">
				<div className="row">
					<div className="col-sm-12 col-md-6">
						<form onSubmit={handleSubmit} className="search-form">
							<div className="input-group">
								<input
									type="search"
									placeholder="Enter a city..."
									className="form-control"
									autoFocus="on"
									onChange={handleCityChange}
								/>

								<input
									type="submit"
									value="Search"
									className="btn btn-primary search-button"
								/>
							</div>
						</form>
					</div>
					<div className="col-sm-12 col-md-6">
						<div className="MainContent">
							<WeatherInfo data={weatherData} />
						</div>
					</div>
				</div>
				<WeatherForecast coordinates={weatherData.coordinates} />
			</div>
		);
	} else {
		search(); //this runs on load.
		return (
			<img
				className="LoadImage"
				src="https://cdn-icons-png.flaticon.com/512/7746/7746162.png"
				alt="person holding an umbrella"
			/>
		);
	}
}
