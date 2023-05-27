import { useState } from "react";
import { emailList } from "../../../../Data/apps/email";
import { NavItem, NavLink } from "reactstrap";
import { H6, Image, P } from "../../../../AbstractElements";
interface propsType {
  callback: (value: number) => void;
}
const ReademailList = ({ callback }: propsType) => {
  const [orgactiveTab, setorgActiveTab] = useState(1);
  const images = require.context("../../../../assets/images/user", true);
  const dynamicImage = (image: string) => {
    return images(`./${image}`);
  };
  return (
    <div className="inbox custom-scrollbar">
      {emailList.map((data, index) => (
        <NavItem key={index}>
          <NavLink className={orgactiveTab === index ? "active" : ""}
            onClick={() => {
              setorgActiveTab(index + 1);
              callback(index + 1);
            }}
            href="#javascript"
          >
            <div className="d-flex">
              <div className="media-size-email">
                <Image className="me-3 rounded-circle" src={dynamicImage("user.png")} alt="image"/>
              </div>
              <div className="flex-grow-1">
                <H6>
                  {data.tittle}
                  <small>
                    <span className="digits email-badge">({data.date}</span>{" "}
                    {data.month}
                    <span className="digits email-badge">{data.year})</span>
                  </small>
                </H6>
                <P>{data.paragraph}</P>
              </div>
            </div>
          </NavLink>
        </NavItem>
      ))}
    </div>
  );
};

export default ReademailList;
