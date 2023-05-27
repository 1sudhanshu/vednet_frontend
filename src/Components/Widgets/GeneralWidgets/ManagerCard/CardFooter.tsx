import { CardFooter, Col } from "reactstrap";
import { H3, H6 } from "../../../../AbstractElements";
import { Follower, Following, TotalPost } from "../../../../Constant";
const ManagerCardFooter = () => {
  let datas = [
    { heading: Follower, amount: 9564 },
    { heading: Following, amount: 49 },
    { heading: TotalPost, amount: 96 },
  ];
  return (
    <CardFooter className="row widgets-custom-footer">
      {datas.map((data, index) => (
        <Col xs="4" sm="4" key={index}>
          <H6>{data.heading}</H6>
          <H3 className="counter">{data.amount}</H3>
        </Col>
      ))}
    </CardFooter>
  );
};

export default ManagerCardFooter;
