import { CardBody } from "reactstrap";
import { ExtraSmallButtonsData } from "../../../Data/Buttons";
import { Btn } from "../../../AbstractElements";

const ExtraSmallButtonsCardBody = () => {
  return (
    <CardBody>
      <div className="btn-showcase">
        {ExtraSmallButtonsData.map((btnItem, i) => (
          <Btn color={btnItem.colorClass} size={btnItem.size} key={i}>
            {btnItem.title}
          </Btn>
        ))}
      </div>
    </CardBody>
  );
};

export default ExtraSmallButtonsCardBody;
