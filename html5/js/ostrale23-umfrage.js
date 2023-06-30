/* /js/ostrale023-umfrage.js */
import {json} from './ostrale023-umfrage_json';

export const survey = new Survey.Model(json);
survey.supportedLocales = ["en", "de"];
survey.defaultLocale = "en";
survey.onComplete.add((sender, options) => {
    console.log("DATA: " + JSON.stringify(sender.data, null, 3));
});
survey.onStarted.add(() => {
    survey.showNavigationButtons = false;
    survey.locale = window.ostrale_survey_locale;
});


/*
survey.locale = "de";
survey.currentLocale = "en";
*/
/*
$("#surveyElement").PopupSurvey({ model: survey, isExpanded: true });
$("#surveyElement").Survey({ model: survey, locale: "de" });
*/