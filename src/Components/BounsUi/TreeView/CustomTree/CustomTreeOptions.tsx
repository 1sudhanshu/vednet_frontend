import { Card, Col,  CardBody } from "reactstrap";
import { useState, Fragment } from "react";
import RowThree from "./RowThree";
import RowOne from "./RowOne";
import CbRow from "./CbRow";
import CutomTree from "./CutomTree";
import HeadingCommon from "../../../../Common/HeadingCommon";
interface deafultState {
  depthValue: number;
  topOffSet: number;
  lineOffset: number;
  GapMode: "margin" | "padding";
  nodeColor: string;
  HoverColor: string;
  VerticalColor: string;
  HorizontalColor: string;
  verticalLines: boolean;
  horizontalLines: boolean;
  DisableLines: boolean;
}
const CustomTreeOptions = () => {
  const [Values, setValues] = useState<deafultState>({
    depthValue: 20,
    topOffSet: 0,
    lineOffset: 5,
    GapMode: "padding",
    nodeColor: "",
    HoverColor: "",
    VerticalColor: "#bf5757",
    HorizontalColor: "#bf5757",
    verticalLines: false,
    horizontalLines: false,
    DisableLines: false,
  });
  const valueHandler = (value: string | boolean, keys: string) => {
    setValues((previousState: deafultState) => {
      return { ...previousState, [keys]: value };
    });
  };

  return (
    <Fragment>
      <Col sm="12" xl="6">
        <Card>
      <HeadingCommon Heading="Properties" />
          <CardBody>
            <RowOne depthValue={Values.depthValue} lineOffset={Values.lineOffset} topOffSet={Values.topOffSet} valueHandler={valueHandler}/>
            <RowThree VerticalColor={Values.VerticalColor} HorizontalColor={Values.HorizontalColor} valueHandler={valueHandler}/>
            <CbRow DisableLines={Values.DisableLines} horizontalLines={Values.horizontalLines} verticalLines={Values.verticalLines} valueHandler={valueHandler}/>
          </CardBody>
        </Card>
      </Col>
      <CutomTree Values={Values} />
    </Fragment>
  );
};
export default CustomTreeOptions;
