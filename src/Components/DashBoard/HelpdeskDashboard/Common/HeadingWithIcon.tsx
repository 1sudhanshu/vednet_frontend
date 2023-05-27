import React from "react";
import { CardHeader } from "reactstrap";
import { H5, P } from "../../../../AbstractElements";
interface propsTypes {
  Tittle: string;
}
const HeadingWithIcon = (props: propsTypes) => {
  return (
    <CardHeader className="resolve-complain card-no-border">
      <H5 className="d-inline-block">{props.Tittle}</H5>
      <span className="setting-round pull-right d-inline-block mt-0">
        <i className="fa fa-spin fa-cog" />
      </span>
      <P className="f-12 mb-0">
      Status updates, ticket assignments, and even agent responses are examples of recent actions.....
      </P>
    </CardHeader>
  );
};

export default HeadingWithIcon;
