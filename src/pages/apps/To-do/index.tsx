import Breadcrumbs from "../../../CommonElements/Breadcrumbs";
import TodoContainer from "../../../Components/apps/To-do/index";

const Todo = () => {
  return (
    <div className="page-body">
      <Breadcrumbs parent="Apps" title="Todo" />
      <TodoContainer />
    </div>
  );
};

export default Todo;
