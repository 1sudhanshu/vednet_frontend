import { CardHeader } from "reactstrap";
import { H5 } from "../../../AbstractElements";
import { Todo } from "../../../Constant";
import TodoCheckbox from "./TodoCheckbox";

const TodoHeader = () => {
  return (
    <CardHeader className="d-flex align-items-center justify-content-between">
      <H5>{Todo}</H5>
      <div className="d-flex align-items-center gap-3">
        <div className="todo">
          <div className="todo-list-wrapper">
            <TodoCheckbox />
          </div>
        </div>
      </div>
    </CardHeader>
  );
};

export default TodoHeader;
