import { Card, CardBody } from "reactstrap";
import { Remote } from "../../../../Constant";
import RemoteCardBody from "./RemoteCardBody";
import HeadingCommon from "../../../../Common/HeadingCommon";

const RemoteTypeahead = () => {
  return (
    <Card>
      <HeadingCommon
        Heading={Remote}
        dangerouslySetInnerHTML=" Remote data is only used when the data provided by local and prefetch is insufficient"
      />
      <CardBody>
        <div id="remote">
          <RemoteCardBody />
        </div>
      </CardBody>
    </Card>
  );
};

export default RemoteTypeahead;
