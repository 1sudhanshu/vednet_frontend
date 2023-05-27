import { Card, CardBody, CardHeader, TabPane } from "reactstrap";
import { H6 } from "../../../../AbstractElements";
import { CreatedByMe } from "../../../../Constant";
import ViewBookmark from "../ViewBookmarks";
import { useSelector } from "react-redux";
import DataLoop from "./DataLoop";
import { RootState } from "../ReducerTypes";
const DataLoopTab = () => {
  const { gridView } = useSelector((state:RootState) => state.BookMarkReducer);
  return (
    <TabPane tabId="1">
      <Card className="mb-0">
        <CardHeader className="d-flex">
          <H6 className="mb-0">{CreatedByMe}</H6>
          <ViewBookmark />
        </CardHeader>
        <CardBody className="pb-0">
          <div
            className={`details-bookmark text-center ${
              gridView ? "" : "list-bookmark"
            }`}
          >
            <DataLoop />
          </div>
        </CardBody>
      </Card>
    </TabPane>
  );
};

export default DataLoopTab;
