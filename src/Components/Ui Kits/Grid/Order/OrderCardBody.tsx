import OrderBody from "./OrderBody";
import { P } from "../../../../AbstractElements";
import { CardBody } from "reactstrap";

const OrderCardBody = () => {
  return (
    <CardBody className=" grid-showcase">
      <P>
        Use <code>.order-</code> classes for controlling the{" "}
        <strong>visual order</strong> of your content. These classes are
        responsive, so you can set the <code>order</code> by breakpoint (e.g.,{" "}
        <code>.order-1.order-md-2</code>). Includes support for <code>1</code>{" "}
        through <code>12</code> across all five grid tiers.
      </P>
      <OrderBody />
    </CardBody>
  );
};

export default OrderCardBody;
