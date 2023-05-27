import { Fragment } from "react";
import { Btn, H5, P } from "../../../../AbstractElements";
interface propsTypes {
  tittle: string;
}
const HeadingWithButton = (props: propsTypes) => {
  return (
    <Fragment>
      <div className="d-flex">
        <H5>{props.tittle}</H5>
        <Btn className="btn btn-outline-light" color="deafult">
          Last Week <i className="fa fa-caret-down" />
        </Btn>
      </div>
      <P className="f-12">
      Request types specify the nature of the problem the client is having and the appropriate..... 
      </P>
    </Fragment>
  );
};

export default HeadingWithButton;
