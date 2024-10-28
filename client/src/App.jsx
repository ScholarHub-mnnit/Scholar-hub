import { Home,  Layout, Login, NotFound, Signup } from './pages'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div className='w-full min-h-screen'>
      <Router>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route path='' element={<Home/>}/>
            <Route path='signup' element={<Signup/>}/>
            <Route path='login' element={<Login/>}/>
          </Route>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </Router>
  </div>
  )
}

export default App
