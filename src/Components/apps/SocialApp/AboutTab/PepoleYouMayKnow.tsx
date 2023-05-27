import { Card, Col, CardBody } from "reactstrap";
import HeadingCommon from "../../../../Common/HeadingCommon";
import { pepoleYouMayKnowData } from "../../../../Data/apps/SocialApp";
import { dynamicImage } from "../../../../Service";
import { Btn, Image, LI, UL } from "../../../../AbstractElements";
import { AddFriend } from "../../../../Constant";
interface PropsType{
  Heading:string
}
const PepoleYouMayKnow = ({Heading}:PropsType) => {
  return (
    <Col sm="12">
      <Card>
        <HeadingCommon Heading={Heading} />
        <CardBody className="avatar-showcase">
          <div className="pepole-knows">
            <UL className="simple-list flex-row flex-wrap">
              {pepoleYouMayKnowData.map((data, index) => (
                <LI key={index}>
                  <div className="add-friend text-center">
                    <Image
                      className="img-60 img-fluid rounded-circle"
                      alt="user"
                      src={dynamicImage(`user/${data.peopleImageName}`)}
                    />
                    <span className="d-block f-w-600">{data.peopleName}</span>
                    <Btn color="primary" size="xs">{AddFriend}</Btn>
                  </div>
                </LI>
              ))}
            </UL>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default PepoleYouMayKnow;
