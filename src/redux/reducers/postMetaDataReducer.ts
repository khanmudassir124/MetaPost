import { createSlice } from "@reduxjs/toolkit";
import { Hit, MetaPost } from "../../types/MetaPostType";

const INITIAL_STATE = {
  data: {} as MetaPost,
};

export const PostMetaData = createSlice({
  name: "MetaPostData",
  initialState: INITIAL_STATE,
  reducers: {
    setPostMetaData: (state: any, action: { payload: MetaPost }) => {
      state.data = action.payload;
    },
  },
});

export const { setPostMetaData } = PostMetaData.actions;

export default PostMetaData.reducer;
