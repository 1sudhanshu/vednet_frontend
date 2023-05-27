import { Fragment } from "react";
import { ScrollBtnData } from "../../../../../Data/Components/UiKits/scroll";
import { P } from "../../../../../AbstractElements";

const DynamicModal = () => {
  let number = [1, 2, 3, 4, 5];

  return (
    <Fragment>
      {number.map((data) => (
        <Fragment key={data}>
          {ScrollBtnData.map((data, index) => (
            <Fragment key={index}>
              <P>{data.paraOne}</P>
              <P>{data.paraTwo}</P>
              <P>{data.paraThree}</P>
            </Fragment>
          ))}
        </Fragment>
      ))}
    </Fragment>
  );
};

export default DynamicModal;
