import React, { useState } from 'react'

const Todo = () => {

  const [Todolist, setTodolist] = useState([]);
  const addNewTask = (e) => {
    // console.log(e.code);
    if (e.code === 'Enter') {
      console.log(e.target.value);


      setTodolist([{text : e.target.value, completed: false},...Todolist]);
      console.log([{text : e.target.value, completed: false}, ...Todolist]);
      e.target.value = "";


      e.target.value = "";
    }
  }


  const deleteTodo = (index) =>{
    console.log(index);
    const temp = Todolist;
    temp.splice(index,1);
    setTodolist([...temp]);

  }

  const completeTodo = (index) =>{
    const temp = Todolist;
    temp[index].completed = !temp[index].completed;
    setTodolist([...temp]);
    console.log(temp);
  }
  function removeAll(){
    setTodolist([])
  }
  

  return (
    <div className='container1'>
      <h2>To Do List</h2>
      <hr />
      <div className='card'>
        <div className='card-header'>
          <input type1='text' className='form-control' placeholder='Enter Task to Add' onKeyDown={addNewTask}></input>
          <div className='card-body'>
            <ul>
            {Todolist.map((task, index) => {return <li className=' p-2 border border-primary list-group-item d-flex justify-content-between align-items-center'>
              <p>{task.text}</p>
              {task.completed ? (
                <span class="badge text-bg-primary">completed</span>
              ) : (
                <span class="badge text-bg-warning">pending</span>
              )
              }
              <div>
                <button1 className='btn btn-primary' onClick={() => {completeTodo(index)}}>complete</button1>
                <button1 className='btn btn-danger ms-3 mx-2' onClick={() => {deleteTodo(index)}}>delete</button1>
              </div>
            </li>})}
            {Todolist.length>=1 &&
     <button className='btn btn-success ms-3 mx-5 w-25' onClick={removeAll}>Remove All</button>}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Todo;