import { CardFooter } from "reactstrap";
import { Btn } from "../../../../../AbstractElements";
import { Cancel, Submit } from "../../../../../Constant";

const SolidInputFormCardFooter = () => {
  return (
    <CardFooter className="text-end">
      <Btn color="primary" type="submit" className="me-2">
        {Submit}
      </Btn>
      <Btn color="light" type="reset">
        {Cancel}
      </Btn>
    </CardFooter>
  );
};

export default SolidInputFormCardFooter;
