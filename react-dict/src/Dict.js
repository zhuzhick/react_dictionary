import React, { useState } from "react";

const Dict = () => {
	const [keyword, setKeyword] = useState("");

	const search = (event) => {
		event.preventDefault();
		alert(`Searching for ${keyword}`);
	};

	const handleKeywordChange = (event) => {
		setKeyword(event.target.value);
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
