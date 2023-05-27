import React from "react";
import { useReactToPrint } from "react-to-print";
import {useRef} from "react";
import {Fragment} from "react";
import { Col } from "reactstrap";
import { Btn } from "../../../../AbstractElements";
import { Cancel, Print } from "../../../../Constant";
import { Link } from "react-router-dom";
import ItemDescription from './ItemDescription';

const InvoiceContainer = () => {
  const componentRef = useRef<HTMLDivElement | null>(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <Fragment>
      <ItemDescription ref={componentRef} />
      <Col sm="12" className="text-center my-3">
        <Btn color="primary" className="me-2" onClick={handlePrint}>
          {Print}
        </Btn>
        <Link to={`${process.env.PUBLIC_URL}/ECommerce/Product`}>
          <Btn color="secondary">{Cancel}</Btn>
        </Link>
      </Col>
    </Fragment>
  );
};

export default InvoiceContainer;
