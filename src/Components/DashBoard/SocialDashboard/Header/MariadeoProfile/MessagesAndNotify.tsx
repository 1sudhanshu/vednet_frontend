import { H6 } from "../../../../../AbstractElements";
import { Mariadeo, Messages, Notification } from "../../../../../Constant";
import { Link } from "react-router-dom";

const MessagesAndNotify = () => {
  return (
    <div className="flex-grow-1">
      <Link to={`${process.env.PUBLIC_URL}/user/user-profile`}><H6 className="font-danger f-w-600">{Mariadeo}</H6></Link>
      <span className="d-block">
        <span>
          <i className="f-14 fa fa-comments-o"> </i>
          <span className="px-2">
            {Messages}&nbsp;
            <span className="badge rounded-pill badge-light">9</span>
          </span>
        </span>
      </span>
      <span className="d-block">
        <span>
          <i className="f-14 fa fa-bell-o"> </i>
          <span className="px-2">
            {Notification}&nbsp;
            <span className="badge rounded-pill badge-light">9</span>
          </span>
        </span>
      </span>
    </div>
  );
};

export default MessagesAndNotify;
