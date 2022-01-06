import React from 'react'

export default function Todo(props) {
    return (
        <div>
            <span><b>{props.todo.title}</b> - </span>
            <span className="mb-5"><em>{props.todo.desc} &nbsp; </em></span><br />
            <button type="button" className="btn btn-sm btn-success mx-2 mt-2" onClick={() => {props.onDelete(props.todo)}}>Done</button>
            <button type="button" className="btn btn-sm btn-danger mt-2" onClick={() => {props.onDelete(props.todo)}}>Delete</button>
            <br /><br />
        </div>
    )
}
