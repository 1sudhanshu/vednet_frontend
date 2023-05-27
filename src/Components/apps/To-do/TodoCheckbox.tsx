import { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch } from 'react-redux';
import axios from "axios";
import { TodoApi } from "../../../api";
import { useSelector } from "react-redux";

const TodoCheckbox = () => {
  const [markAll, setMarkAll] = useState(true);
  const { allTodos } = useSelector((state: any) => state.TodoReducer);
  const dispatch =useDispatch()
  const markAllStatus = () => {
    setMarkAll(!markAll);
    if (markAll === true) {
      toast.error("All Task In-Completed !");
    } else {
      toast.success("All Task Completed !");
    }
    const updateStatus = allTodos.reduce((cartAcc:any, item:any) => {
      if (markAll === false) {
        cartAcc.push({ ...item, status: 'completed' });
      } else {
        cartAcc.push({ ...item, status: 'pending' });
      }
      return cartAcc;
    }, []);
    updateStatus.map((todo:any) => {
      return axios.put(`${TodoApi}/${todo.id}`, todo);
    });
    dispatch({ type: "setAllTodo", payload: updateStatus });
  };
  return (
    <div className="mark-all-tasks">
      <div className="mark-all-tasks-container">
        <span className="mark-all-btn  d-flex align-items-center gap-1" role="button">
          <span className="btn-label txt-danger">{"Mark all as finished"}</span>
          <span className="action-box completed" onClick={markAllStatus}>
            {markAll && <i className="icon"><i className="icon-check" /></i>}
          </span>
        </span>
      </div>
    </div>
  );
};
export default TodoCheckbox;
