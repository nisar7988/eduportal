import { createSlice } from "@reduxjs/toolkit";
// import { changeinfo } from "./teacherinfoReducer";

const initialState = {
    studentinfo : null
};

const Studentinfo = createSlice({

    name :"StudentInfo",
    initialState,
    reducers: {
        changeStudentinfo : (state , action) =>{
            state.studentinfo = action.payload;
        },
    },
});
export const { changeStudentinfo } = Studentinfo.actions;
export default Studentinfo.reducer;