import { Fragment } from "react";
import { BadgesButtons } from "../../../../Data/Components/TagPills";
import { Btn } from "../../../../AbstractElements";

const DyanmicBadgesAsPartButtons = () => {
  interface BadgesButtonsType {
    buttonclass: string;
    tittle: string;
    icon: JSX.Element;
  }
  return (
    <Fragment>
      {BadgesButtons.map((data: BadgesButtonsType, index: number) => (
        <div key={index} className="mb-3">
          <Btn color={data.buttonclass}>
            {data.tittle} <span className="badge text-dark rounded-pill badge-light">{data.icon}</span>
          </Btn>
        </div>
      ))}
    </Fragment>
  );
};

export default DyanmicBadgesAsPartButtons;
