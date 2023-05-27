import React, { Fragment } from "react";
import { Container, Row } from "reactstrap";
import BasicClass from "./Basic";
import PearlsStepSizingClass from "./PearlsStepSizing";
import PearlsStepStatesClass from "./PearlsStepStates";
import StepsSizingClass from "./StepSizing";
import StepsStatesClass from "./StepsStates";
import DefaultSteps from "./DefaultSteps/DefaultSteps";
import PearlsStepsClass from "./PearlsSteps";
import StepsWithIcon from "./StepsWithIcon/StepsWithIcon";
import VerticalStepClass from "./VerticalStep";

const StepsContainer = () => {
  return (
    <Fragment>
      <Container fluid={true}>
        <Row>
          <BasicClass />
          <StepsWithIcon />
          <StepsStatesClass />
          <StepsSizingClass />
          <VerticalStepClass />
          <DefaultSteps />
          <PearlsStepsClass />
          <PearlsStepSizingClass />
          <PearlsStepStatesClass />
        </Row>
      </Container>
    </Fragment>
  );
};

export default StepsContainer;
