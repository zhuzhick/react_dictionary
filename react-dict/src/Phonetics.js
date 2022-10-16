import React from "react";

const Phonetics = (props) => {
	return (
		<div className="card p-3 m-3 shadow p-3 mb-5 bg-body rounded">
			<a href={props.phonetic.audio} target="_blank">
				Listen
			</a>
			<br />
			{props.phonetic.text}
		</div>
	);
};

export default Phonetics;
