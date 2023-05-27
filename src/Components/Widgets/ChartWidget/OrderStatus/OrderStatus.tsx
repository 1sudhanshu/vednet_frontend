import { CardBody } from "reactstrap";
import ReactApexChart from "react-apexcharts";
import { chartDatas } from "../../../../Data/widgets/Chart/OrderStatus.tsx";

const OrderStatusBody = () => {
  return (
    <CardBody>
      <div className="chart-container">
        {chartDatas.map((data, index) => (
          <ReactApexChart
            key={index}
            options={data}
            series={data.series}
            type="bar"
            id={`progress${index + 1}`}
            height={70}
          />
        ))}
      </div>
    </CardBody>
  );
};

export default OrderStatusBody;
