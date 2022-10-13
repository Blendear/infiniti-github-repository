//
//  0.  Interface'y
//
//      0.1. Initial state'y
//

//  1.  Slice'y
//
//      1.1. Initial state'y
//
//      1.2. Sumy Kalorii slice
//
//      1.3. Authentication slice
//
//
//  2.  Store - Redux Toolkit way
//
//
//  3.  Action Packs - Redux Toolkit way
//
//

import { createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit";

//
//      0.1. Initial state'y
//

interface typeOfSumyKaloriiState {
  aktualnieKalorie: number;
  maxDziennieKalorie: number;
}

interface typeOfAuthState {
  isAuthenticated: boolean;
}

//
//      1.1. Initial state'y
//

const initialSumyKaloriiState: typeOfSumyKaloriiState = {
  aktualnieKalorie: 0,
  maxDziennieKalorie: 1700,
};

const initialAuthState: typeOfAuthState = { isAuthenticated: false };

//
//      1.2. Sumy Kalorii slice
//
const sumyKaloriiSlice = createSlice({
  name: "sumyKaloriiSlice",
  initialState: initialSumyKaloriiState,
  reducers: {
    //  hook0--POWTÓRZWNIOSKI - action musi być konkretnego typu. Tu podajemy precyzyjny object "{ dodamTyleKalorii: number }" akurat.
    addDoSumyKaloriiAktualnej(
      state,
      action: PayloadAction<{ dodamTyleKalorii: number }>
    ) {
      state.aktualnieKalorie += action.payload.dodamTyleKalorii;
    },
    consoleLogTest(state) {
      console.log("Odpaliłem dispatch, reducer zadziałał");
    },
  },
});

//
//      1.3. Auth slice

const authSlice = createSlice({
  name: "authenticationSlice",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

//
//  2.  Store - Redux Toolkit way
//

const store = configureStore({
  reducer: {
    sumyKaloriiReducer: sumyKaloriiSlice.reducer,
    authReducer: authSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

//
//  3.  Action Packs - Redux Toolkit way
//

export const sumyKaloriiSliceActions = sumyKaloriiSlice.actions;
export const authSliceActions = authSlice.actions;

export default store;
