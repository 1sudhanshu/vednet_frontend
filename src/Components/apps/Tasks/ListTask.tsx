import { useRef } from "react";
import ReactToPrint from "react-to-print";
import { Printer } from "react-feather";
import { Card, CardHeader } from "reactstrap";
import { CreatedByMe, Href, Print } from "../../../Constant";
import { H5 } from "../../../AbstractElements";
import CreatedByme from "./CreatedByme";

const ListOfTask = () => {
  const componentRef = useRef();
  return (
    <Card className="mb-0">
      <CardHeader className="d-flex">
        <H5 className="mb-0">{CreatedByMe}</H5>
        <ReactToPrint
          trigger={() => (
            <a href={Href}>
              <Printer className="me-2" />
              {Print}
            </a>
          )}
          content={() => componentRef.current || null}
        />
      </CardHeader>
      <CreatedByme />
    </Card>
  );
};

export default ListOfTask;
