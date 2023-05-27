import { Send } from "react-feather";
import { Input } from "reactstrap";

const TypeMessage = () => {
  return (
    <div className="input-group">
      <Input placeholder="Type Your Message" />
      <span className="input-group-text">
        <Send />
      </span>
    </div>
  );
};

export default TypeMessage;
