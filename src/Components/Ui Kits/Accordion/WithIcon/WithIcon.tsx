import { useState } from "react";
import { Accordion, Col } from "react-bootstrap";
import { Card, CardBody, Collapse } from "reactstrap";
import DynamicAccordion from "./DynamicAccordion";
import HeadingCommon from "../../../../Common/HeadingCommon";

const WithIcon = () => {
  const [isOpen, setIsOpen] = useState<number | null>(1);
  const toggle = (id: number) =>
    isOpen === id ? setIsOpen(null) : setIsOpen(id);
  const span = `Add <code>&lt;i&gt;&lt;/i&gt;</code> tag Along with icon class before title text.`;
  return (
    <Col sm="12" xl="6">
      <Accordion defaultActiveKey="0">
        <Card>
          <HeadingCommon
            Heading="Accordion With Icon On Title"
            dangerouslySetInnerHTML={span}
          />
          <CardBody>
            <div className="default-according" id="accordion1">
              <Card>
                <HeadingCommon
                  className="bg-primary"
                  H5ClassName="mb-0"
                  Btn={true}
                  span={true}
                  BtnclassName="txt-white btn-link"
                  BtnColor="default"
                  BtnOnClick={() => toggle(1)}
                  BtnText="CollapsibleGroupItem"
                  BtnSpanClass="digits"
                  BtnSpanText="#1"
                  BtnIcon={<i className="icofont icofont-briefcase-alt-2"></i>}
                />
                <Collapse isOpen={isOpen === 1}>
                  <CardBody>
                    {
                      "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."
                    }
                  </CardBody>
                </Collapse>
              </Card>
              <DynamicAccordion toggle={toggle} isOpen={isOpen} />
            </div>
          </CardBody>
        </Card>
      </Accordion>
    </Col>
  );
};

export default WithIcon;
