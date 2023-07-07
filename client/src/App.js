import React, { Component } from "react";
import "./App.css";
import { SurveyComponent, FinalPage } from "./components";

export default class AppSurvey extends Component {
  state = {};

  handleComplete = () => {
    this.setState({ isCompleted: true });
  };

  render() {
    const { isCompleted } = this.state;
    const showSurvey = !isCompleted && (
      <SurveyComponent onComplete={this.handleComplete} />
    );

    const showFinalPage = isCompleted && <FinalPage />;

    return (
      <React.Fragment>
        {showSurvey}
        {showFinalPage}
      </React.Fragment>
    );
  }
}
