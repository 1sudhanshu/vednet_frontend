import { createReducer } from "@reduxjs/toolkit";

const initialState: any = {
  allMembers: [],
  members: [],
  chats: [],
  currentUser: [],
  selectedUser: [],
  toggleSideBar:true,
};

export const ChatReducer = createReducer(initialState, {
  setToggleSideBar: (state, action) => {
    state.toggleSideBar = action.payload;
  },
  setAllMembers: (state, action) => {
    state.allMembers = action.payload;
  },
  setChats: (state, action) => {
    state.chats = action.payload;
  },
  setSelectedUser: (state, action) => {
    state.selectedUser = action.payload;
  },
  fetchChatMemberAsync: (state) => {
    if (state.allMembers.length > 0) {
      state.currentUser = state.allMembers[0];
      state.members = state.allMembers;
    }
  },
  fetchChatAsync: (state) => {
    if (state.chats.length > 0) {
      const currentUserId = 0;
      var chat = state.chats.filter((x: any) =>
        x.users.includes(currentUserId)
      );
      var selectedUser = state.chats[0].users.find(
        (x: any) => x !== currentUserId
      );

      if (state.allMembers.length > 0) {
        state.chats = chat;
        state.selectedUser = state.allMembers.find(
          (x: any) => x.id === selectedUser
        );
      }
    }
  },
  getMembersSuccess: (state, action) => {
    state.currentUser = action.payload[0];
    state.members = action.payload;
  },
  getChatsSuccess: (state, action) => {
    if (state.allMembers.length > 0) {
      state.chats = action.payload.chats;
    }
  },
  searchMember: (state, action) => {
    if (action.payload === "") {
      state.members = state.allMembers;
    } else {
      const keyword = action.payload.toLowerCase();
      const searchedMembers = state.allMembers.filter(
        (member: any) => member.name.toLowerCase().indexOf(keyword) > -1
      );
      state.members = searchedMembers;
    }
  },
  changeChat: (state, action) => {
    let newUser = state.allMembers.find((x: any) => x.id === action.payload);
    state.selectedUser = newUser;
  },
  createNewChatAsync: (state, action) => {
    let conversation = {
      id: action.payload.chats.length + 1,
      users: [action.payload.currentUserId, action.payload.selectedUserId],
      lastMessageTime: "-",
      messages: [],
    };
    state.chats.splice(0, 0, conversation);
    if (state.allMembers.length > 0) {
      let selctedUser = state.allMembers.find(
        (x: any) => x.id === action.payload.selectedUserId
      );
      state.selectedUser = selctedUser;
    }
  },
  sendMessageAsync: (state, action) => {
    let chat = state.chats.find(
      (x: any) =>
        x.users.includes(action.payload.currentUserId) &&
        x.users.includes(action.payload.selectedUserId)
    );
    const now = new Date();
    const time = now.getHours() + ":" + now.getMinutes();
    if (chat) {
      chat.messages.push({
        sender: action.payload.currentUserId,
        time: time,
        text: action.payload.messageInput,
        status: true,
      });
      chat.lastMessageTime = time;
      chat.online = true;
      let chats_data = state.chats.filter((x: any) => x.id !== chat.id);
      chats_data.splice(0, 0, chat);
      if (state.allMembers.length > 0) {
        let selctedUser = state.allMembers.find(
          (x: any) => x.id === action.payload.selectedUserId
        );
        state.selectedUser = selctedUser;
      }
    }
  },
  replyByUserAsync: (state, action) => {
    let chat = state.chats.find(
      (x: any) =>
        x.users.includes(action.payload.currentUserId) &&
        x.users.includes(action.payload.selectedUserId)
    );
    const now = new Date();
    const time = now.getHours() + ":" + now.getMinutes();
    if (chat) {
      chat.messages.push({
        sender: action.payload.selectedUserId,
        time: time,
        text: action.payload.replyMessage,
        status: true,
      });
      chat.lastMessageTime = time;
      let chats_data = state.chats.filter((x: any) => x.id !== chat.id);
      chats_data.splice(0, 0, chat);
    }
  },
});
