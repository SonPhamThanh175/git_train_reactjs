import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import userApi from 'api/userApi';

 export const register = createAsyncThunk(
    'users/register',
    async (payload) => {
        // Call API to register
        const data = await userApi.register(payload)

        // Save data to the local storage
        localStorage.setItem('access_token', data.jwt)
        localStorage.setItem('user', JSON.stringify(data.user))


        return data.user;
    },
  )

// Tạo 1 Slice = hàm createSlice() của Redux
const userSlice = createSlice({
    // Truyền vào cái name , initialState (Có thể là number hoặc string , object ,...)
    name: 'user',
    initialState: {
        current :{},
        // Tuy du an 
        setting :{},
    } ,

    // Reducer là 1 object -> Mỗi key là 1 trường hợp ( là 1 hàm  )
    // reducers: {},
    // extraReducers : {
    //     [register.fulfilled] : (state ,action) => {
    //         state.current = action.payload ;
    //     }
    // },
});
// Redux tự định nghĩa actions và reducer 
const {  reducer } = userSlice ;
// Trong actions thì có increase ,decrease
export default reducer