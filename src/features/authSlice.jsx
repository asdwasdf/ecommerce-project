import { createSlice } from "@reduxjs/toolkit";
import { collection, query, where, getDocs, addDoc } from "firebase/firestore";
import { db } from "@/firebase";

import { syncWishlist } from "@/utils/function";
import { syncCart } from "@/utils/function";
import { syncOrders } from "../utils/function";

const loadUserIdFromLocalStorage = () => {
  const userId = localStorage.getItem("userId");
  return userId ? userId : null;
};

const initialState = {
  isLoggedIn: loadUserIdFromLocalStorage() ? true : false,
  userId: loadUserIdFromLocalStorage(),
  userInfo: {},
  isLoading: false
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.isLoggedIn = true;
      state.userId = action.payload.id;
      state.userInfo = action.payload.userInfo;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.userId = null;
      state.userInfo = null;
    },
    registerSuccess: (state, action) => {
      state.isLoggedIn = true;
      state.userId = action.payload.id;
      state.userInfo = action.payload.userInfo;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    }
  }
});

export const { setLoading, loginSuccess, logout, registerSuccess } = authSlice.actions;

export const loginUser = (email, password) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const q = query(
      collection(db, "users"),
      where("email", "==", email),
      where("password", "==", password)
    );

    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const user = querySnapshot.docs[0];
      const userId = user.id;

      dispatch(loginSuccess({ id: userId, userInfo: user.data() }));
      localStorage.setItem("userId", userId);

      await syncWishlist(db, user, dispatch);
      await syncCart(db, user, dispatch);
      await syncOrders(db, user, dispatch);
    }
  } catch (error) {
    console.error("Error logging in: ", error);
  } finally {
    dispatch(setLoading(false));
  }
};

export const registerUser = (username, email, password) => async (dispatch) => {
  try {
    const q = query(collection(db, "users"), where("email", "==", email));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      const docRef = await addDoc(collection(db, "users"), {
        email,
        password,
        username
      });

      const newUser = { id: docRef.id, username };
      dispatch(registerSuccess({ id: newUser.id, userInfo: newUser }));
      localStorage.setItem("userId", newUser.id);
    }
  } catch (error) {
    console.error("Error registering: ", error);
  }
};

export default authSlice.reducer;
