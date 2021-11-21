import React from "react";
import { useSelector } from 'react-redux';
import {MdDelete} from "react-icons/md";
import { removetodo, taskcomp } from "../redux/todosearchslice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

export function Alllist(props) {

const dispatch= useDispatch();
var todo = useSelector((state)=>state.todos);

function changecomplete(ele){
    console.log(ele);
   dispatch(taskcomp({title: ele.title , complete:!ele.complete}));
}

function changecolor(x){
    const parent= x.target.parentNode;
    parent.classList.toggle('bllue');
}
function delTask(x){
    dispatch(removetodo({title: x.title}));     
}

useEffect(()=>{
    localStorage.setItem('itemsArray', JSON.stringify(todo));
})

return (
<ul>
{todo.map((ele,index)=>(<div className='tasksection' key={index}> <input type='checkbox' className='checkicon' onClick={()=>{changecomplete(ele)},changecolor }/>  {ele.title} <div className='del-icon'> <MdDelete  onClick={()=>delTask(ele)}/></div> </div>))}
</ul>
)
}