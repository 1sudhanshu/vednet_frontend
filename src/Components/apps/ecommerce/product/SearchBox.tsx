import { useState } from "react";
import { useDispatch } from "react-redux";
import { Col, Form, FormGroup, Input } from "reactstrap";

const SearchBox = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const dispatch = useDispatch();
  const handleSearchKeyword = (keyword: string) => {
    setSearchKeyword(keyword);
    dispatch({ type: "filterSearchBy", payload: searchKeyword });
  };
  return (
    <Col md="9" sm="12">
      <Form>
        <FormGroup className="m-0 form-group">
          <Input
            type="text"
            placeholder="Search.."
            defaultValue={searchKeyword}
            onChange={(e) => handleSearchKeyword(e.target.value)}
          />
          <i className="fa fa-search"></i>
        </FormGroup>
      </Form>
    </Col>
  );
};

export default SearchBox;
