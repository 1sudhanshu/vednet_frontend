import { Fragment } from "react";
import { Card, CardBody, Collapse } from "reactstrap";
import HeadingCommon from "../../../../Common/HeadingCommon";
interface propsType {
  toggle?: (message: number) => void;
  isOpen?: any;
  id?: any;
}

const DynamicAccordion = (props: propsType) => {
  const { toggle } = props;
  return (
    <Fragment>
      {props.id.map((data: number) => (
        <Card key={data}>
          <HeadingCommon
            H5ClassName="mb-0"
            Btn={true}
            span={true}
            BtnclassName="btn-link"
            BtnColor="default"
            BtnOnClickParameter={data}
            BtnOnClick={toggle}
            BtnText="CollapsibleGroupItem"
            BtnSpanClass="digits"
            BtnSpanText={`#${data}`}
          />
          <Collapse isOpen={props.isOpen === data}>
            <CardBody>
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. 3 wolf moon officia aute, non
              cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
              laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
              on it squid single-origin coffee nulla assumenda shoreditch et.
            </CardBody>
          </Collapse>
        </Card>
      ))}
    </Fragment>
  );
};

export default DynamicAccordion;
