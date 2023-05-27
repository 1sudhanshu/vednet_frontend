import { useCallback, useState } from "react";
import { Row, Col, Card, CardBody, TabContent, TabPane } from "reactstrap";
import { Personal } from "../../../Constant";
import ListNewContact from "./ListNewContact";
import UpdateUser from "./UpdateUser";
import ContactDetailsClass from "./ContactDetail";
import { useDispatch } from "react-redux";
import { ContactusersType, UserUpdateType, userCallbackUser,} from "./ContactType";
import HeadingCommon from "../../../Common/HeadingCommon";
interface propsType {
  users: [] | ContactusersType[];
}

const PersonalTab = ({ users }: propsType) => {
  const [selectedUser, setSelectedUser] = useState<undefined | userCallbackUser | UserUpdateType>();
  const [editing, setEditing] = useState(false);
  const [editdata, setEditData] = useState({});
  const dispatch = useDispatch();
  const userCallback = useCallback((user: userCallbackUser) => {setSelectedUser(user);}, []);
  const userEditCallback = useCallback(
    (edit: boolean, usersData: UserUpdateType) => {
      setEditData(usersData);
      setSelectedUser(usersData);
      setEditing(edit);
      dispatch({ type: "setEditRow", payload: usersData });
    },[]);
  const spanText = `${users?.length} Contacts`;

  return (
    <Card>
      <HeadingCommon className="d-flex" Heading={Personal} span dangerouslySetInnerHTML={spanText} spanClassName="f-14 pull-right mt-0"/>
      <CardBody className="p-0">
        <Row className="list-persons" id="addcon">
          <ListNewContact users={users} userCallback={userCallback} />
          <Col xl="8" md="7" className="xl-50">
            {editing ? (
              <UpdateUser editdata={editdata} userEditCallback={userEditCallback}/>
            ) : (
              <TabContent activeTab={0}>
                <TabPane tabId={0}>
                  <ContactDetailsClass selectedUser={selectedUser ? selectedUser : users[0]} userEditCallback={userEditCallback}/>
                </TabPane>
              </TabContent>
            )}
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default PersonalTab;