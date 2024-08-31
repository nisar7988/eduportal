import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    info : null
};

const Info = createSlice({
    name: "TeacherInfo",
    initialState,
    reducers: {
        changeinfo :(state, action) =>{
            state.info = action.payload;
        },
        
    },
});


export const { changeinfo } = Info.actions;

export default Info.reducer;
