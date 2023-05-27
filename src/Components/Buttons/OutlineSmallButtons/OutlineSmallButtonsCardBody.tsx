import { CardBody } from "reactstrap";
import { OutlineSmallButtonsData } from "../../../Data/Buttons";
import { Btn } from "../../../AbstractElements";

const OutlineSmallButtonsCardBody = () => {
  return (
    <CardBody>
      <div className="btn-showcase">
        {OutlineSmallButtonsData.map((btnItem, i) => (
          <Btn
            size={btnItem.size}
            outline={btnItem?.outline && true}
            color={btnItem.colorClass}
            key={i}
          >
            {btnItem.title}
          </Btn>
        ))}
      </div>
    </CardBody>
  );
};
export default OutlineSmallButtonsCardBody;
