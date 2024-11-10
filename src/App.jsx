import { useState } from 'react'
import {Routes, Route} from "react-router-dom"
import Login from './pages/Login'
import Task from './pages/Task'
import UpdateProfile from './pages/UpdateProfile'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/task' element={<Task />} />
      <Route path='/update/profile' element={<UpdateProfile />} />
    </Routes>
  )
}

export default App