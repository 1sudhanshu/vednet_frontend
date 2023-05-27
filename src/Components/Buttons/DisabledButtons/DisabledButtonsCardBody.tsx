import React from "react";
import { CardBody } from "reactstrap";
import { DisabledButtonsData } from "../../../Data/Buttons";
import { Btn } from "../../../AbstractElements";

const DisabledButtonsCardBody = () => {
  return (
    <CardBody>
      <div className="btn-showcase">
        {DisabledButtonsData.map((btnItem, i) => (
          <Btn
            color={btnItem.colorClass}
            disabled={btnItem.disabled && true}
            key={i}
          >
            {btnItem.title}
          </Btn>
        ))}
      </div>
    </CardBody>
  );
};

export default DisabledButtonsCardBody;
