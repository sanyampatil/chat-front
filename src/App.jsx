import React, { lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
const Home = lazy(() => import('./pages/Home'))
const Chat = lazy(() => import('./pages/Chat'))

const Login = lazy(() => import('./pages/Login'))

const Group = lazy(() => import('./pages/Group'))

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Chat/:chatId' element={<Chat />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
