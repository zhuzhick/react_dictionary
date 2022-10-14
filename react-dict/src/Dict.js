import React, { useState } from "react";
import axios from "axios";

const Dict = () => {
	const [keyword, setKeyword] = useState("");

	const search = (event) => {
		event.preventDefault();
		let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
		axios.get(apiURL).then(handleResponse);

	};

	const handleKeywordChange = (event) => {
		setKeyword(event.target.value);
	};

	const handleResponse = (response) => {
		console.log(response.data);
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
			</div>
		</div>
	);
};

export default Dict;
