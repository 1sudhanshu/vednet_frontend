import { H3, P } from "../../../../AbstractElements";
import { Earrning, TodaysSale, Yoursales } from "../../../../Constant";
import { DollarSign } from "react-feather";

const WelcomeInformationBody = () => {
  return (
    <div className="d-flex mt-5">
      <div className="flex-grow-1">
        <H3>Wednesday, 20</H3>
        <P className="mb-0">
          {TodaysSale}
          <span className="font-success"> 3.56%<i className="fa fa-caret-up" /></span>
        </P>
        <div className="sales-widgets d-flex mt-1">
          <H3 className="mt-1 mb-0 f-w-600">
            <DollarSign className="me-1 txt-primary" />
            <span className="counter txt-primary">405</span>
            <span className="ms-2 f-12 f-w-400">{Earrning}</span>
          </H3>
        </div>
        <P className="mb-0">{Yoursales} &amp; earning over the last 24 hours</P>
      </div>
    </div>
  );
};

export default WelcomeInformationBody;
