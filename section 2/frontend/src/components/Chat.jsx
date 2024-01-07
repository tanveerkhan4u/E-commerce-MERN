import React, { useState } from 'react'

const Chat = () => {

  const [Chatlist, setChatlist] = useState([ ]);
  const addNewTask = (e) => {
    if(e.code === 'Enter') {
      console.log(e.target.value);


      setChatlist([ e.target.value, ...Chatlist]);
      console.log([e.target.value, ...Chatlist ]);
      e.target.value = "";

      e.target.value = "";

    }
  }

  return (
    <div className='container'>
      <h1 className='fw-bold'>Chat Inbox</h1>
      
      <div className='card'>
        <div className='card-header'>
        <ul className='list-group'>
          
          {Chatlist.map((task) => {return <li className='list-group-item d-flex justify-content-between bg-info'>
          
              <p>{task}</p>
              <div>
              
                <button2 className='btn btn-danger my-2'><i class="fa-solid fa-trash"></i></button2>
                <button2 className='btn btn-primary ms-3'><i class="fa-regular fa-bookmark"></i></button2>
                <button2 className='btn btn-success ms-3'><i class="fa-solid fa-pen-to-square"></i></button2>
                
                
              
            

              </div>
            </li>})}
          </ul>
        <input type='text' className='form-control' placeholder='Enter a Chat' onKeyDown={addNewTask}></input>
        <br/>
        <button className='btn btn-secondary px-4'>Submit</button>
        <div className='card-body'>
        
          
          
        </div>
        </div>
      </div>

    </div>
  )
}

export default Chat;