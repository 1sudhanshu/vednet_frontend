import { Fragment } from "react";
import { Container, Row } from "reactstrap";
import EdgeButtonContain from "./Edge";
import FlatButtonContain from "./FlatBtn";
import GroupButtonClass from "./GroupBtn/GroupButton";
import RaisedButtonContain from "./RaisedBtn";
import DefaultButtons from "./DefaultButtons";
import LargeButtons from "./LargeButtons";
import SmallButtons from "./SmallButtons";
import ExtraSmallButtons from "./ExtraSmallButtons";
import DisabledButtons from "./DisabledButtons";
import OutlineButtons from "./OutlineButtons";
import OutlineLargeButtons from "./OutlineLargeButtons";
import OutlineSmallButtons from "./OutlineSmallButtons";
import OutlineExtraSmallButtons from "./OutlineExtraSmallButtons";
import ActiveButton from "./ActiveButton";
import DisabledOutlineButtons from "./DisabledOutlineButtons ";
import GradienButtons from "./GradienButtons";

const ButtonsContainer = () => {
  return (
    <Fragment>
      <Container fluid={true}>
        <Row>
          <FlatButtonContain />
          <EdgeButtonContain />
          <RaisedButtonContain />
          <GroupButtonClass />
          <DefaultButtons />
          <LargeButtons />
          <SmallButtons />
          <ExtraSmallButtons />
          <ActiveButton />
          <DisabledButtons />
          <OutlineButtons />
          <OutlineLargeButtons />
          <OutlineSmallButtons />
          <OutlineExtraSmallButtons />
          <DisabledOutlineButtons />
          <GradienButtons />
        </Row>
      </Container>
    </Fragment>
  );
};
export default ButtonsContainer;
