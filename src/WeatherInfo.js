import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
	return (
		<div className="WeatherInfo">
			<h1>{props.data.city}</h1>
			<ul>
				<li>
					{" "}
					<FormattedDate date={props.data.date} />{" "}
				</li>
				<li className="text-capitalize">{props.data.description}</li>
			</ul>
			<div className="row DayInfo">
				<div className="col-7 column">
					<div className="container">
						<WeatherIcon code={props.data.icon} size={55} />
						<WeatherTemperature celsius={props.data.temperature} />
					</div>
				</div>
				<div className="col-5 column">
					<ul>
						<li>Feels like: {Math.round(props.data.feel)}°C</li>
						<li>Humidity: {props.data.humidity}%</li>
						<li>Wind: {props.data.wind}km/h</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
