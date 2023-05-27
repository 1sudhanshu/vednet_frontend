import classNames from "classnames";
import  { useCallback } from "react";
import Tree, { useTreeState, treeHandlers } from "react-hyper-tree";
import { TreeViewData } from "../../../Data/Components/BonusUI/TreeView";
import { Fragment } from "react";
import { Card, CardBody,  Col } from "reactstrap";
import HeadingCommon from "../../../Common/HeadingCommon";

const Component = () => {
  const { required, handlers } = useTreeState({
    id: "tree",
    data: TreeViewData,
    defaultOpened: true,
    multipleSelect: false,
  });

  const renderNode = useCallback(
    ({ node, onToggle }: any) => (
      <div className="tree-node" key={node.data.title}>
        <div
          onClick={onToggle}
          className={classNames({
            "tree-icon": true,
            "empty-icon": !node.hasChildren(),
            [node.options.opened ? "close-icon" : "open-icon"]:
              node.hasChildren(),
          })}
        />
        <div
          className={classNames({
            "node-content-wrapper": true,
            "node-selected": node.isSelected(),
          })}
          onClick={() =>
            treeHandlers.trees.tree.handlers.setSelected(
              node,
              !node.isSelected()
            )
          }
        >
          <div className="titles">
            <div className="node-title">{node.data.name}</div>
            {node.data.title && (
              <div className="node-subtitle">{node.data.title}</div>
            )}
          </div>
          {!!node.options.childrenCount && (
            <div className="children-length">
              <div>{node.options.childrenCount}</div>
            </div>
          )}
        </div>
      </div>
    ),
    []
  );

  return (
    <Fragment>
      <Col sm="12" xl="6">
        <Card>
          <HeadingCommon Heading="Enhance Tree" />
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
              verticalLineTopOffset={-17}
              verticalLineOffset={5}
              renderNode={renderNode}
            />
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};

export default Component;
