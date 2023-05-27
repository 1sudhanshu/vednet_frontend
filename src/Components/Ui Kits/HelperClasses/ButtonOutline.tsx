import React from "react";
import CommonHeaderClass from "../../../Common/CommonHeaderClass";

const ButtonOutline = () => {
  return (
    <CommonHeaderClass title="Button Outline">{`
     .btn-outline-primary {
        border-color: #ab8ce4;
        color: #ab8ce4;
        background-color: transparent;
        }
        .btn-outline-secondary {
        border-color: #26c6da;
        color: #26c6da;
        background-color: transparent;
        }
        .btn-outline-success {
        border-color: #00c292;
        color: #00c292;
        background-color: transparent;
        }
        .btn-outline-danger {
        border-color: #FF5370;
        color: #FF5370;
        background-color: transparent;
        }
        .btn-outline-info {
        border-color: #4099ff;
        color: #4099ff;
        background-color: transparent;
        }
        .btn-outline-light {
        border-color: #eeeeee;
        color: #eeeeee;
        background-color: transparent;
        }
        .btn-outline-dark {
        border-color: #2a3142;
        color: #2a3142;
        background-color: transparent;
        }
        .btn-outline-warning {
        border-color: #f3d800;
        color: #f3d800;
        background-color: transparent;
      }  
   `}</CommonHeaderClass>
  );
};

export default ButtonOutline;
