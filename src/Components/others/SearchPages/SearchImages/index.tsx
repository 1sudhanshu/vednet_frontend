import  { useCallback, useState } from "react";
import { Card, CardBody, Col, Container, Row,  } from "reactstrap";
import SearchInput from "../SearchWebsite/SearchInput";
import SearchTabs from "../SearchWebsite/SearchTabs";
import SearchTabContent from "../SearchWebsite/SearchTabContent";

const SearchImagesContainer = () => {
  const [activeTab, setActiveTab] = useState(3);
  const callback = useCallback((tab: number) => {
    setActiveTab(tab);
  }, []);
  return (
    <Container fluid className="search-page">
      <Row>
        <Col sm="12">
          <Card>
            <SearchInput />
            <CardBody>
              <SearchTabs callbackActive={callback} activeTabValue={2} />
              <SearchTabContent activeTab={activeTab}/>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default SearchImagesContainer