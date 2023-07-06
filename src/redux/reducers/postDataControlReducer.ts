import { createSlice } from "@reduxjs/toolkit";
import { Hit } from "../../types/MetaPostType";

const INITIAL_STATE = {
  currentPage: 0,
};

export const PostDataControl = createSlice({
  name: "PostDataControl",
  initialState: INITIAL_STATE,
  reducers: {
    setPostDataControl: (state: any, action: { payload: any }) => {
      state = action.payload;
    },
    setCurrentPage: (state, action: { payload: number }) => {
      state.currentPage = action?.payload;
    },
  },
});

export const { setPostDataControl, setCurrentPage } = PostDataControl.actions;

export default PostDataControl.reducer;
