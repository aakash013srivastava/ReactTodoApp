import React from 'react';
import './App.css';
const a = [1,2,3];


function App() {
  const [todo,setTodo] = React.useState([
    {item:"Walk",id:1},
    {item:"Study",id:2},
  ]);
  return (
    <div className="App">
      <ListTodo todo={todo} setTodo={setTodo}/>
      <AddTodo todo={todo} setTodo={setTodo}/>

    </div>
  );
}

function ListTodo({todo,setTodo}){
  const deleteTodo = (todoid)=>{
    const arr = todo.filter(t=>t.id!=todoid)
    console.log(arr);
    setTodo(arr)
  }
  return (<div className="todoCard">
    
      {todo.map(t=><p>{t.id}:{t.item} <a href="#" className="cross" onClick={()=>deleteTodo(t.id)}>X</a> </p>)}
    
  </div>)
}


function AddTodo({todo,setTodo}){

  function handleSubmit(e){
    e.preventDefault()
    setTodo([...todo,{item:e.target.elements.inputTodo.value,id:todo.length+1}])
    e.target.elements.inputTodo.value= ''
  }

  return (<div>
    <form onSubmit={handleSubmit}>
    <input type="text" id="inputTodo"/>
    <button type="submit" id="submitButton">Add Item</button>
    </form>
  </div>)
}

export default App;
