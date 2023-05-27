import { LI, UL } from "../../../../AbstractElements";

const MyStatusBody = () => {
  let datas = [
    { tittle: "Task Pending", spanClass: "font-warning", span: 18 },
    { tittle: "Active Projects", spanClass: "font-success", span: 24 },
    { tittle: "Support Tickets", spanClass: "font-info", span: 47 },
  ];

  return (
    <UL>
      {datas.map((data, index) => (
        <LI key={index}>
          <span>
            {data.tittle}
            <span className={`f-12  pull-right ${data.spanClass}`}>
              {data.span}
            </span>
          </span>
        </LI>
      ))}
    </UL>
  );
};

export default MyStatusBody;
