import React from "react";
import CommonHeaderClass from "../../../Common/CommonHeaderClass";

const ButtonColor = () => {
  return (
    <CommonHeaderClass title="Button Color">{`
      .btn-primary {
        background-color: #ab8ce4;
        border-color: #ab8ce4;
        }
        .btn-secondary {
        background-color: #26c6da;
        border-color: #26c6da;
        }
        .btn-success {
        background-color: #00c292 !important;
        color: #fff;
        }
        .btn-success {
        background-color: #00c292;
        border-color: #00c292;
        }
        .btn-danger {
        background-color: #FF5370;
        border-color: #FF5370;
        }
        .btn-info {
        background-color: #4099ff;
        border-color: #4099ff;
        }
        .btn-light {
        background-color: #eeeeee;
        border-color: #eeeeee;
        }
        .btn-warning {
        background-color: #f3d800;
        border-color: #f3d800;
      }        
    `}</CommonHeaderClass>
  );
};

export default ButtonColor;
