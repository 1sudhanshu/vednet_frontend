import Breadcrumbs from "../../../../CommonElements/Breadcrumbs";
import VideoChatContainer from "../../../../Components/apps/chat/VideoChat/index";
const VideoChat = () => {
  return (
    <div className="page-body">
      <Breadcrumbs parent="Chat" title="Video Chat" />
      <VideoChatContainer />
    </div>
  );
};

export default VideoChat;
