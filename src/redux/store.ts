import {
  combineReducers,
  configureStore,
  createAction,
} from "@reduxjs/toolkit";
import { PostData } from "./reducers/postDataReducer";
import { PostMetaData } from "./reducers/postMetaDataReducer";
import { Hit, MetaPost } from "../types/MetaPostType";
import { PostDataControl } from "./reducers/postDataControlReducer";

export const revertAll = createAction("REVERT_ALL");
export interface ApplicationState {
  postData: { data: Hit[] };
  postMetaData: { data: MetaPost };
  postDataControl: {
    currentPage: number;
  };
}

const combinedReducer = combineReducers({
  postData: PostData.reducer,
  postMetaData: PostMetaData.reducer,
  postDataControl: PostDataControl.reducer,
});

const rootReducer = (state: any, action: any) => {
  if (action.type === "REVERT_ALL") {
    state = undefined;
  }
  return combinedReducer(state, action);
};

export function makeStore() {
  return configureStore({
    reducer: rootReducer,
  });
}

const store = makeStore();
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
