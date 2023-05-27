import { CardBody,  Container, } from "reactstrap";
import LoginPage from "./Login/LoginPage";
import { propsType } from "./Login";

const LoginWithBgVideo = ({registerPage}:propsType) => {
  return (
    <div className="page-wrapper compact-wrapper">
      <Container fluid className="p-0">
        <div className="auth-bg-video">
          <video
            id="bgvid"
            poster="../../../assets/images/other-images/coming-soon-bg.jpg"
            playsInline
            autoPlay
            muted
            loop
          >
            <source src={require("../../../assets/video/auth-bg.mp4")} type="video/mp4" />
          </video>
          <div className="authentication-box">
            <div className="mt-4">
              <CardBody className="p-0">
                <LoginPage  registerPage={registerPage} />
              </CardBody>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default LoginWithBgVideo;
