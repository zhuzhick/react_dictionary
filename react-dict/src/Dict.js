import React, { useState } from "react";
import axios from "axios";

import Result from "./Result";

const Dict = () => {
	const [keyword, setKeyword] = useState("");
	const [result, setResult] = useState(null);

	const search = (event) => {
		event.preventDefault();
		let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
		axios.get(apiURL).then(handleResponse);
	};

	const handleKeywordChange = (event) => {
		setKeyword(event.target.value);
	};

	const handleResponse = (response) => {
		console.log(response.data[0]);
		console.log(response.data[0].meanings[0].definitions[0].definition);
		setResult(response.data[0]);
	};

	return (
		<div className="row">
			<div className="col-md-12">
				<form onSubmit={search}>
					<input
						type="search"
						onChange={handleKeywordChange}
						autoFocus={true}
					></input>
				</form>
				<Result result={result} />
			</div>
		</div>
	);
};

export default Dict;
