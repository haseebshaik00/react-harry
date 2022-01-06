import React from 'react'
import {useState} from 'react';

export default function AddTodo(props) {
    
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const submit1 = (e) => {
        e.preventDefault();
        if(!title || !desc){
            alert("Title or Description cannot be blank");
        }
        else{
            props.addTodo(title, desc);
            setTitle("");
            setDesc("");
        }
    }

    return (
        <div className='container'>
            <form onSubmit={submit1}>
                <br /><br />
                <center><h3>Add Todo</h3> <b><hr width="200px"/></b></center>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" value={title} onChange={(e) => {setTitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Description</label>
                    <input type="text" value={desc} onChange={(e) => {setDesc(e.target.value)}}className="form-control" id="desc   " aria-describedby="emailHelp" />
                </div>
                <button type="submit" className="btn btn-success">Add Todo</button>
            </form>
        </div>
    )
}
