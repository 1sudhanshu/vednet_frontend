import { Image } from "../../../../../AbstractElements";
import { Link } from "react-router-dom";

const Userprofile = () => {
  const images = require.context("../../../../../assets/images/user", true);
  const dynamicImage = (image: string) => {
    return images(`./${image}`);
  };

  return (
    <div className="user-image">
      <div className="avatar">
        <Image body={true} src={dynamicImage("7.jpg")} alt="#" className="step1" />
      </div>
      <div className="icon-wrapper">
      <Link to={`${process.env.PUBLIC_URL}/user/user-edit`}><i className="icofont icofont-pencil-alt-5 step2" /></Link>
      </div>
    </div>
  );
};

export default Userprofile;
