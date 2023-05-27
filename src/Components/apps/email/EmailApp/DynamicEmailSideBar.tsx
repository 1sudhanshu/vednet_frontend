import { Fragment } from "react";
import { emailSidbar } from "../../../../Data/apps/email";
import { LI } from "../../../../AbstractElements";
import { Href } from "../../../../Constant";

const DynamicEmailSideBar = () => {
  return (
    <Fragment>
      {emailSidbar &&
        emailSidbar.map((item) => (
          <LI key={item.id}>
            {!item.line ? (
              <a href={Href}>
                <span className="title">
                  <i className={item.className}></i>
                  {item.title}
                </span>
                <span className="badge pull-right email-badge">
                  {item.badge && `(${item.badge})`}
                </span>
              </a>
            ) : (
              item.line
            )}
          </LI>
        ))}
    </Fragment>
  );
};

export default DynamicEmailSideBar;
