import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";

export default function WeatherForecast(props) {
	let [loaded, setLoaded] = useState(false);
	let [forecast, setForecast] = useState(false);

	useEffect(() => {
		setLoaded(false);
	}, [props.coordinates]); //useEffect means that when we search for a new city, the forecast updates. Basically whenever the coordinates change, loaded is set to false which triggers the else in the if else statement

	function handleResponse(response) {
		setForecast(response.data.daily);
		setLoaded(true);
	}

	if (loaded) {
		console.log(forecast);
		return (
			<div className="WeatherForecast">
				<div className="row">
					{forecast.map(function (dailyForecast, index) {
						if (index < 5) {
							return (
								<div className="col" key={index}>
									<WeatherForecastDay data={dailyForecast} />
								</div>
							);
						} else {
							return null;
						}
					})}
				</div>
			</div>
		);
	} else {
		let apiKey = "8ccf37f47c78fce7cbde0d0a29369196";
		let longitude = props.coordinates.lon;
		let latitude = props.coordinates.lat;
		let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=-${longitude}&appid=${apiKey}&units=metric`;
		console.log(apiUrl);
		axios.get(apiUrl).then(handleResponse);

		return null;
	}
}
