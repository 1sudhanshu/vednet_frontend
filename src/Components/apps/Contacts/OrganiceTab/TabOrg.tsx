import { Fragment } from 'react';
import {  TabPane } from 'reactstrap';
import { H5, H6, P, Image, UL, LI } from '../../../../AbstractElements';
import { EmailAddress, Gender, General, Href, Personal, Print } from '../../../../Constant';
import { orgList } from '../../../../Data/apps/contact/OrgList';

const TabOrg = () => {
  const images = require.context('../../../../assets/images', true);
  const dynamicImage = (image:string) => {
    return images(`./${image}`);
  };
  return (
    <Fragment>
      {orgList.map((item, i) =>
        <TabPane tabId={item.activeTab} key={i}>
          <div className="profile-mail">
            <div className="d-flex">
              <Image  className= 'p-0 img-100 img-fluid m-r-20 rounded-circle update_img_5' src= {dynamicImage(item.img)} alt= 'images'  />
              <div  className="mt-0 flex-grow-1">
                <H5><span className="first_name_5">{item.name}</span></H5>
                <P className= 'email_add_5' >{item.email}</P>
                <UL className= 'simple-list' >
                  <LI><a href={Href} data-toggle="modal" data-target="#printModal">{Print}</a></LI>
                </UL>
              </div>
            </div>
            <div className="email-general">
              <H6>{General}</H6>
              <P>{EmailAddress}: <span className="font-primary email_add_5">{item.email}</span></P>
              <div className="gender">
                <H6>{Personal}</H6>
                <P>{Gender}: <span>{item.gender}</span></P>
              </div>
            </div>
          </div>
        </TabPane>
      )}
    </Fragment>
  );
};

export default TabOrg;