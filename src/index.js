import React from "react";
import ReactDOM from "react-dom";
import {IntlProvider, addLocaleData} from 'react-intl';
import esLocaleData from 'react-intl/locale-data/es';
import JobsList from "./components/jobsList";
import LanguageSelector from "./components/languageSelector";

addLocaleData(esLocaleData);

ReactDOM.render(
	<IntlProvider locale={navigator.language} key={navigator.language} messages={LanguageSelector(navigator.language)}>
		<JobsList/>
	</IntlProvider>, document.getElementById("root")
);
