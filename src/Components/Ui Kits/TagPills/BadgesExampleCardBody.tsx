import { CardBody } from 'reactstrap'
import { H1, H2, H3, H4, H5, H6 } from '../../../AbstractElements'

const BadgesExampleCardBody = () => {
  return (
    <CardBody>
    <H1>heading <span className="badge badge-primary">New</span></H1>
    <H2>heading <span className="badge badge-primary">New</span></H2>
    <H3>heading <span className="badge badge-primary">New</span></H3>
    <H4>heading <span className="badge badge-primary">New</span></H4>
    <H5>heading <span className="badge badge-primary">New</span></H5>
    <H6>heading <span className="badge badge-primary">New</span></H6>
  </CardBody>
  )
}

export default BadgesExampleCardBody