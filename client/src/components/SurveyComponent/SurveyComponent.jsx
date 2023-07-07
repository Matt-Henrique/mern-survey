import surveyData from "../../data/surveyData.json";
import * as Survey from "survey-react";
import "survey-core/modern.min.css";
// import "survey-react/survey.css";
// import "survey-core/defaultV2.min.css";
import api from '../../api'

const SurveyComponent = ({ onComplete }) => {
  var model = new Survey.Model(surveyData);
  model.locale = 'pt-br';

  model.onComplete.add(async (sender, _options) => {
    console.log(JSON.stringify(sender.data, null, 3));

    const { nps_score, passive_experience, disappointed_experience } = sender.data
    const payload = { code: '123TEST', score: nps_score, message: passive_experience || disappointed_experience }

    await api.insertResponse(payload).then(res => {
      console.log(res)
    })
  });

  return (
    <Survey.Survey
      model={model}
      showCompletedPage={false}
      onComplete={onComplete}
    />
  );
};

export default SurveyComponent;
