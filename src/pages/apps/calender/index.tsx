import Breadcrumbs from "../../../CommonElements/Breadcrumbs";
import CalenderContainer from '../../../Components/apps/calender/index';
const Calender = () => {
  return (
    <div className="page-body">
      <Breadcrumbs parent="Apps" title="Calender" />
      <CalenderContainer />
    </div>
  );
};

export default Calender;
