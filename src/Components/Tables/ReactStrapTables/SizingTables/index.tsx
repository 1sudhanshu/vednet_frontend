import { useDispatch } from "react-redux";
import DefaultTableClass from "./DefaultTable";
import ExtraLargeTablesClass from "./ExtraLargeTables";
import ExtraSmallTableClass from "./ExtraSmallTable";
import LargeTableClass from "./LargeTable";
import SmallTableClass from "./SmallTable";
import { Container, Row } from "reactstrap";
import { useEffect } from "react";
import axios from "axios";
import { TableDataApi } from "../../../../api";

const SizingTablesContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(TableDataApi)
      .then((res) => dispatch({ type: "setTableData", payload: res.data }));
  }, []);
  return (
    <Container fluid={true}>
      <Row>
        <ExtraLargeTablesClass />
        <LargeTableClass />
        <DefaultTableClass />
        <SmallTableClass />
        <ExtraSmallTableClass />
      </Row>
    </Container>
  );
};

export default SizingTablesContainer;
