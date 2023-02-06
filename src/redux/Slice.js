import { createSlice } from "@reduxjs/toolkit";

const weatherSlice = createSlice({
  name: "passmanager",
  initialState: {
    allUsersData: [],
    allUsersDataCopy: [],
    userDataFilter: [],
    allUsers: [],
    currentUser: {},
  },
  reducers: {
    addUsersData: (state, action) => {
      state.allUsersData.push(action.payload);
      state.allUsersDataCopy.push(action.payload);
      state.userDataFilter.push(action.payload);
      // console.log('dadac',state.allUsersData);
    },
    filterUsersData: (state, action) => {
      state.allUsersDataCopy = state.allUsersData.filter(
        (e) => state.currentUser.mobile === e.mobile
      );
      state.userDataFilter = state.allUsersDataCopy;
      console.log("iioi", state.userDataFilter);
    },
    filterOnSearch: (state, action) => {
      state.allUsersDataCopy = state.userDataFilter.filter((e) =>
        e.sitename.toLowerCase().includes(action.payload.toLowerCase())
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

export const {
  addUsersData,
  addUsers,
  addCurrentUser,
  filterUsersData,
  filterOnSearch,
} = weatherSlice.actions;
export default weatherSlice.reducer;
