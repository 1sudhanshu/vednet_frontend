import { H6, Image, P } from '../../../AbstractElements';
import { Link } from 'react-router-dom';
import { MARKJENCO, MARKJENCOEMAIL } from '../../../Constant';

const HeaderProfile = () => {
  const images = require.context('../../../assets/images', true);
  const dynamicImage = (image:string) => {
    return images(`./${image}`);
  };
  return (
      <div className="d-flex" >
        <div className="media-size-email">
          <Image  className= 'me-3 rounded-circle' src= {dynamicImage('user/user.png')} alt= "Image"  />
        </div>
        <div className="flex-grow-1">
          <H6  className= 'f-w-600' >
            <Link to={`${process.env.PUBLIC_URL}/user/user-profile`}>{MARKJENCO}</Link></H6>
          <P>{MARKJENCOEMAIL}</P>
        </div>
      </div>
  );
};

export default HeaderProfile;