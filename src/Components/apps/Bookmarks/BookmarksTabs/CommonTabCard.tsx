import { Card, CardBody, CardHeader, TabPane } from "reactstrap";
import { H6 } from "../../../../AbstractElements";
import ViewBookmark from "../ViewBookmarks";
import { NoBookmarksFound } from "../../../../Constant";
interface propsType {
  tabId: string;
  tittle: string;
}
const CommonTabCard = ({ tabId, tittle }: propsType) => {
  return (
    <TabPane tabId={tabId}>
      <Card className="mb-0">
        <CardHeader className="d-flex">
          <H6 className="mb-0">{tittle}</H6>
          <ViewBookmark />
        </CardHeader>
        <CardBody>
          <div className="details-bookmark text-center">
            <div className="no-favourite">
              <span>{NoBookmarksFound}</span>
            </div>
          </div>
        </CardBody>
      </Card>
    </TabPane>
  );
};

export default CommonTabCard;
