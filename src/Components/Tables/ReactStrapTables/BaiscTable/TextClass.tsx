import HeadingCommon from "../../../../Common/HeadingCommon";
import { TextBackgroundUtilities } from "../../../../Constant";
import { Col, Card, Table } from "reactstrap";
import { TextClassData } from "../../../../Data/table/ReactStrepTable";

const TextClass = () => {
  const spanText = `Regular table background variants are not available with the inverse table, however, you may use Classes <code>bg-dark</code>,<code>bg-warning</code>,<code>bg-success</code>,<code>bg-info</code>,<code>bg-danger</code>,<code>bg-primary</code>,<code>bg-secondary</code>,<code>bg-light</code> in<code>td</code>`;
  return (
    <Col sm="12">
      <Card>
        <HeadingCommon Heading={TextBackgroundUtilities} span={true} dangerouslySetInnerHTML={spanText}/>
        <div className="table-responsive">
          <Table className="table-borderedfor">
            <thead>
              <tr>
                <th scope="col">{"#"}</th>
                <th scope="col">{"Heading"}</th>
                <th scope="col">{"Heading"}</th>
              </tr>
            </thead>
            <tbody>
              {TextClassData.map((data, index) => (
                <tr className={data.trClass ? data.trClass : ""} key={index}>
                  <td className={data.tdClass}>{index + 1}</td>
                  <td className={data.tdClass}>{data.tdText1}</td>
                  <td className={data.tdClass}>{data.tdText1}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Card>
    </Col>
  );
};

export default TextClass;