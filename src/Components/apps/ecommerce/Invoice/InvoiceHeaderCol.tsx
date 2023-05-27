import { Link } from "react-router-dom";
import { Col } from "reactstrap";
import { H2, Image, P } from "../../../../AbstractElements";
import { dynamicImage } from "../../../../Service";
import { Xolo, XoloEmail } from "../../../../Constant";

const InvoiceHeaderCol = () => {
  return (
    <Col sm="6">
      <div className="d-flex">
        <div className="d-flex-left">
          <Link to={`${process.env.PUBLIC_URL}/dashboard/default`}>
            <Image
              className="d-flex-object img-60"
              src={dynamicImage("other-images/logo-login.png")}
              alt="other"
            />
          </Link>
        </div>
        <div className="flex-grow-1 m-l-20">
          <H2 className="media-heading f-w-600 mb-0">{Xolo}</H2>
          <P>
            {XoloEmail}
            <br />
            <span className="digits">{"289-335-6503"}</span>
          </P>
        </div>
      </div>
    </Col>
  );
};

export default InvoiceHeaderCol;
