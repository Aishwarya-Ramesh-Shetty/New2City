import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Signup from './components/Signup'
import Login from './components/Login'

const App = () => {
  return (
    <>
      <nav>
        <Routes>
          <Route path='/' element={<Signup/>}/>
          <Route path='/login' element={<Login/>} />
        </Routes>
      </nav>
    
    </>
  )
}

export default App