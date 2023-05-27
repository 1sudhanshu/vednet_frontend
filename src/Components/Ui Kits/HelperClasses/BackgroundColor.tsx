import React from "react";
import CommonHeaderClass from "../../../Common/CommonHeaderClass";

const BackgroundColor = () => {
  return (
    <CommonHeaderClass title="Background Color">{`
      .bg-primary {
        background-color: #ab8ce4 !important;
        color: #fff;
        }
        .bg-secondary {
        background-color: #26c6da !important;
        color: #fff;
        }
        .bg-success {
        background-color: #00c292 !important;
        color: #fff;
        }
        .bg-danger {
        background-color: #FF5370 !important;
        color: #fff;
        }
        .bg-info {
        background-color: #4099ff !important;
        color: #fff;
        }
        .bg-light {
        background-color: #eeeeee !important;
        color: #fff;
        }
        .bg-dark {
        background-color: #2a3142 !important;
        color: #fff;
        }
        .bg-warning {
        background-color: #f3d800 !important;
        color: #fff;
        }
    `}</CommonHeaderClass>
  );
};

export default BackgroundColor;
