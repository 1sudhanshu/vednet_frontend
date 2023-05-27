import { CardBody, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { UL } from "../../../../AbstractElements";

const PaginationActiveDisabledCardBody = () => {
  return (
    <CardBody>
      <Pagination aria-label="..." className='pagination-primary'>
        <PaginationItem disabled>
          <PaginationLink>Previous</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#javascript">1</PaginationLink>
        </PaginationItem>
        <PaginationItem active>
          <PaginationLink href="#javascript">
            2 <span className="sr-only">{"(current)"}</span>
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#javascript">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#javascript">Next</PaginationLink>
        </PaginationItem>
      </Pagination>
    </CardBody>
  );
};

export default PaginationActiveDisabledCardBody;
