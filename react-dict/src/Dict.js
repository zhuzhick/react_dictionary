import React, { useState } from "react";
import axios from "axios";

import Word from "./Word";
import Result from "./Result";

import Phonetics from "./Phonetics";
import Photo from "./Photos";
import Developer from "./Developer";

const Dict = () => {
	const [keyword, setKeyword] = useState("");
	const [result, setResult] = useState(null);
	const [word, setWord] = useState("");
	const [phonetics, setPhonetics] = useState(null);
	const [photos, setPhotos] = useState(null);

	const search = (event) => {
		event.preventDefault();
		let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
		axios.get(apiURL).then(handleResponse);

		let apiKey = "563492ad6f91700001000001227074a685d84e43b8c1313a717b0daf";
		let apiPhoto = `https://api.pexels.com/v1/search?query=${keyword}&per_page=4`;
		let headers = { Authorization: `${apiKey}` };
		axios.get(apiPhoto, { headers: headers }).then(handlePexelPesponse);
	};

	const handleKeywordChange = (event) => {
		setKeyword(event.target.value);
	};

	const handleResponse = (response) => {
		setResult(response.data[0]);
		setWord(response.data[0].word);
		setPhonetics(response.data[0].phonetics);
	};

	const handlePexelPesponse = (response) => {
		setPhotos(response.data.photos);
	};

	return (
		<div className="container mt-5">
			<div className="row">
				<div className="col-md-12">
					<h2 className="display-4 text-center">
						Find the meaning of the word:
					</h2>
					<form className="mb-1" onSubmit={search}>
						<input
							className="form-control"
							type="search"
							onChange={handleKeywordChange}
							autoFocus={true}
						></input>
					</form>
				</div>
			</div>
			<div className="col-md-12">
				<Word word={word} />
			</div>
			<div className="row">
				<div className="col-md-6">
					<Result result={result} />
				</div>
				<div className="col-md-6">
					<Phonetics phonetics={phonetics} />
					<Photo photos={photos} />
				</div>
			</div>
			<div className="row">
				<div className="col-md-12">
					<Developer />
				</div>
			</div>
		</div>
	);
};

export default Dict;
