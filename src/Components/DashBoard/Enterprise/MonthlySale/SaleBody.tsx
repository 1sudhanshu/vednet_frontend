import { H4, H6, LI, P, UL } from "../../../../AbstractElements";
import { MonthlySaleHeading } from "../../../../Constant";
import { CardBody } from "reactstrap";
import SparkChart from "./SparkChart";

const SaleBody = () => {
  return (
    <CardBody className="revenue-project">
      <H6>{MonthlySaleHeading}</H6>
      <UL className="flex-row simple-list">
        <LI>
          <P>Growth</P>
          <H4>
            $<span className="counter">67140</span>
          </H4>
        </LI>
        <SparkChart />
      </UL>
    </CardBody>
  );
};

export default SaleBody;
