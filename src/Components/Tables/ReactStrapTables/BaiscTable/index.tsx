import BasicTableClass from "./BasicTableClass";
import InverseTableClass from "./InverseTableClass";
import HoverableRowsClass from "./HoverableRows";
import ContextualClasses from "./ContextualClasses";
import TextClass from "./TextClass";
import TableClass from "./TableClass";
import StripedRowClass from "./StripedRowClass";
import StripeInverseClass from "./StripInverseClass";
import CaptionClass from "./Caption";
import ResponsiveClass from "./ResponsiveClass";
import BreckpointClass from "./BreckpointClass";
import TableHeadClass from "./TableHeadClass";
import InversePrimaryClass from "./InversTableClass";
import { Container, Row } from "reactstrap";
import {  useEffect } from "react";
import axios from "axios";
import { TableDataApi } from "../../../../api";
import { useDispatch } from "react-redux";

const BaiscTableComponent = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(TableDataApi)
      .then((res) => dispatch({ type: "setTableData", payload: res.data }));
  }, []);
  return (
    <Container fluid={true}>
      <Row>
        <BasicTableClass />
        <InverseTableClass />
        <InversePrimaryClass />
        <HoverableRowsClass />
        <ContextualClasses />
        <TextClass />
        <TableClass />
        <TableHeadClass />
        <StripedRowClass />
        <StripeInverseClass />
        <CaptionClass />
        <ResponsiveClass />
        <BreckpointClass />
      </Row>
    </Container>
  );
};

export default BaiscTableComponent;
