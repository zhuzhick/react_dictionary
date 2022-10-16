import React from "react";

const Synonyms = (props) => {
	console.log(props.synonyms);
	if (props.synonyms) {
		return (
			<ul className="synonyms mt-3">
				{props.synonyms.map((synonyms, index) => {
					return <li key={index}>{synonyms}; </li>;
				})}
			</ul>
		);
	} else {
		return null;
	}
};

export default Synonyms;
