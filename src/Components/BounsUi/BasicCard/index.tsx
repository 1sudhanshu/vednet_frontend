import { Container, Row } from 'reactstrap';
import BasicCommon from './BasicCommon';
import { Fragment } from 'react';

const BasicCardContainer = () => {
  return (
    <Fragment>
      <Container fluid={true} className="basic-cards">
        <Row>
          <BasicCommon />
        </Row>
      </Container>
    </Fragment>
  );
};

export default BasicCardContainer;
