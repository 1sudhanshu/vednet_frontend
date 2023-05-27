import { Col } from "reactstrap";
import { Image, P } from "../../../AbstractElements";

const SearchNotFoundClass = () => {
  const imagePath = require("../../../assets/images/search-not-found.png");
  return (
    <Col sm="12">
      <div>
        <div className="search-not-found text-center">
          <Image
            src={imagePath}
            alt="image"
            className="second-search"
            style={{ display: "inline" }}
          />
          <P className="mb-0">{"Sorry, Not Found Any Contact"}</P>
        </div>
      </div>
    </Col>
  );
};

export default SearchNotFoundClass;
