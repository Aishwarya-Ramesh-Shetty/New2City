import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Signup from './components/Signup'
import Login from './components/Login'
import Dashboard from './components/Dashboard'

const App = () => {
  return (
    <>
      <nav>
        <Routes>
          <Route path='/' element={<Signup/>}/>
          <Route path='/login' element={<Login/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
        </Routes>
      </nav>
    
    </>
  )
}

export default App