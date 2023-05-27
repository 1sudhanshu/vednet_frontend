import { toast } from "react-toastify";
import { H4,  } from "../../../AbstractElements";
import { useSelector, useDispatch } from "react-redux";

const TodoList = () => {
  const { allTodos } = useSelector((state: any) => state.TodoReducer);
  const dispatch = useDispatch();
  const handleRemoveTodo = (todoId: any, todo: any) => {
    dispatch({ type: "removeItems", payload: todoId });
    toast.success(`${todo} deleted`);
  };
  const handleMarkedTodo = (item: any) => {
    if (item.status === "completed") {
      dispatch({
        type: "selectItem",
        payload: {id: item.id,status: "pending",badgeClass: "badge-light-danger",},
      });
      toast.error(item.title + " as Incomplete");
    } else if (item.status === "pending") {
      dispatch({
        type: "selectItem",
        payload: {id: item.id,status: "completed",badgeClass: "badge-light-success",},
      });
      toast.success(item.title + " as Complete");
    }
  };
  return (
    <div className="todo-list-body">
      <ul className="simple-list" id="todo-list">
        {allTodos.length > 0
          ? allTodos?.map((todo: any, index: any) => (
              <li className={`task ${todo.status}`} key={index}>
                <div className="task-container d-flex align-items-center justify-content-between">
                  <H4 className="task-label">{todo.title}</H4>
                  <span className="task-action-btn">
                    <span
                      onClick={() => handleRemoveTodo(todo.id, todo.title)}
                      className="action-box large delete-btn"
                    >
                      <i className="icon">
                        <i className="icon-trash" />
                      </i>
                    </span>
                    <span
                      className="action-box large complete-btn"
                      onClick={() => handleMarkedTodo(todo)}
                    >
                      <i className="icon">
                        <i className="icon-check" />
                      </i>
                    </span>
                  </span>
                </div>
              </li>
            ))
          : ""}
      </ul>
    </div>
  );
};
export default TodoList;
