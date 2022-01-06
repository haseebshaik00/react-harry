import './App.css';
import Header from './MyComponents/Header';
import Footer from './MyComponents/Footer';
import Todos from './MyComponents/Todos';
import AddTodo from './MyComponents/AddTodo';
import React, {useState} from 'react';

function App() {
  const onDelete = (todo) => {
    console.log("todo deleted", todo);

    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
  }

  const addTodo = (title, desc) => {
    console.log("Todo Added", title, desc);
    let sno = todos.length-1==0 ? todos[todos.length-1].sno +1 : 1;
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }

  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Study React",
      desc: "Study React from playlist" 
    },
    {
      sno: 2,
      title: "Go to Market",
      desc: "Go to Market and buy some veggies"
    },
    {
      sno: 3,
      title: "Go to gym",
      desc: "Go to Gym and workout" 
    }
  ]);

  return (
    <>
      <Header title="Todo-List"/>
      <AddTodo addTodo={addTodo}/>
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer/>
    </>
  );
}

export default App;
