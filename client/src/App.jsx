import Auth from './components/Authenticate'
import { Achievements, Assignments, Courses, Dashboard, Goals, Home,  Layout, Leaderboard, Lectures, Login, NotFound, Projects, Rewards, Schedule, Signup } from './pages'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div className='w-full min-h-screen  dark:bg-black'>
      <Router>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route path='' element={<Auth authentication={false}><Home/></Auth>}/>
            <Route path='signup' element={<Auth authentication={false}><Signup/></Auth>}/>
            <Route path='login' element={<Auth authentication={false}><Login/></Auth>}/>
            <Route path='dashboard' element={<Auth><Dashboard/></Auth>}/>
            <Route path='leaderboard' element={<Auth><Leaderboard/></Auth>}/>
            <Route path='schedule' element={<Auth><Schedule/></Auth>}/>
            <Route path='goals' element={<Auth><Goals/></Auth>}/>
            <Route path='courses' element={<Auth><Courses/></Auth>}/>
            <Route path='assignments' element={<Auth><Assignments/></Auth>}/>
            <Route path='lectures' element={<Auth><Lectures/></Auth>}/>
            <Route path='projects' element={<Auth><Projects/></Auth>}/>
            <Route path='achievements' element={<Auth><Achievements/></Auth>}/>
            <Route path='rewards' element={<Auth><Rewards/></Auth>}/>
          </Route>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </Router>
  </div>
  )
}

export default App
