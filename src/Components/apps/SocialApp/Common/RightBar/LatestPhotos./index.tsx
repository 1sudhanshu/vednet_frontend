import { Card } from "reactstrap";
import { useState } from "react";
import { LatestPhoto } from "../../../../../../Constant";
import LatestPhotosCollapse from "./LatestPhotosCollapase";
import HeaderWithIcon from "../../../../../../Common/HeaderWithIcon";

const LatestPhotos = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Card>
      <HeaderWithIcon Heading={LatestPhoto} isOpen={isOpen} setIsOpen={setIsOpen}/>
      <LatestPhotosCollapse isFilter={isOpen} />
    </Card>
  );
};

export default LatestPhotos;
