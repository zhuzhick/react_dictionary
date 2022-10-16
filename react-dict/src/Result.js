import React from "react";
import Meaning from "./Meaning";

const Result = (props) => {
	if (props.result) {
		return (
			<div>
				{props.result.meanings.map(function (meaning, index) {
					return (
						<div key={index}>
							<Meaning meaning={meaning} />
						</div>
					);
				})}
			</div>
		);
	} else {
		return null;
	}
};

export default Result;
