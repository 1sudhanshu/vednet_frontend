import { CardBody, Collapse } from "reactstrap"
import { H5, Image } from "../../../../../../AbstractElements"
import { dynamicImage } from "../../../../../../Service"
import MessagesAndNotification from "./MessagesAndNotification"
import LikesViewButton from "./LikesViewButton"
import { NewLikesThisWeek } from "../../../../../../Constant"
import SocialGroup from "./SocialGroup"
interface propsType{
    isFilter:boolean
}
const MyProfileClassCollapse = ({isFilter}:propsType) => {
  return (
    <Collapse isOpen={isFilter}>
          <CardBody className="socialprofile filter-cards-view">
            <div className="d-flex">
              <Image className="img-50 img-fluid m-r-20 rounded-circle" src={dynamicImage("user/1.jpg")} alt="user"/>
              <MessagesAndNotification />
            </div>
            <LikesViewButton />
            <div className="likes-profile text-center">
              <H5><span><i className="fa fa-heart font-danger" /> 884</span></H5>
            </div>
            <div className="text-center">35 {NewLikesThisWeek}</div>
            <div className="customers text-center social-group">
              <SocialGroup />
            </div>
          </CardBody>
        </Collapse>
  )
}

export default MyProfileClassCollapse