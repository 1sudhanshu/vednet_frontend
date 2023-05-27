import { Row } from "reactstrap";
import MariadeoProfile from "./MariadeoProfile/MariadeoProfile";
import BirthdayCard from "./BirthdayCard";
import ElanaSaint from "./ElanaSaint/index";
import PageLikesChart from "./PageLikesChart/PageLikesChart";
const Header = () => {
  return (
    <Row>
      <ElanaSaint />
      <BirthdayCard />
      <MariadeoProfile />
      <PageLikesChart />
    </Row>
  );
};

export default Header;
