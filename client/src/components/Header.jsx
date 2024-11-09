import React, { useEffect, useRef, useState } from 'react'
import GetStart from './GetStart';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import Logo from './Logo';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/userSlice'
import { TbLogout } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import userService from '../api/userApiService';

function Header() {
  const [menu, setMenu] = useState(false);
  const profileRef = useRef();
  const dispatch = useDispatch();
  const { user, status } = useSelector((state) => state.user)
  const navigate = useNavigate();
  const location = useLocation();
  const handleStart = () => {
    if (location.pathname === '/') {
      navigate("/signup")
    }
    else {
      navigate(-1);
    }
  }

  const handleMenus = (e) => {
    if ( profileRef.current && !profileRef?.current.contains(e.target)) {
      setMenu(false);
      // console.log("close")
    }
  }

  useEffect(() => {
    window.addEventListener('mousedown', handleMenus);
    return () => {
      window.removeEventListener('mousedown', handleMenus);
    };
  }, []);

  const signout = async () => {
    console.log("logout");
    const res = await userService.logout(user);
    if (res) {
      dispatch(logout());
      navigate('/');
    }
  }

  return (
    <header className='shadow z-50 w-full h-16 px-[2px] pb-[2px]'>
      <nav className='dark:bg-gray-950 sm:px-10 px-4 bg-blue-400  border-b-2 dark:border-neutral-800 border-gray-300 rounded-md box-border flex justify-between items-center h-full'>
        <Logo />
        {
          status && <div className='w-1/2 hidden sm:block'>
            <ul className='flex  gap-1 md:gap-4'>
              <NavLink to="/leaderboard" className={({ isActive }) =>` dark:border-gray-600 font-semibold px-2 rounded text-white dark:text-gray-400 ${isActive ? 'border-b-2' : ''}`} ><li >Leaderboard</li></NavLink>
              <NavLink to="/schedule" className={({ isActive }) =>` dark:border-gray-600 font-semibold px-2 rounded text-white dark:text-gray-400 ${isActive ? 'border-b-2' : ''}`} ><li >Schedule</li></NavLink>
              <NavLink to="/goals" className={({ isActive }) =>` dark:border-gray-600 font-semibold px-2 rounded text-white dark:text-gray-400 ${isActive ? 'border-b-2' : ''}`} ><li >Goals</li></NavLink>
              <NavLink to="/rewards" className={({ isActive }) =>` dark:border-gray-600 font-semibold px-2 rounded text-white dark:text-gray-400 ${isActive ? 'border-b-2' : ''}`} ><li >Rewards</li></NavLink>
          </ul>
          </div>
        }
      <div>
        {status ?
          <div ref={profileRef} className='relative'>
            <div className='profile cursor-pointer rounded-full text-white bg-blue-700 dark:bg-slate-700 w-10 h-10
               text-center pt-1 text-xl font-bold border dark:border-neutral-50 border-white'
               onClick={()=>setMenu((prev)=>!prev)}>{user?.name[0]}</div>
              {menu && <div className="menu hover:shadow-xl border dark:border-neutral-700 rounded-xl py-4 px-4 dark:bg-neutral-800 bg-blue-400 absolute top-12 right-0">
                <div className="user flex items-center justify-around text-white">
                  <Link to="/dashboard"><div className='cursor-pointer flex justify-center text-white bg-blue-700 dark:bg-slate-700 w-14 aspect-square rounded-full items-center
               text-xl font-bold border dark:border-neutral-50 border-white'>{user?.name[0]}</div>
               </Link>
                  <Link to="/dashboard">
                  <div className='font-semibold cursor-pointer text-nowrap text-lg px-4'>{user?.name}</div>
                  </Link>
                </div>
                <div className="buttons text-white dark:text-gray-300 pt-4">
                  <ul className='flex flex-col gap-2 justify-start'>
                    <li className='cursor-pointer hover:bg-neutral-700 px-2 py-1 rounded-md flex items-center'><CgProfile className='text-lg mr-2' />Profile</li>
                    <li className='cursor-pointer hover:bg-neutral-700 px-2 py-1 rounded-md flex items-center '
                    onClick={signout}><TbLogout className='text-lg mr-2' />Log out</li>
                </ul>
              </div>
            </div>}
          </div> :
          <GetStart getStart={location.pathname === '/' ? "Get Start" : "Back"} setGetStarted={handleStart} />}
      </div>
    </nav>
    </header >
  )
}

export default Header