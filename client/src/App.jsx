import { Dashboard, Goals, Home,  Layout, Leaderboard, Login, NotFound, Rewards, Schedule, Signup } from './pages'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div className='w-full min-h-screen  dark:bg-black'>
      <Router>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route path='' element={<Home/>}/>
            <Route path='signup' element={<Signup/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='dashboard' element={<Dashboard/>}/>
            <Route path='leaderboard' element={<Leaderboard/>}/>
            <Route path='schedule' element={<Schedule/>}/>
            <Route path='goals' element={<Goals/>}/>
            <Route path='rewards' element={<Rewards/>}/>
          </Route>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </Router>
  </div>
  )
}

export default App
