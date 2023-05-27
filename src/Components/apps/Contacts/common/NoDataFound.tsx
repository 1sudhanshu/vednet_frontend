import { Card,  CardBody } from "reactstrap";
import {  P } from "../../../../AbstractElements";
import { NoDataFound } from "../../../../Constant";
import HeadingCommon from "../../../../Common/HeadingCommon";
interface propsType {
  title: string;
}
const NoDataFoundClass = ({ title }: propsType) => {
  return (
    <Card className="mb-0">
      <HeadingCommon className="d-flex" Heading={title} spanClassName="f-14 pull-right mt-0" span dangerouslySetInnerHTML={"10 Contacts"}  /> 
      <CardBody>
        <P>{NoDataFound} </P>
      </CardBody>
    </Card>
  );
};

export default NoDataFoundClass;
