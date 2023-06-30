const surveyEN = new Survey.Model(json);
surveyEN.locale = 'de';
surveyEN.onComplete.add((sender, options) => {
    console.log(JSON.stringify(sender.data, null, 3));
});

$("#surveyElementEN").Survey({model: surveyEN, locale: 'en'});