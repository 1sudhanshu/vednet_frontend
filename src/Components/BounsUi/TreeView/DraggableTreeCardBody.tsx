import React from "react";
import Tree, { useTreeState } from "react-hyper-tree";
import { TreeViewData } from "../../../Data/Components/BonusUI/TreeView";
import { CardBody } from "reactstrap";

const DraggableTreeCardBody = () => {
  const { required, handlers } = useTreeState({
    id: "tree",
    data: TreeViewData,
    defaultOpened: true,
    multipleSelect: false,
  });
  return (
    <CardBody>
      <Tree
        {...required}
        {...handlers}
        horizontalLineStyles={{
          stroke: "#c4c4c4",
          strokeWidth: 1,
          strokeDasharray: "1 4",
        }}
        verticalLineStyles={{
          stroke: "#c4c4c4",
          strokeWidth: 1,
          strokeDasharray: "1 4",
        }}
        draggable={true}
        gapMode={"padding"}
        depthGap={20}
        disableLines={false}
        disableHorizontalLines={false}
        disableVerticalLines={false}
        verticalLineTopOffset={0}
        verticalLineOffset={5}
      />
    </CardBody>
  );
};

export default DraggableTreeCardBody;
