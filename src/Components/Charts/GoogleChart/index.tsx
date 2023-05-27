import {  useEffect, useState } from "react";
import { Container, Row } from "reactstrap";
import { AreaChart, BarChart2, BasicBarChart, LineChart, MaterialDesign, PieChart, SliceVisibilityThreshold, StackingAreaChart } from '../../../Constant';
import PieChartClass from './common/PieChart';
import PieChart2Class from "./PieChart2";
import PieChart3Class from "./PieChart3";
import PieChart4Class from "./PieChart4";
import PieChart5Class from "./PieChart5";
import PieChart6Class from "./PieChart6";
import ComboChartClass from "./ComboChart";
import axios from "axios";
import { GooglechartApi } from "../../../api";
import { GoogleChartTypes } from "./GoogleChartType";

const GoogleChartContainer = () => {
  const [googleChart, setGoogleChart] = useState< GoogleChartTypes  >();

  useEffect(() => {
    const getChartData = async () => {
      try {
        await axios.get(GooglechartApi).then((resp) => {
          setGoogleChart(resp.data);
        });
      } catch (error) {
        console.log("cancelled", error);
      }
    };
    getChartData();
  }, [setGoogleChart]);

  return (
    <Container fluid={true}>
      <Row>
      <PieChartClass data={googleChart?.GooglePieChart1} title={PieChart} digit={'1'} />
      <PieChart2Class data={googleChart?.GooglePieChart2} is3D={true} />
      <PieChart3Class data={googleChart?.GoogleDonutChart} pieHole={0.4} />
      <PieChart4Class data={googleChart?.GoogleRotatingPieChart1} pieStartAngle={100} pieSliceText={'label'} />
      <PieChart5Class data={googleChart?.GoogleRotatingPieChart2} />
      <PieChartClass data={googleChart?.GoogleSliceCharts} title={SliceVisibilityThreshold} />
      <PieChartClass data={googleChart?.GoogleAreaChart} title={AreaChart} />
      <PieChartClass data={googleChart?.GoogleStackingChart} title={StackingAreaChart} />
      <PieChartClass data={googleChart?.GoogleBasicbarChart} title={BasicBarChart} />
      <PieChartClass data={googleChart?.GoogleMaterialDesignChart} title={MaterialDesign} />
      <PieChart6Class data={googleChart?.GoogleGhantChart}  />
      <PieChartClass data={googleChart?.GoogleLineChart} title={LineChart} colClass='col-sm-12' />
      <ComboChartClass data={googleChart?.GoogleComboChart}  />
      <PieChartClass data={googleChart?.GoogleBarChart2} title={BarChart2} colClass='col-sm-12' />
      </Row>
    </Container>
  );
};

export default GoogleChartContainer;
