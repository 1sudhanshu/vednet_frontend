import { Link, MoreHorizontal, Printer, Trash2 } from 'react-feather';
import { Card, CardBody, CardHeader, Table } from 'reactstrap';
import SweetAlert from 'sweetalert2';
import { Href, NoTasksFound, Print } from '../../../Constant';
import { H6, P } from '../../../AbstractElements';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { TaskReducerTypes } from './TasksReducerTypes';
interface propType{
  title:string
}
const AssignedToMeClass = ({ title }:propType) => {
  const { newTask } = useSelector((state: TaskReducerTypes) => state.TaskReducer);
  const dispatch = useDispatch();

  const deleteTask = (taskId:number) => {
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
        dispatch({ type: "RemoveTask", payload: taskId });
        SweetAlert.fire('Deleted!','Your file has been deleted.','success');
      } else {
        SweetAlert.fire('Your imaginary file is safe!');
      }
    });
  };

  return (
      <Card className="mb-0">
        <CardHeader className="d-flex">
          <H6  className= 'mb-0 f-w-600'  >{title}</H6>
          <a href={Href}><Printer className="me-2" />{Print}</a>
        </CardHeader>
        <CardBody className="p-0">
          <div className="taskadd">
            <div className="table-responsive">
              <Table>
                <tbody>
                  {newTask && newTask.length ?
                    newTask.map((taskdata:any, id:number) => {
                      return (
                        <tr key={id}>
                          <td>
                            <H6  className= 'task_title_0'  >{taskdata.title}</H6>
                            <P  className= 'project_name_0'  >{taskdata.collection}</P>
                          </td>
                          <td>
                            <P className= 'task_desc_0'  >{taskdata.desc}</P>
                          </td>
                          <td>
                            <a className="me-2" href={Href}><Link /></a>
                            <a href={Href}><MoreHorizontal /></a>
                          </td>
                          <td><a href={Href} onClick={() => deleteTask(id)}><Trash2 /></a></td>
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
      </Card>
  );
};
export default AssignedToMeClass;