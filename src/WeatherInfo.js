import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
	return (
		<div className="WeatherInfo">
			<p>
				<FormattedDate date={props.data.date} />
			</p>
			<WeatherIcon code={props.data.icon} size={55} />
			<h1>{props.data.city}</h1>

			<p className="text-capitalize">{props.data.description}</p>

			<div className="DayInfo">
				<div className="column">
					<WeatherTemperature celsius={props.data.temperature} />
				</div>
				<div className="column">
					<p>Feels like: {Math.round(props.data.feel)}°C</p>
					<p>Humidity: {props.data.humidity}%</p>
					<p>Wind: {props.data.wind}km/h</p>
				</div>
			</div>
		</div>
	);
}
