import React from "react";
import { Fragment } from "react";
import { Image, LI, UL } from "../../../../AbstractElements";
import { Forward, Href, Reply, ReplyAll } from "../../../../Constant";
interface propsType{
    dynamicImage:(path:string)=>void
}
const Attachment = ({dynamicImage}:propsType) => {
  return (
    <Fragment>
      <div className="attachment">
        <UL className="list-inline flex-row simple-list">
          <LI className="list-inline-item">
            <Image className="img-fluid" src={dynamicImage("email/1.jpg")} alt="image"/>
          </LI>
          <LI className="list-inline-item">
            <Image className="img-fluid" src={dynamicImage("email/2.jpg")} alt="image"/>
          </LI>
          <LI className="list-inline-item">
            <Image className="img-fluid" src={dynamicImage("email/3.jpg")} alt="image"/>
          </LI>
        </UL>
      </div>
      <hr />
      <div className="action-wrapper">
        <UL className="actions flex-row simple-list">
          <LI>
            <a className="text-muted" href={Href}><i className="fa fa-reply me-2" />{Reply}</a>
          </LI>
          <LI>
            <a className="text-muted" href={Href}> <i className="fa fa-reply-all me-2" /> {ReplyAll}</a>
          </LI>
          <LI>
            <a className="text-muted" href={Href}><i className="fa fa-share me-2" /></a>{Forward}
          </LI>
        </UL>
      </div>
    </Fragment>
  );
};

export default Attachment;
