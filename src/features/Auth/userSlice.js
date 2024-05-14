import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "api/userApi";
import StorageKeys from "constants/storage-key";

export const register = createAsyncThunk(
    'user/register',
    async (payload) => {
      // console.log('payload',payload);
        //Call API to register
        const data = await userApi.register(payload);
        // console.log('data',data);

        // Save data to local storage
        localStorage.setItem(StorageKeys.TOKEN, data.jwt);
        localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user));

        // Return user data
        return data.user;
    }
  )

  export const login = createAsyncThunk(
    'user/login',
    async (payload) => {
        const data = await userApi.login(payload);

        // Save data to local storage
        localStorage.setItem(StorageKeys.TOKEN, data.jwt);
        localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user));

        // Return user data
        return data.user;
    }
  )

// Tạo 1 Slice = hàm createSlice() của Redux
const userSlice = createSlice({
    // Truyền vào cái name , initialState (Có thể là number hoặc string , object ,...)
    name: 'user',
    initialState: {
        current: JSON.parse(localStorage.getItem(StorageKeys.USER)) || {} ,
        settings:{},
    } ,

    // Reducer là 1 object -> Mỗi key là 1 trường hợp ( là 1 hàm  )
    reducers: {
      logout(state){
        //clear local storage
        localStorage.removeItem(StorageKeys.TOKEN);
        localStorage.removeItem(StorageKeys.USER);
        
        //reset state.current
        state.current = {};
        state.settings = {};
      }
    },
    // extraReducers: {
    //     [register.fulfilled] : (state,action) => {
    //         state.current = action.payload;
    //     }
     //     [login.fulfilled] : (state,action) => {
    //         state.current = action.payload;
    //     }
    // },

    extraReducers: builder => {
      builder
          .addCase(register.fulfilled, (state, action) => {
              state.current = action.payload;
          })
          .addCase(login.fulfilled, (state, action) => {
              state.current = action.payload;
          });
  }
});
const { actions, reducer } = userSlice ;
export const {logout} =actions
export default reducer