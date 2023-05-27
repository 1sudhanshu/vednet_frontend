import { H6 } from "../../../../../../AbstractElements";
import { Messages, MyPage, Notification } from "../../../../../../Constant";

const MessagesAndNotification = () => {
  return (
    <div className="flex-grow-1">
      <H6 className="font-primary f-w-600">{MyPage}</H6>
      <span className="d-block">
        <span>
          <i className="fa fa-comments-o"> </i>
          <span className="px-2">
            {Messages} <span className="badge rounded-pill badge-light">9</span>
          </span>
        </span>
      </span>
      <span className="d-block">
        <span>
          <i className="fa fa-bell-o"> </i>
          <span className="px-2">
            {Notification} <span className="badge rounded-pill badge-light">9</span>
          </span>
        </span>
      </span>
    </div>
  );
};

export default MessagesAndNotification;
