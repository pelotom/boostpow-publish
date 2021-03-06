const Styles = () => (
	<style jsx="true">{`
		.boost-publisher-container {
			height: 100%;
			width: 100vw;
			background: rgba(0, 0, 0, 0.5);
			display: flex;
			flex-direction: column;
			position: fixed;
			bottom: 0;
		}

		.boost-publisher-grow {
			flex-grow: 1;
		}
		.boost-publisher-wrapper {
			display: flex;
			position: fixed;
			bottom: 0;
			width: 100%;
		}

		.boost-publisher {
			width: 600px;
			max-width: calc(100% - 24px);
			background: white;
			border-radius: 6px 6px 0 0;
		}

		.boost-publisher-header {
			padding: 16px;
			display: flex;
			align-items: center;
		}

		.input-content-container {
			padding-bottom: 1em;
		}
		.input-diff-container {
			
			padding-bottom: 1em;
		}
		.rank-message {
			padding-top: 1em;
		}
		.label {
			font-size: 1.1em;
		}

		.input-content {
			padding: 10px;
			border: solid 1px #eee;
			border-radius: 6px;
			display: block;
			width: 100%;
			font-size: 1.1em;
		}
		.input-diff {
			padding: 10px;
			border: solid 1px #eee;
			border-radius: 6px;
			display: inline-block;
			font-size: 1.1em;
			margin: 10px;
		}

		.boost-publisher-logo {
			height: 60px;
		}

		.boost-logo-text {
			display: inline-block;
			font-size: 1.4em;
			font-weight: bold;
			letter-spacing: 1px;
			padding-left: 10px;
		}

		.boost-publisher-close {
			font-size: 18px;
			line-height: 21px;
			color: #bdbdbd;
			margin: 0;
			font-weight: normal;
			cursor: pointer;
		}

		.boost-publisher-body {
			padding: 16px;
			border-top: 2px solid #f2f2f2;
			min-height: 90px;
			padding-bottom: 0;
		}

		p.lead {
			font-size: 1.1em;
		}

		.boost-publisher-form-control {
			margin-top: 0;
			margin-bottom: 0;
		}

		.pow-help-text {
			text-decoration: underline;
			color: #696969;
			font-size: 0.8em;
		}
		.boost-publisher-select {
			color: #696969;
			font-size: 14px;
			line-height: 17px;
		}

		.boost-rank-display {
			text-align: center;
		}

		.boost-rank-display span {
			font-weight: 600;
			font-size: 1.3em;
			letter-spacing: -1px;
		}

		.boost-publisher-menu-list {
			padding: 0;
		}

		.boost-publisher-menu-item {
			font-size: 14px;
			line-height: 20px;
			color: #696969;
			padding: 12px;
		}

		
		.boost-publisher-menu-item-selected {
			color: #ffffff;
			background-color: #085af6 !important;
		}

		.boost-publisher-select-outlined {
			border: 1px solid #f2f2f2 !important;
		}

		.MuiOutlinedInput-notchedOutline {
			border-color: #f2f2f2 !important;
			border-width: 1px !important;
		}
		.MuiSlider-marked {
			margin-bottom: 8px;
		}
		.MuiSlider-root {
			margin-top: 3em;
		}
		.contentPreview {
			text-align: center;
		}

		.contentPreview img {
			width: 320px;
			margin: 0 auto;
		}

		.contentPreview textarea {
			width: 100%;
			max-height: 300px;
			overflow-y: scroll;
			padding: 1em;
			margin: 0 auto;
		}

		.contentPreview embed {
			width: 100%;
			padding: 1em;
			margin: 0 auto;
		}

		.markdownPreview {
			width: 100%;
			padding: 1em;
			margin: 0 auto;
			max-height: 300px;
			height: 300px;
			border: 1px solid #ccc;
			border-radius: 0.5em;
			overflow-y: scroll;
		}
		media only screen and (min-width: 600px) {
			.contentPreview img {
				max-height: 200px;
				width: auto;
				margin: 0 auto;
			}

			.contentPreview video {
				max-height: 200px;
				width: auto;
				margin: 0 auto;
			}
		}
		@media only screen and (max-width: 600px) {
			.pdfPreview {
				height: 400;
				width: 300;
			}

			.contentPreview {
				padding: 1em;
				text-align: center;
			}

			.contentPreview img {
				max-height: 100px;
				width: auto;
				margin: 0 auto;
			}

			.contentPreview video {
				height: 100px;
				width: 300px;
				margin: 0 auto;
			}

			.contentPreview textarea {
				width: 100%;
				max-height: 100px;
				overflow-y: scroll;
				padding: 1em;
				margin: 0 auto;
			}

			.contentPreview embed {
				width: 100%;
				height: 100px;
				padding: 1em;
				margin: 0 auto;
			}

			.markdownPreview {
				width: 100%;
				padding: 1em;
				margin: 0 auto;
				max-height: 100px;
				height: 100px;
				border: 1px solid #ccc;
				border-radius: 0.5em;
				overflow-y: scroll;
			}
		}

		#boostpow-slider {
			margin-left: 15px;
			margin-right: 30px;
			margin-bottom: 0;
			padding-bottom: 0;
		}

		#boostpow-slider .inline-diff-selector {
			padding: 4px;
		}

		#boostpow-slider .slider-message {
			margin-bottom: 45px;
		}

		.display-ranks-toggle {
			text-decoration: underline;
			cursor: pointer;
		}
		.display-ranks-toggle:before {
			content:'\\25B8'
		}
		.display-ranks-toggle.opened:before {
			content:'\\25BE'
		}

		#display-ranks-container {
			width: 100%;
			max-height: 150px; 
			overflow-y: scroll
		}

		table.display-ranks {
			width: 100%;
			font-size: 0.8em;
			margin-top: 15px;
		}
		table.display-ranks th, table.display-ranks td {
			text-align: center;
		}
		table.display-ranks th {
			font-weight: 600;
			font-size: .9em;
		}
		table.display-ranks td {
			border-bottom: 1px solid #eee;
		}
		.display-ranks-close {
			cursor: pointer;
			font-size: 1.4em;
		}
		.display-ranks-close:hover {
			text-decoration: 'underline';
			font-weight: 600;
		}

		#boostpow-topic,
		#boostpow-categories,
		#boostpow-price {
			display: block;
			height: 50px;
			margin-top: 5px;
		}
		#boostpow-topic div,
		#boostpow-categories div,
		#boostpow-price div {
			float: left;
		}
		#boostpow-topic div:first-child,
		#boostpow-categories div:first-child,
		#boostpow-price div:first-child {
			min-width: 100px;
			width: 15%;
			padding-top: 5px;
			font-weight: 500;
		}
		#boostpow-topic div:last-child,
		#boostpow-categories div:last-child,
		#boostpow-price div:last-child {
			width: 75%;
			max-width: 80%;
			float: right;
		}
		#boostpow-price {
			margin-top: 1em;
		}
		.boost-publisher-footer {
			margin-top: 1.5em;
			margin-bottom: 3.5em;
		}
		.wallet-selector {
			width: 43%;
			float: left;
			text-align: right;
			display: block;
			height: 70px;
			padding-top: 5px;
		}
		.wallet-button {
			width: 55%;
			float: right;
			display: block;
			height: 70px;
		}
		.payment-completed-section {
			margin-top: 1vh;
			width: 100%;
			display: block;
			clear: both;
		}

		.boost-publisher-bumper {
			height: 2vh;
		}

	`}</style>
);

export default Styles;
