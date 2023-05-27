import React from "react";
import { H6, Image, P } from "../../../../../AbstractElements";
import { dynamicImage } from "../../../../../Service";
import { ELANAHeading } from "../../../../../Constant";
import { MoreVertical } from 'react-feather';

const NewUsersSocial = () => {
  return (
    <div className="new-users-social">
      <div className="d-flex">
        <Image
          className="rounded-circle image-radius m-r-15"
          src={dynamicImage("user/1.jpg")}
          alt="user"
        />
        <div className="flex-grow-1">
          <H6 className="mb-0 f-w-700">{ELANAHeading}</H6>
          <P>January, 12,2023</P>
        </div>
        <span className="pull-right mt-0">
          <MoreVertical />
        </span>
      </div>
    </div>
  );
};

export default NewUsersSocial;
