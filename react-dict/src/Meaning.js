import React from "react";

const Meaning = (props) => {
	return (
		<div className="card p-3 m-3 shadow p-3 mb-5 bg-body rounded">
			<h3 className="display-5 text-decoration-underline">
				{props.meaning.partOfSpeech}
			</h3>
			{props.meaning.definitions.map(function (definition, index) {
				return (
					<div key={index}>
						<p className="text-justify text-meaning text-definition">
							{definition.definition}
							<br />
							<em className="blockquote text-meaning text-example">
								{definition.example}
							</em>
						</p>
					</div>
				);
			})}
		</div>
	);
};

export default Meaning;
