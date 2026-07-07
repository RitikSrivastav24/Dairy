
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import CategoryPage from './pages/CategoryPage'
import CategoryNotes from './components/CategoryNotes'

function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path='/categories' element={<CategoryPage/>}></Route>
        <Route path='/category/:mood' element={<CategoryNotes/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
