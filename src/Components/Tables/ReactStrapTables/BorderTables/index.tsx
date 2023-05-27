import { useDispatch } from "react-redux";
import BorderBottomClass from "./BorderBottomClass";
import BorderlessClass from "./BorderlessClass";
import BothBordedsClass from "./BothBordedsClass";
import DashedBorderClass from "./DashedBorderClass";
import DefaultTableClass from "./DefaultTableClass";
import DottedBorderClass from "./DottedBorderClass";
import DoubleBorderClass from "./DoubleBorderClass";
import HorizontalTableClass from "./HorizontalTableClass";
import SolidBorderClass from "./SolidBorderClass";
import VerticalBordersClass from "./VerticalBordersClass";
import { Container, Row } from "reactstrap";
import { useEffect } from "react";
import axios from "axios";
import { TableDataApi } from "../../../../api";

const BorderTablesContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(TableDataApi)
      .then((res) => dispatch({ type: "setTableData", payload: res.data }));
  }, []);
  return (
    <Container fluid={true}>
      <Row>
        <HorizontalTableClass />
        <VerticalBordersClass />
        <BothBordedsClass />
        <BorderlessClass />
        <DefaultTableClass />
        <SolidBorderClass />
        <DoubleBorderClass />
        <DottedBorderClass />
        <DashedBorderClass />
        <BorderBottomClass />
      </Row>
    </Container>
  );
};

export default BorderTablesContainer;
