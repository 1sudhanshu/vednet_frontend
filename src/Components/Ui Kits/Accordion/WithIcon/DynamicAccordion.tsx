import { Fragment } from "react";
import { Card, CardBody, Collapse } from "reactstrap";
import HeadingCommon from "../../../../Common/HeadingCommon";
interface propsType {
  toggle?: (message: number) => void;
  isOpen?: any;
}

const DynamicAccordion = (props: propsType) => {
  const data = [
    {
      id: 2,
      icon: "icofont-support",
    },
    {
      id: 3,
      icon: "icofont-tasks-alt",
    },
  ];
  return (
    <Fragment>
      {data.map((accordian, i) => (
        <Card key={i}>
          <HeadingCommon
            className="bg-primary"
            H5ClassName="mb-0"
            Btn={true}
            span={true}
            BtnclassName="txt-white btn-link"
            BtnColor="default"
            BtnOnClickParameter={accordian.id}
            BtnOnClick={props.toggle}
            BtnText="CollapsibleGroupItem"
            BtnSpanClass="digits"
            BtnSpanText={`#${accordian.id}`}
            BtnIcon={<i className={`icofont ${accordian.icon}`}></i>}
          />
          <Collapse isOpen={props.isOpen === accordian.id}>
            <CardBody>
              {
                "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."
              }
            </CardBody>
          </Collapse>
        </Card>
      ))}
    </Fragment>
  );
};

export default DynamicAccordion;
