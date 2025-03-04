import { createSlice } from "@reduxjs/toolkit"

export interface RegisterState {
  email: string,
  username: string
}

const initialState: RegisterState = {
  email: "",
  username: ""
}

export const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.email = action.payload.email;
      state.username = action.payload.username;
    }
  }
})

export const { addUser } = registerSlice.actions;
export default registerSlice.reducer;