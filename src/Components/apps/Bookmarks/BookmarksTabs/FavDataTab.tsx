import { Card, CardBody, CardHeader, TabPane } from "reactstrap";
import { H6 } from "../../../../AbstractElements";
import { Favourites } from "../../../../Constant";
import ViewBookmark from "../ViewBookmarks";
import { useSelector } from "react-redux";
import FavDataLoop from "./FavDataLoop";
import { RootState } from "../ReducerTypes";

const FavDataTab = () => {
  const { gridView } = useSelector((state: RootState) => state.BookMarkReducer);
  return (
    <TabPane tabId="2">
      <Card className="mb-0">
        <CardHeader className="d-flex">
          <H6 className="mb-0">{Favourites}</H6>
          <ViewBookmark />
        </CardHeader>
        <CardBody>
          <div
            className={`details-bookmark text-center ${
              gridView ? "" : "list-bookmark"
            }`}
          >
            <FavDataLoop />
          </div>
        </CardBody>
      </Card>
    </TabPane>
  );
};

export default FavDataTab;
