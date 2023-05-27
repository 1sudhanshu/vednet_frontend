import Breadcrumbs from "../../../CommonElements/Breadcrumbs";
import TasksContainer from '../../../Components/apps/Tasks/index';

const Tasks = () => {
  return (
    <div className="page-body">
      <Breadcrumbs parent="Apps" title="Tasks" />
      <TasksContainer/>
    </div>
  );
};

export default Tasks;
