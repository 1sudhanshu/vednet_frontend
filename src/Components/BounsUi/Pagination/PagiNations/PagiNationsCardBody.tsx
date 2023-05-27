import { CardBody, Pagination, PaginationItem, PaginationLink,} from "reactstrap";

const PagiNationsCardBody = () => {
  return (
    <CardBody>
      <Pagination aria-label="Page navigation example" className="pagination-primary">
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
    </CardBody>
  );
};

export default PagiNationsCardBody;
