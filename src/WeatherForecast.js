import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
	let [loaded, setLoaded] = useState(false);
	let [forecast, setForecast] = useState(false);
	function handleResponse(response) {
		setForecast(response.data.daily);
		setLoaded(true);
	}

	if (loaded) {
		console.log(forecast);
		return (
			<div className="WeatherForecast">
				<div className="row">
					<div className="col">
						<div className="WeatherForecast-day">Thu</div>
						<WeatherIcon code="01d" size={30} />
						<div className="WeatherForecast-temperatures">
							<span className="WeatherForecast-temperature-max">
								{forecast[0].temp.max}{" "}
							</span>
							<span className="WeatherForecast-temperature-min">
								{forecast[0].temp.min}
							</span>
						</div>
					</div>
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
