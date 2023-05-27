import { Col } from "reactstrap";

const DynamicSteps = () => {
  let datas = [
    { colClass: "current", iconClass: "u-step-icon icon-notepad", tittle: "Billing"},
    { iconClass: "u-step-icon icon-time", tittle: "Getting" },
  ];
  return (
    <>
      {datas.map((data, index) => (
        <Col key={index} md="4" className={`u-step ${data?.colClass}`}>
          <span className={data.iconClass} aria-hidden="true"></span>
          <div className="u-step-desc">
            <span className="u-step-title">{data.tittle}</span>
          </div>
        </Col>
      ))}
    </>
  );
};

export default DynamicSteps;
