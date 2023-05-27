import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

const Pagination3 = () => {
  return (
    <nav aria-label="Page navigation example">
      <Pagination className="pagination justify-content-end pagination-primary" aria-label="Page navigation example">
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
      </Pagination>
    </nav>
  );
};

export default Pagination3;