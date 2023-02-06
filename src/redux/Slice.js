import { createSlice } from "@reduxjs/toolkit";

const weatherSlice = createSlice({
  name: "passmanager",
  initialState: {
    allUsersData: [],
    allUsersDataCopy: [],
    allUsers: [],
    currentUser: {},
  },
  reducers: {
    addUsersData: (state, action) => {
      state.allUsersData.push(action.payload);
      state.allUsersDataCopy.push(action.payload);
    },
    filterUsersData: (state, action) => {
      state.allUsersDataCopy = state.allUsersData.filter(
        (e) => state.currentUser.mobile === e.mobile
      );
      state.allUsersDataCopy = state.allUsersDataCopy.filter((e) =>
        e.sitename.includes(action.payload)
      );
    },
    addUsers: (state, action) => {
      state.allUsers.push(action.payload);
    },
    addCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});

export const { addUsersData, addUsers, addCurrentUser, filterUsersData } =
  weatherSlice.actions;
export default weatherSlice.reducer;
