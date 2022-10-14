import Dict from "./Dict";
import Developer from "./Developer";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
	return (
		<div className="App">
			<div className="container">
				<Dict />
				<Developer />
			</div>
		</div>
	);
};

export default App;
