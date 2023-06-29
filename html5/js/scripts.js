/* private scripts */

var windows.ostrale_survey_locale = "de";
const survey = new Survey.Model(json);
/* scripts called after dom content loaded */
document.addEventListener("DOMContentLoaded", function() {
    ostrale_survey_locale = "de";
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
        survey.locale = ostrale_survey_locale;
    });

    SurveyModal.addEventListener("show.bs.modal", function(event){        
        // Get the button that triggered the modal
        var button = event.relatedTarget;
        // Extract value from the custom data-* attribute
        ostrale_survey_locale = button.getAttribute("data-language");
        // Change survey language
        //myModal.querySelector(".modal-title").innerText = titleData;
        survey.locale = document.ostrale_survey_locale;
        console.log('language: '+document.ostrale_survey_locale);
    });
/*
    btnDE.addEventListener("click", function() {SurveyModal.show(); });
    btnEN.addEventListener("click", function() {SurveyModal.show(); });
*/
    

    


});

function call_startSurvey(locale) {
    document.ostrale_survey_locale = locale;
    $("#surveyElement").Survey({ model: survey, locale: document.ostrale_survey_locale });
    console.log('locale: '+locale);
    console.log('locale: '+locale);
    
 }