import Breadcrumbs from "../../../../CommonElements/Breadcrumbs";
import ChatappConatainer from "../../../../Components/apps/chat/Chatapp/index";
const Chatapp = () => {
  return (
    <div className="page-body">
      <Breadcrumbs parent="Chat" title="Chat app" />
      <ChatappConatainer />
    </div>
  );
};

export default Chatapp;
