import { CardBody } from "reactstrap";
import { LargeButtonsData } from "../../../Data/Buttons";
import { Btn } from "../../../AbstractElements";

const LargeButtonsCardBody = () => {
  return (
    <CardBody>
      <div className="btn-showcase">
        {LargeButtonsData.map((btnItem, i) => (
          <Btn color={btnItem.colorClass} size={btnItem.size} key={i}>
            {btnItem.title}
          </Btn>
        ))}
      </div>
    </CardBody>
  );
};

export default LargeButtonsCardBody;
