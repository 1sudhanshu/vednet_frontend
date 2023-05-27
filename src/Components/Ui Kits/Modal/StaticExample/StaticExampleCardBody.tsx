import { CardBody, ModalBody, ModalFooter } from "reactstrap"
import { Btn, P } from "../../../../AbstractElements"

const StaticExampleCardBody = () => {
  return (
    <CardBody>
    <div className="modal-dialog modal-lg mt-0 mb-0" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden={true}>
      <div className="modal-dialog mt-0 mb-0" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">New message</h5>
            <button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <ModalBody>
            <P>For a site to be successful, a designer must be able to communicate their ideas, chat with a firm about what they want, and inquire about the target audience. As a web designer, you either prefer to work freelance for several different businesses at once or you may choose to work for just one. In either case, you'll need good time management skills to keep several projects moving forward. Although a designer doesn't write the code that makes a site work, it doesn't hurt to have a basic understanding of HTML or CSS to make minor adjustments to a site.</P>
          </ModalBody>
          <ModalFooter className="btn-showcase">
            <Btn color="secondary">Close</Btn>
            <Btn color="primary">Send message</Btn>
          </ModalFooter>
        </div>
      </div>
    </div>
  </CardBody>
  )
}

export default StaticExampleCardBody