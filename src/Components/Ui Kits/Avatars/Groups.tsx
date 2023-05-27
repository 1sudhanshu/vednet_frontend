import { Card, CardBody } from "reactstrap";
import {  Image, LI, UL } from "../../../AbstractElements";
import { imageData, USers } from "../../../Data/Components/UiKits/Avatars";
import HeadingCommon from "../../../Common/HeadingCommon";
const Groups = () => {
  return (
    <Card>
      <HeadingCommon Heading="Groups" />
      <CardBody className="avatar-showcase">
        {imageData.map((data, index) => (
          <div key={index} className="customers d-inline-block avatar-group">
            <UL className="flex-row simple-list">
              {USers.map((details, index2) => (
                <LI key={index2} className="d-inline-block">
                  <Image
                    body={true}
                    className={data.className}
                    src={details.src}
                    alt="#"
                  />
                </LI>
              ))}
            </UL>
          </div>
        ))}
      </CardBody>
    </Card>
  );
};
export default Groups;
