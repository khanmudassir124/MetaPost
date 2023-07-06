import { createSlice } from "@reduxjs/toolkit";
import { Hit } from "../../types/MetaPostType";

const INITIAL_STATE = {
  data: [] as Hit[],
};

export const PostData = createSlice({
  name: "PostData",
  initialState: INITIAL_STATE,
  reducers: {
    setPostData: (state: any, action: { payload: Hit[] }) => {
      state.data = action.payload;
    },
  },
});

export const { setPostData } = PostData.actions;

export default PostData.reducer;
