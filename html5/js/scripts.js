/* private scripts */

var ostrale_survey_locale = "de";
const survey = new Survey.Model(json);
/* scripts called after dom content loaded */
document.addEventListener("DOMContentLoaded", function() {

    var btnDE = document.getElementById("BtnDE");
    var btnEN = document.getElementById("BtnEN");
    var SurveyModal = new bootstrap.Modal(document.getElementById("my-modal"));

    console.log('DOMContentLoaded! ')
    survey.supportedLocales = ["en", "de"];
    survey.defaultLocale = "en";
    survey.onComplete.add((sender, options) => {
        console.log("DATA: "+JSON.stringify(sender.data, null, 3));
    }); 
    survey.onStarted.add(() => {
        survey.showNavigationButtons = false;
        survey.locale = document.ostrale_survey_locale;
    });

    SurveyModal.addEventListener("show.bs.modal", function(event) {
        // Get the button that triggered the modal
        var button = event.relatedTarget;
        // Extract value from the custom data-* attribute
        document.ostrale_survey_locale = button.getAttribute("data-language");
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
    

    


});

function call_startSurvey(locale) {
    document.ostrale_survey_locale = locale;
    $("#surveyElement").survey({model: survey, locale: locale});
    console.log('document.locale: ' + document.ostrale_survey_locale);
    console.log('survey.locale: ' + document.survey.locale);

}