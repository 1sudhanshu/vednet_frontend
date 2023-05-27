import { ContextualClasses } from "../../../../../Constant";
import { Col, Card, Table } from "reactstrap";
import HeadingCommon from "../../../../../Common/HeadingCommon";
import ContextualClassesTBody from "./ContextualClassesTBody";

const ContextualClass = () => {
  const spanText = `Use contextual classes to color table rows or individual cells. you may use Classes <code>table-primary</code>,<code>table-secondary</code>,<code>table-success</code>,<code>table-info</code>,<code>table-warning</code>,<code>table-danger</code>,<code>table-light</code>,<code>table-active</code> in<code>tr</code>`;
  return (
    <Col sm="12">
      <Card>
        <HeadingCommon Heading={ContextualClasses} span={true} dangerouslySetInnerHTML={spanText}/>
        <div className="table-responsive">
          <Table>
            <thead>
              <tr>
                <th scope="col">{"Class"}</th>
                <th scope="col">{"Heading"}</th>
                <th scope="col">{"Heading"}</th>
              </tr>
            </thead>
            <ContextualClassesTBody />
          </Table>
        </div>
      </Card>
    </Col>
  );
};

export default ContextualClass;
