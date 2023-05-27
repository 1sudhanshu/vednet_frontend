import React, { useState } from "react";
import { CardHeader } from "reactstrap";
import { Btn, H5 } from "../../../../AbstractElements";
import {Day,Month,ProjectStatusHeading,ProjectStatusSubHeading,Week,} from "../../../../Constant";

const ProjectStatusHeader = () => {
  const [time, setTime] = useState(Month);
  let datas = [Day, Week, Month];

  return (
    <CardHeader>
      <H5>{ProjectStatusHeading}</H5>
      <span>{ProjectStatusSubHeading}</span>
      <div className="dashboard-btn-groups">
        <div className="btn-group" role="group">
          {datas.map((data, index) => (
            <Btn key={index} color="deafult" onClick={() => setTime(data)} className={` btn-outline-light btn-js1 ${time === data ? "active" : ""}`}>
              {data}
            </Btn>
          ))}
        </div>
      </div>
    </CardHeader>
  );
};

export default ProjectStatusHeader;
