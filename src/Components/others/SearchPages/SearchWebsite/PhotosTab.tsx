import { P } from '../../../../AbstractElements';
import { ImageAbout } from '../../../../Constant';
import { Row } from 'reactstrap';
import PagesSort from './Pages';
import GalleryImageDesc from '../../../apps/Gallery/GalleryGridWithDescription/GalleryImageDesc';

const PhotosTab = () => {
  return (
    <>
      <div className='info-block m-t-30'>
        <P className='pb-4 col-sm-12 digits'>{ImageAbout}</P>
        <Row className='my-gallery gallery-with-description'>
          <GalleryImageDesc />
        </Row>
      </div>
      <PagesSort />
    </>
  );
};

export default PhotosTab;
