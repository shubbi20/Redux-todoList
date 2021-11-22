import React from 'react';
import { useState } from 'react';
import '../App.css';
import {useDispatch , useSelector} from 'react-redux' ;
import {addtodo} from '../redux/todosearchslice';


export function Search(props){
const[text, setText]= useState("");

function changetext(event){
    event.preventDefault();
 setText(event.target.value);
}

const dispatch=useDispatch();
var todo = useSelector((state)=>state.todos);

function submittask(event){
    event.preventDefault();
    if(text.trim()===""){
        alert('add something');
    }else{
    dispatch(addtodo( {title : text} ));
    localStorage.setItem('itemsArray', JSON.stringify(todo));
    setText("");
    }
    
}


    return(
    <div>
        <div className='heading'>
            Todo-List
        </div>
               
        <form >
           <input type="text"  className='textsec' placeholder='type here' value={text} onChange={changetext} ></input>
           <input type='submit' value='Add' className='textsubmit' onClick={submittask} ></input>
        </form>
    </div>
    )
}