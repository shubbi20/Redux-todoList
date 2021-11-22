import React from "react";
import { useSelector } from 'react-redux';
import { MdDelete } from "react-icons/md";
import { removetodo, taskcomp } from "../redux/todosearchslice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";

export function List({ ele }) {
    const [col, setCol] = useState(false);
    const dispatch = useDispatch();

    function changecomplete(ele) {
        console.log(ele);
        dispatch(taskcomp({ title: ele.title, complete: !ele.complete }));
        setCol(!col);
    }

    // function changecolor(x) {
    //     const parent = x.target.parentNode;
    //     parent.classList.toggle('bllue');
    // }

    function delTask(x) {
        dispatch(removetodo({ title: x.title }));
    }
    console.log(col);

    return (
        <div className={`tasksection ${col && 'bllue'}`} key={ele.id}>
        <input type='checkbox' className='checkicon' onChange={() => {changecomplete(ele)}} />  {ele.title} <div className='del-icon'> <MdDelete onClick={() => delTask(ele)} /></div> </div>
    )
}

const Alllist = (props) => {
    var todo = useSelector((state) => state.todos);
    useEffect(() => {
        localStorage.setItem('itemsArray', JSON.stringify(todo));
    })

    return (
        <ul>
            {todo.map((ele) => (
                <List key={ele.id} ele={ele} />
            ))}
        </ul>
    )
}

export default Alllist;