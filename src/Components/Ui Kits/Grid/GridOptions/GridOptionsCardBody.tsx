import { CardBody, Table } from "reactstrap";
import { P } from "../../../../AbstractElements";
import GridOptionsthead from "./GridOptionsthead";
import GridOptionstbody from "./GridOptionstbody";

const GridOptionsCardBody = () => {
  return (
    <CardBody>
      <P>
        While Bootstrap uses <code>em </code>or <code>rem </code>for defining
        most sizes, <code>px</code> are used for grid breakpoints and container
        widths. This is because the viewport width is in pixels and does not
        change with the <a href="#javascript">font size</a>.
      </P>
      <div className="table-responsive">
        <Table striped bordered>
          <GridOptionsthead />
          <GridOptionstbody />
        </Table>
      </div>
    </CardBody>
  );
};

export default GridOptionsCardBody;
