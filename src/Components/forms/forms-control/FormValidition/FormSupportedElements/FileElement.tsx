import { Input } from "reactstrap";
import { InvalidFile } from "../../../../../Constant";

const FileElement = () => {
  return (
    <div className="mb-3">
      <Input type="file" aria-label="file example" required />
      <div className="invalid-feedback">{InvalidFile}</div>
    </div>
  );
};

export default FileElement;