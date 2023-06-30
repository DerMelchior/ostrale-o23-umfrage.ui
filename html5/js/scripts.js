/* private scripts */
/* import './ostrale023-umfrage_json';*/
import {json} from '/js/ostrale023-umfrage_json.js';
import {jquery} from '/js/jquery.min.js';
import {survey} from '/js/survey.core.min.js';
/*import '/js/survey.jquery.min';*/
import surveyLocalisation from '/js/survey.i18n.min.js';
import surveyCss from '/js/bootstrap-integration.min.js';

window.ostrale_survey_locale = "de";
var o23survey = new Survey.Model(json);
var css = new surveyCss();
var o23locale = surveyLocalisation.locales();

export function call_startSurvey(locale) {
    window.ostrale_survey_locale = locale;
    $("#surveyElement").survey({model: o23survey, locale: locale});
    console.log('document.locale: ' + window.ostrale_survey_locale);
    console.log('survey.locale: ' + window.o23survey.locale);
};
/* scripts called after dom content loaded */
document.addEventListener("DOMContentLoaded", function () {

    var btnDE = document.getElementById("BtnDE");
    var btnEN = document.getElementById("BtnEN");
    var SurveyModal = document.getElementById("my-modal");

    console.log('DOMContentLoaded! ')
    window.o23survey.supportedLocales = ["en", "de"];
    window.o23survey.defaultLocale = "en";
    window.o23survey.onComplete.add((sender, options) => {
        console.log("DATA: " + JSON.stringify(sender.data, null, 3));
    });

    window.o23survey.onStarted.add(() => {
        window.o23survey.showNavigationButtons = false;
        window.o23survey.locale = window.ostrale_survey_locale;
    });

    SurveyModal.addEventListener("show.bs.modal", function (event) {
        // Get the button that triggered the modal
        var button = event.relatedTarget;
        // Extract value from the custom data-* attribute
        document.ostrale_survey_locale = button.getAttribute("data-bs-locale");
        console.log('data-bs-locale: ' + button.getAttribute("data-bs-locale"));
        // Change survey language
        //myModal.querySelector(".modal-title").innerText = titleData;
        document.o23survey.locale = document.ostrale_survey_locale;
        console.log('ostrale_survey_locale: ' + document.ostrale_survey_locale);
        console.log('o23survey.locale: ' + document.o23survey.locale);
    });

    /*
        btnDE.addEventListener("click", function() {SurveyModal.show(); });
        btnEN.addEventListener("click", function() {SurveyModal.show(); });
    */



});

