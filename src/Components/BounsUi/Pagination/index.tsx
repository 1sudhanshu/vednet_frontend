import { Fragment } from 'react';
import { Container, Row } from 'reactstrap';
import PagiNations from './PagiNations';
import PaginationAlignmentClass from './PaginationAlignment';
import PaginationActiveDisabledClass from './PaginationActiveDisabled';
import PaginationColorClass from './PaginationColor';
import PaginationSizingClass from './PaginationSizing';
import PaginationWithIconsClass from './PaginationWithIconsClass';
const PaginationContainer = () => {
  return (
    <Fragment>
      <Container fluid={true}>
        <Row>
          <PagiNations />
          <PaginationWithIconsClass />
          <PaginationAlignmentClass />
          <PaginationActiveDisabledClass />
          <PaginationColorClass />
          <PaginationSizingClass />
        </Row>
      </Container>
    </Fragment>
  );
};

export default PaginationContainer;
