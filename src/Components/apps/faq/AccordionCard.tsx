import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "react-feather";
import { Card, CardBody, CardHeader, Collapse } from "reactstrap";
import { H5, Btn, P } from "../../../AbstractElements";
interface propsType {
  item: { id: number; title: string; paragraph: string };
}
const AccordionCard = ({ item }: propsType) => {
  const [isActivity, setIsActivity] = useState(false);
  const handelChange = () => {
    setIsActivity(!isActivity);
  };
  return (
    <Card>
      <CardHeader>
        <H5 className="mb-0">
          <Btn color="link p-0 d-flex align-items-center gap-2 justify-content-between" onClick={handelChange}>
            <span className="d-flex align-items-center gap-2">
              <HelpCircle className="position-relative inset-0 m-0" />
              {item.title}
            </span>
            {isActivity ? (
              <ChevronUp className="position-relative inset-0 m-0" />
            ) : (
              <ChevronDown className="position-relative inset-0 m-0" />
            )}
          </Btn>
        </H5>
      </CardHeader>
      <Collapse isOpen={isActivity}>
        <CardBody>
          <P>{item.paragraph}</P>
        </CardBody>
      </Collapse>
    </Card>
  );
};

export default AccordionCard;
