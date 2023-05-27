import { Col, Card, CardBody } from "reactstrap";
import Tree, { useTreeState } from "react-hyper-tree";
import { treeData } from "../../../../Data/Components/BonusUI/TreeBasicData";
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

interface propsTypes {
  Values: deafultState;
}

const CutomTree = (props: propsTypes) => {
  const { required, handlers } = useTreeState({
    id: "CustomTree",
    data: treeData,
    defaultOpened: true,
    multipleSelect: false,
  });
  return (
    <Col sm="12" xl="6">
      <Card>
        <HeadingCommon Heading="Custom Tree" />
        <CardBody>
          <Tree
            {...required}
            {...handlers}
            horizontalLineStyles={{
              stroke: props.Values.HorizontalColor,
              strokeWidth: 1,
              strokeDasharray: "1 4",
            }}
            verticalLineStyles={{
              stroke: props.Values.VerticalColor,
              strokeWidth: 1,
              strokeDasharray: "1 4",
            }}
            draggable={false}
            gapMode={props.Values.GapMode}
            depthGap={props.Values.depthValue}
            disableLines={props.Values.DisableLines}
            disableHorizontalLines={props.Values.horizontalLines}
            disableVerticalLines={props.Values.verticalLines}
            verticalLineTopOffset={props.Values.lineOffset}
            verticalLineOffset={props.Values.lineOffset}
          />
        </CardBody>
      </Card>
    </Col>
  );
};

export default CutomTree;
