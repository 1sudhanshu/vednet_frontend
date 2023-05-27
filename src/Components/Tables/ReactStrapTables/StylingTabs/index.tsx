import DefultStylingClass from "./DefultStyling";
import TableBackgroundClass from "./TableBackground";
import TableHeadOptionsClass from "./TableHeadOptions";
import TableFooterStylingClass from "./TableFooterStyling";
import CustomTableColorClass from "./CustomTableColor";
import CustomHoverClass from "./CustomeHover";
import { Container, Row } from "reactstrap";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { TableDataApi } from "../../../../api";

const StylingTabsContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(TableDataApi)
      .then((res) => dispatch({ type: "setTableData", payload: res.data }));
  }, []);
  return (
    <Container fluid={true}>
      <Row>
        <DefultStylingClass />
        <TableHeadOptionsClass />
        <TableBackgroundClass />
        <TableFooterStylingClass />
        <CustomTableColorClass />
        <CustomHoverClass />
      </Row>
    </Container>
  );
};

export default StylingTabsContainer;
