import React from "react";
import Meaning from "./Meaning";

const Result = (props) => {
	if (props.result) {
		return (
			<div className="row">
				<div className="col-md-12">
					<h2 className="text-primary text-center text-xl">
						{props.result.word}
					</h2>
					{props.result.meanings.map(function (meaning, index) {
						return (
							<div key={index}>
								<Meaning meaning={meaning} />
							</div>
						);
					})}
				</div>
			</div>
		);
	} else {
		return null;
	}
};

export default Result;
