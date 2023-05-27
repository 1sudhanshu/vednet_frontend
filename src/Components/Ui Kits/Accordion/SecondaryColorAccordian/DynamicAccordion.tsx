import { Fragment } from "react";
import { Card, CardBody, Collapse } from "reactstrap";
import HeadingCommon from "../../../../Common/HeadingCommon";
interface propsType {
  toggle?: (message: number) => void;
  isOpen?: any;
}
const data = [2, 3];

const DynamicAccordion = (props: propsType) => {
  return (
    <Fragment>
      {data.map((accordian, i) => (
        <Card key={i}>
          <HeadingCommon
            className="bg-secondary"
            H5ClassName="mb-0"
            Btn={true}
            span={true}
            BtnclassName="btn-link txt-white"
            BtnColor="default"
            BtnOnClickParameter={accordian}
            BtnOnClick={props.toggle}
            BtnText="CollapsibleGroupItem"
            BtnSpanClass="digits"
            BtnSpanText={`#${accordian}`}
          />
          <Collapse isOpen={props.isOpen === accordian}>
            <CardBody>
              {
                "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et."
              }
            </CardBody>
          </Collapse>
        </Card>
      ))}
    </Fragment>
  );
};

export default DynamicAccordion;
