import { createSlice } from "@reduxjs/toolkit";

// Tạo 1 Slice = hàm createSlice() của Redux
const counterSlice = createSlice({
    // Truyền vào cái name , initialState (Có thể là number hoặc string , object ,...)
    name: 'counter',
    initialState: 0 ,

    // Reducer là 1 object -> Mỗi key là 1 trường hợp ( là 1 hàm  )
    reducers: {
        increase(state) {
            return state + 1;
        },
        decrease(state) {
            return state - 1;
        },
    },
});
// Redux tự định nghĩa actions và reducer 
const { actions , reducer } = counterSlice ;
// Trong actions thì có increase ,decrease
export const { increase, decrease } = actions
export default reducer