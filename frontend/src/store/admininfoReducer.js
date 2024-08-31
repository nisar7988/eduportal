import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    admininfo : null
};


const Admininfo = createSlice({
    name:"AdminInfo",
    initialState,
    reducers:{
        changeAdmininfo : (state, action)=>{
            state.admininfo = action.payload;
        }
    }
})


export const { changeAdmininfo } = Admininfo.actions;
export default Admininfo.reducer;