import { Card, CardBody, CardHeader, TabPane } from "reactstrap";
import { H6 } from "../../../../AbstractElements";
import ViewBookmark from "../ViewBookmarks";
import { Newsletter, NoBookmarksFound } from "../../../../Constant";

const NewsletterTab = () => {
  return (
    <TabPane tabId="6">
      <Card className="mb-0">
        <CardHeader className="d-flex">
          <H6 className="mb-0">{Newsletter}</H6>
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

export default NewsletterTab;
