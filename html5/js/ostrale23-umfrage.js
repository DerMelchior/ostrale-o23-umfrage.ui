/* /js/ostrale023-umfrage.js */
import {json} from './ostrale023-umfrage_json.js';
import './survey.jquery.min.js';

const o23survey = new survey.Model(json);
o23survey.supportedLocales = ["en", "de"];
o23survey.defaultLocale = "en";
o23survey.onComplete.add((sender, options) => {
    console.log("DATA: " + JSON.stringify(sender.data, null, 3));
});
o23survey.onStarted.add(() => {
    o23survey.showNavigationButtons = false;
    o23survey.locale = window.ostrale_survey_locale;
});

export default {o23survey};
/*
survey.locale = "de";
survey.currentLocale = "en";
/*
$("#surveyElement").PopupSurvey({ model: survey, isExpanded: true });
*/
/*
$("#surveyElement").Survey({ model: o23survey, locale: "de" });
*/
