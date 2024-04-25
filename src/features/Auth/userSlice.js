import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "api/userApi";

export const register = createAsyncThunk(
    'user/register',
    async (payload) => {
      console.log('payload',payload);
        //Call API to register
        const data = await userApi.register(payload);
        // console.log('data',data);

        // Save data to local storage
        localStorage.setItem('access_token_register', data.jwt);
        localStorage.setItem('user', JSON.stringify(data.user));

        // Return user data
        return data.user;
    }
  )

// Tạo 1 Slice = hàm createSlice() của Redux
const userSlice = createSlice({
    // Truyền vào cái name , initialState (Có thể là number hoặc string , object ,...)
    name: 'user',
    initialState: {
        current:{},
        settings:{},
    } ,

    // Reducer là 1 object -> Mỗi key là 1 trường hợp ( là 1 hàm  )
    reducers: {},
    // extraReducers: (builder) => {
    //     builder.addCase(register.fulfilled, (state, action) => {
    //       state.current = action.payload;
    //       // state.current.push(action.payload)
    //     });
    //   },
    extraReducers: (builder) => {
      // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(register.fulfilled, (state, action) => {
        // Add user to the state array
        state.current = action.payload;
      })
    },
});
const { reducer } = userSlice ;
export default reducer