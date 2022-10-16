import React from "react";

const Photo = (props) => {
	if (props.photos) {
		return (
			<div>
				{props.photos.map(function (photo, index) {
					return (
						<div
							key={index}
							className="card p-3 m-3 shadow p-3 mb-5 bg-body rounded"
						>
							<a
								href={photo.src.original}
								target="_blank"
								rel="noreferrer"
							>
								<img
									src={photo.src.landscape}
									alt="meaning"
									className="card-img-top"
								/>
							</a>
						</div>
					);
				})}
			</div>
		);
	}
};

export default Photo;
