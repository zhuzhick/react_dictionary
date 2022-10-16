import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";

const Result = (props) => {
	if (props.result) {
		return (
			<section>
				<div className="row">
					<div className="col-md-12">
						<h2 className="text-primary text-center text-xl">
							{props.result.word}
						</h2>
					</div>
				</div>
				<div className="row">
					<div className="col-md-6">
						{props.result.meanings.map(function (meaning, index) {
							return (
								<div key={index}>
									<Meaning meaning={meaning} />
								</div>
							);
						})}
					</div>
					<div className="col-md-6">
						{props.result.phonetics.map((phonetic, index) => {
							return (
								<div key={index}>
									<Phonetics phonetic={phonetic} />
								</div>
							);
						})}
					</div>
				</div>
			</section>
		);
	} else {
		return null;
	}
};

export default Result;
