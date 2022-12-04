import {
  combineReducers,
  configureStore,
  PreloadedState,
} from "@reduxjs/toolkit";
import cartSlice from "../features/cart/cartSlice";

//MIDDLEWARE
const localStorageMiddleware = ({ getState }: any) => {
  return (next: (arg0: any) => any) => (action: any) => {
    const result = next(action);
    localStorage.setItem("applicationState", JSON.stringify(getState()));
    return result;
  };
};

const reHydrateStore = () => {
  if (
    typeof localStorage !== "undefined" &&
    localStorage.getItem("applicationState") !== null
  ) {
    return JSON.parse(localStorage.getItem("applicationState") as string);
  }
};

export const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
  preloadedState: reHydrateStore(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

const rootReducer = combineReducers({
  cart: cartSlice,
});

export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
}

export type AppStore = ReturnType<typeof setupStore>;
