import { CardBody } from "reactstrap";
import { LI, OL } from "../../../AbstractElements";

const BreadcrumbCardBody = () => {
  return (
    <CardBody>
      <OL className="breadcrumb p-0 bg-white">
        <LI className="breadcrumb-item active">Home</LI>
      </OL>
      <OL className="breadcrumb p-0 bg-white">
        <LI className="breadcrumb-item">
          <a href="#javascript">Home</a>
        </LI>
        <LI className="breadcrumb-item active">Library</LI>
      </OL>
      <OL className="breadcrumb p-0 bg-white">
        <LI className="breadcrumb-item">
          <a href="#javascript">Home</a>
        </LI>
        <LI className="breadcrumb-item">
          <a href="#javascript">Library</a>
        </LI>
        <LI className="breadcrumb-item active">Data</LI>
      </OL>
      <OL className="breadcrumb p-0 bg-white mb-0">
        <LI className="breadcrumb-item">
          <a href="#javascript">
            <i className="fa fa-home"></i>
          </a>
        </LI>
        <LI className="breadcrumb-item">Library</LI>
        <LI className="breadcrumb-item active">Data</LI>
      </OL>
    </CardBody>
  );
};

export default BreadcrumbCardBody;
