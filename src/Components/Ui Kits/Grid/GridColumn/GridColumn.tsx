import { Card } from "reactstrap";
import HeadingCommon from "../../../../Common/HeadingCommon";
import GridColumnCardBody from "./GridColumnCardBody";

const GridColumn = () => {
  return (
    <Card>
      <HeadingCommon Heading="Grid Column" />
      <GridColumnCardBody />
    </Card>
  );
};
export default GridColumn;
