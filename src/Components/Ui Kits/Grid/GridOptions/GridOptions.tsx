import { Card } from "reactstrap";
import HeadingCommon from "../../../../Common/HeadingCommon";
import GridOptionsCardBody from "./GridOptionsCardBody";
const GridOptions = () => {
  return (
    <Card>
      <HeadingCommon Heading="Grid Options" />
      <GridOptionsCardBody />
    </Card>
  );
};

export default GridOptions;
