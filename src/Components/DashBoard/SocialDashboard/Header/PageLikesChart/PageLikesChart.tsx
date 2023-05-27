import { Card, CardHeader, Col } from "reactstrap";
import { Btn, H5 } from "../../../../../AbstractElements";
import { LastWeek, PageLikes } from "../../../../../Constant";
import PageLikesChartBody from "./PageLikesChartBody";

const PageLikesChart = () => {
  return (
    <Col xl="8" md="6" className="xl-60 box-col-7">
      <Card className=" card-with-border o-hidden complaints">
        <CardHeader className=" card-no-border d-flex">
          <H5>{PageLikes}</H5>
          <Btn className=" btn-outline-light" color="deafult">
            {LastWeek} <i className="fa fa-caret-down" />
          </Btn>
        </CardHeader>
        <PageLikesChartBody />
      </Card>
    </Col>
  );
};

export default PageLikesChart;
