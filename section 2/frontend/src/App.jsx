import React from 'react'
import './app.css'
import { BrowserRouter, Link, Route, Routes, NavLink } from 'react-router-dom';
import Home from './components/Home';
import Signup from './components/Signup';

import Loginform from './components/Loginform';



import Navbar from './components/Navbar';
import Notfound from './components/Notfound';
import Contact from './components/Contact';
import Eventhandling from './components/Eventhandling';
import StateManagement from './components/StateManagement';
import Post from './components/Post';
import Todo from './components/Todo';
import Chat from './components/Chat';
import Browseproduct from './components/Browseproduct';
import Chatlist from './components/Chatlist';
import Register from './components/Register';




const App = () => {



  return (
    <div>

      <BrowserRouter>
        {/* { <Link to='/'>Home</Link> */}
        {/* <Link to='Loginform'>Loginform</Link> */}
        {/* <Link to='Signup'>Signup</Link> } */}
        <Navbar></Navbar>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Loginform' element={<Loginform />} />
          <Route path='/Signup' element={<Signup />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='*' element={<Notfound />} />
          <Route path='/Eventhandling' element={<Eventhandling />} />
          <Route path='/StateManagement' element={<StateManagement />} />
          <Route path='/Todo' element={<Todo />} />
          <Route path='/Chat' element={<Chat />} />
          <Route path='/Post' element={<Post />} />
          <Route path='/Browseproduct' element={<Browseproduct />} />
          <Route path='/Chatlist' element={<Chatlist />} />
          <Route path='/Register' element={<Register />} />







        </Routes>
      </BrowserRouter>


    </div>

  )
}

export default App;
