import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import { UL } from "../../../../AbstractElements";

const PaginationColorClass5 = () => {
  return (
    <Pagination className="m-b-30" aria-label="Page navigation example">
      <UL className="simple-list flex-row pagination pagination-warning">
        <PaginationItem>
          <PaginationLink href="#javascript">Previous</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#javascript">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#javascript">2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#javascript">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#javascript">Next</PaginationLink>
        </PaginationItem>
      </UL>
    </Pagination>
  );
};

export default PaginationColorClass5;
