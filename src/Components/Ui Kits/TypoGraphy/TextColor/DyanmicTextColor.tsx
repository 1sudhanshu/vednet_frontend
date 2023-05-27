import { Fragment } from "react";
import { TextColordatas } from "../../../../Data/Components/UiKits/Typography/TextColors";
import { P } from "../../../../AbstractElements";

const DyanmicTextColor = () => {
  return (
    <Fragment>
      {TextColordatas.map((data, index) => (
        <P key={index} className={data.className}>
          {data.text}
          <code>.{data.className}</code> class
        </P>
      ))}
    </Fragment>
  );
};

export default DyanmicTextColor;
