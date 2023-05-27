import React from "react";
import ReactApexChart from "react-apexcharts";
import { CardBody } from "reactstrap";
import { optionsColumn } from "../../../../Data/widgets/Chart/ChartData";

const FinanceCardBody = () => {
  return (
    <CardBody>
      <div className="chart-container">
        <ReactApexChart
          options={optionsColumn}
          series={optionsColumn.series}
          type="bar"
          id="columnchart"
          height={350}
        />
      </div>
    </CardBody>
  );
};

export default FinanceCardBody;
