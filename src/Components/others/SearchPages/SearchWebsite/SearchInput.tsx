import { CardHeader, FormGroup, Input, Label } from "reactstrap";
import { Email } from "../../../../Constant";

const SearchInput = () => {
  return (
    <CardHeader>
      <form className="search-form">
        <FormGroup className="m-0 form-group">
          <Label className="sr-only">{Email}</Label>
          <Input
            className="form-control-plaintext"
            type="search"
            placeholder="Search.."
          />
        </FormGroup>
      </form>
    </CardHeader>
  );
};

export default SearchInput;
