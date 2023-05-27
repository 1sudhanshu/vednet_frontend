import { useSelector } from "react-redux";
import { Card, CardBody, CardHeader, TabPane } from "reactstrap";
import { H6 } from "../../../../AbstractElements";
import ViewBookmark from "../ViewBookmarks";
import DataLoop from "./DataLoop";
import { MyBookmark } from "../../../../Constant";
import { RootState } from "../ReducerTypes";

const MyBookmarkTab = () => {
  const { gridView } = useSelector((state: RootState) => state.BookMarkReducer);
  return (
    <TabPane tabId="4">
      <Card className="mb-0">
        <CardHeader className="d-flex">
          <H6 className="mb-0">{MyBookmark}</H6>
          <ViewBookmark />
        </CardHeader>
        <CardBody>
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

export default MyBookmarkTab;
