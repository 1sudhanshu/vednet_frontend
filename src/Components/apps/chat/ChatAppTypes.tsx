export interface allMembersType {
  id: number;
  name: string;
  thumb: string;
  status: string;
  lastSeenDate: string;
  online: boolean;
  typing: boolean;
  time: string;
  reply: string;
}
export interface chatReducerType {
  toggleSideBar:boolean
  allMembers: [] | allMembersType[];
  members: allMembersType[] | [] | allMembersType | undefined | any;
  currentUser: allMembersType;
  activeChat: any;
  selectedUser: allMembersType;
  chats: any;
}
export interface ChatAppTypes {
  ChatReducer: chatReducerType;
}
export interface messageType {
  sender: number;
  text: string;
  time: string;
}
