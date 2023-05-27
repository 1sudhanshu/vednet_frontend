import React from "react";
import { SpinnerData } from "../../../Data/Components/UiKits/spinners";
import { Fragment } from "react";
import { Col } from "reactstrap";
import { H6, Spinner } from "../../../AbstractElements";

const DynamicSpinners = () => {
  return (
    <Fragment>
      {SpinnerData.map((spinner, i) => (
        <Col md="3" sm="6" key={i}>
          <H6 className="sub-title mb-0 text-center">{spinner.heading}</H6>
          <div className="loader-box">
            <Spinner className={spinner.spinnerClass} />
          </div>
        </Col>
      ))}
    </Fragment>
  );
};

export default DynamicSpinners;
