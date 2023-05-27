import React from "react";
import CommonHeaderClass from "../../../Common/CommonHeaderClass";

const BadgeColor = () => {
  return (
    <CommonHeaderClass title="Badge Color">{`
      .badge-primary {
        background-color: #ab8ce4;
        }
        .badge-secondary {
        background-color: #26c6da;
        }
        .badge-success {
        background-color: #00c292;
        }
        .badge-danger {
        background-color: #FF5370;
        }
        .badge-info {
        background-color: #4099ff;
        }
        .badge-light {
        background-color: #eeeeee;
        }
        .badge-dark {
        background-color: #2a3142;
        }
        .badge-warning {
        background-color: #f3d800;
      }
    `}</CommonHeaderClass>
  );
};
export default BadgeColor;
