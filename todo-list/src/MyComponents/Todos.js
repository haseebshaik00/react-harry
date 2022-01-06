import React from 'react'
import Todo from './Todo';

export default function Todos(props) {
    return (
        <div className="container">
            <br /><br />
            <center><h3>Todo List</h3><b><hr width="200px"/></b></center>
            <br />
            {props.todos.length===0 ? <center><div><b><em>"Sorry, No todos to display!"</em></b></div></center> :
            props.todos.map((todo)=>
            {
                return <Todo todo={todo} key={todo.sno} onDelete={props.onDelete}/>
            })}
        </div>
    )
}
