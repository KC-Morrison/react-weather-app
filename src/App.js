import "./App.css";
import Weather from "./Weather.js";

export default function App() {
	return (
		<div className="App">
			<div className="container">
				<Weather defaultCity="Sydney" />
				<footer>
					<p>
						This project was coded by{" "}
						<a href="https://kmorrison.dev/" target="_blank" rel="noreferrer">
							Katherine Morrison
						</a>{" "}
						and is{" "}
						<a
							href="https://github.com/KC-Morrison/react-weather-app"
							target="_blank"
							rel="noreferrer"
						>
							open-sourced on GitHub
						</a>
					</p>
				</footer>
			</div>
		</div>
	);
}
