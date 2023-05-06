import { createSlice } from "@reduxjs/toolkit";
const initialState = {
   items:null,
   selected:null, 
}
export const itemsSlice = createSlice({
    name:'items',
    initialState,
    reducers:{
        setItems:(state,action)=>{
            state.items= action.payload
        },
        setSelected:(state,action)=>{
            state.selected=action.payload
        }
    }
})

export const {setItems,setSelected} =  itemsSlice.actions;
export default itemsSlice.reducer;