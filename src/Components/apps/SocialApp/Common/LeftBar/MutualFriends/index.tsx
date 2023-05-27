import { Card } from "reactstrap";
import { useState } from "react";
import { MutualFriend } from "../../../../../../Constant";
import MutualFriendsCollapase from "./MutualFriendsCollapase";
import HeaderWithIcon from "../../../../../../Common/HeaderWithIcon";

const MutualFriends = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Card>
      <HeaderWithIcon Heading={MutualFriend} isOpen={isOpen} setIsOpen={setIsOpen}/>
      <MutualFriendsCollapase isFilter={isOpen} />
    </Card>
  );
};

export default MutualFriends;
