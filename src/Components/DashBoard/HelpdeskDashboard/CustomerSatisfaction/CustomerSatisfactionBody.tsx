import { CardBody, Table } from "reactstrap";
import { TableBodyDetails } from "../../../../Data/Components/HelpdeskDashBoard/CustomerSatisfication";
import { P } from "../../../../AbstractElements";

const CustomerSatisfactionBody = () => {
  return (
    <CardBody className=" p-0">
      <div className="satisfaction-table table-responsive theme-scrollbar">
        <Table className=" table-bordernone">
          <tbody>
            {TableBodyDetails.map((data, index) => (
              <tr key={index}>
                <td>
                  <P className="f-w-600">{data.tittle}</P>
                  <span className="d-block">
                    <span className={data.nameClasss}>{data.name} </span>
                    <span>{data.city}</span>
                  </span>
                </td>
                <td>
                  <P className="f-w-600 light-font mb-0">{data.number}</P>
                </td>
                <td>
                  <span>{data.percantage}</span>
                </td>
                <td>
                  <div className="number-radial">
                    <div className={data.radialClass} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </CardBody>
  );
};

export default CustomerSatisfactionBody;
