import { Link, MoreHorizontal, Trash2 } from 'react-feather';
import { CardBody, Table } from 'reactstrap';
import SweetAlert from 'sweetalert2';
import { Href, NoTasksFound } from '../../../Constant';
import { H6, P } from '../../../AbstractElements';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { TaskReducerTypes } from './TasksReducerTypes';

const CreatedByme = () => {
  const { allTask } = useSelector((state: TaskReducerTypes) => state.TaskReducer);
  const dispatch = useDispatch();
  const deleteTask = (userId:number) => {
    SweetAlert.fire({
      title: 'Are you sure?',
      text: 'Once deleted, you will not be able to recover this imaginary file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Ok',
      cancelButtonText: 'cancel',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        dispatch({ type: "RemoveTask", payload: userId });
        SweetAlert.fire( 'Deleted!', 'Your file has been deleted.', 'success');
      } else {SweetAlert.fire('Your imaginary file is safe!')}
    });
  };

  return (
      <CardBody className="p-0">
        <div className="taskadd">
          <div className="table-responsive table-borderless">
            <Table borderless>
              <thead><tr></tr></thead>
              <tbody>
                {allTask && allTask.length ?
                  allTask.map((tasklistdata) => {
                    return (
                      <tr key={tasklistdata.id}>
                        <td>
                          <H6  className= 'task_title_0'  >{tasklistdata.title}</H6>
                          <P  className= 'project_name_0'  >{tasklistdata.collection}</P>
                        </td>
                        <td>
                          <P  className= 'task_desc_0'  >{tasklistdata.desc}</P>
                        </td>
                        <td>
                          <a className="me-2" href={Href}><Link /></a>
                          <a href={Href}><MoreHorizontal /></a>
                        </td>
                        <td><a href={Href} onClick={() => deleteTask(tasklistdata.id)}><Trash2 /></a></td>
                      </tr>
                    );
                  })
                  : <tr><td><div className="no-favourite"><span>{NoTasksFound}</span></div></td></tr>
                }
              </tbody>
            </Table>
          </div>
        </div>
      </CardBody>
  );
};

export default CreatedByme;