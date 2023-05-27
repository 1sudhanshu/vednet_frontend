import React from "react";
import { CardBody } from "reactstrap";
import { Purchase, Sale } from "../../../../Constant";
import { Bar } from "react-chartjs-2";
import {
  data,
  options,
} from "../../../../Data/DashBoard/BusinessDashboard/ChartData";

const MonthlyRevenueGrowthBody = () => {
  return (
    <CardBody className="pt-0 px-0 pb-2">
      <div className="chart-value-box pull-right chart-data-set">
        <div className="value-square-box-primary" />
        <span>{Purchase}</span>
        <div className="value-square-box-light" />
        <span>{Sale}</span>
      </div>
      <div className="dashboard-rounded-chart flot-chart-container">
        <Bar options={options} data={data} />
      </div>
    </CardBody>
  );
};

export default MonthlyRevenueGrowthBody;
