import React from "react";
import "./Help.css";

const Help = () => {
	return (
		<div className="help-container">
			<h1>Ska du ha hjälp nu också?</h1>
			<p>
				Om du behöver hjälp med något, kontakta oss på 08-123 456 78 eller
				skicka ett mail till:{" "}
			</p>
			<a href="mailto:ViKommerInteSvara@mail.com">
				ViKommerInteSvara@gmail.com
			</a>
		</div>
	);
};

export default Help;
