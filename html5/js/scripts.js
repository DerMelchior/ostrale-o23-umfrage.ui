/* private scripts */
/* import './ostrale023-umfrage_json';*/
import {json} from './ostrale023-umfrage_json';
import Survey from './survey.core.min.js';

window.ostrale_survey_locale = "de";
window.survey = new Survey.Model(json);
/* scripts called after dom content loaded */
document.addEventListener("DOMContentLoaded", function () {

    var btnDE = document.getElementById("BtnDE");
    var btnEN = document.getElementById("BtnEN");
    var SurveyModal = document.getElementById("my-modal");

    console.log('DOMContentLoaded! ')
    window.survey.supportedLocales = ["en", "de"];
    window.survey.defaultLocale = "en";
    window.survey.onComplete.add((sender, options) => {
        console.log("DATA: " + JSON.stringify(sender.data, null, 3));
    });

    window.survey.onStarted.add(() => {
        window.survey.showNavigationButtons = false;
        window.survey.locale = window.ostrale_survey_locale;
    });

    SurveyModal.addEventListener("show.bs.modal", function (event) {
        // Get the button that triggered the modal
        var button = event.relatedTarget;
        // Extract value from the custom data-* attribute
        document.ostrale_survey_locale = button.getAttribute("data-bs-locale");
        console.log('data-bs-locale: ' + button.getAttribute("data-bs-locale"));
        // Change survey language
        //myModal.querySelector(".modal-title").innerText = titleData;
        document.survey.locale = document.ostrale_survey_locale;
        console.log('ostrale_survey_locale: ' + document.ostrale_survey_locale);
        console.log('survey.locale: ' + document.survey.locale);
    });

    /*
        btnDE.addEventListener("click", function() {SurveyModal.show(); });
        btnEN.addEventListener("click", function() {SurveyModal.show(); });
    */
    window.call_startSurvey = function call_startSurvey(locale) {
        document.ostrale_survey_locale = locale;
        $("#surveyElement").survey({model: survey, locale: locale});
        console.log('document.locale: ' + window.ostrale_survey_locale);
        console.log('survey.locale: ' + window.survey.locale);

    }


});

