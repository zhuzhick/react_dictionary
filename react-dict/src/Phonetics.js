import React from "react";

const Phonetics = (props) => {
	console.log(props.phonetics);
	if (props.phonetics) {
		return (
			<div>
				{props.phonetics.map(function (phonetic, index) {
					return (
						<div
							className="card p-3 m-3 shadow p-3 mb-5 bg-body rounded"
							key="index"
						>
							<a href={phonetic.audio} target="_blank">
								Listen
							</a>
							<br />
							<p>{phonetic.text}</p>
						</div>
					);
				})}
			</div>
		);
	}
};

export default Phonetics;
