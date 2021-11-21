import {createSlice} from '@reduxjs/toolkit';

const options={
    name: 'todolist' ,
    initialState: localStorage.getItem("itemsArray") === null?[]:JSON.parse(localStorage.getItem("itemsArray")),
    reducers: {
        addtodo : (state, action) =>{
            return [
                    ...state,{
                    id: Date.now() ,
                    title: action.payload.title ,
                    complete: false
                     } 
                ]
            
        },
        removetodo : (state, action)=>{
             return state.filter( (curr) => curr.title!==action.payload.title )
        },

        taskcomp: (state,action)=>{
           const changeitem= state.findIndex((curr)=> curr.title===action.payload.title);
              state[changeitem].complete=action.payload.complete;   
        },

    }
    
}

const todoslice = createSlice(options);

export const {addtodo , removetodo ,taskcomp}= todoslice.actions;

export default todoslice.reducer;   