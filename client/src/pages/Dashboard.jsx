import React, { useEffect, useState } from 'react'
import { MdOutlineAssignmentTurnedIn, MdLeaderboard, MdStars } from "react-icons/md";
import { SiBookstack } from "react-icons/si";
import { AiFillSchedule } from "react-icons/ai";
import { PiChalkboardTeacherDuotone } from "react-icons/pi";
import { BsPersonWorkspace } from "react-icons/bs";
import { GiAchievement, GiStairsGoal } from "react-icons/gi";
import { Link } from 'react-router-dom';
import Quote from '../components/Quote';
import Table from '../components/Table';
import { events } from '../Data/upcomingEvents';
import { assignment } from '../Data/assignment';
import { useDispatch, useSelector } from 'react-redux';
import { courses as courseApi } from '../store/courseSlice';
import { tasks } from '../store/taskSlice';
import Loading from '../components/Loading'
import Error from '../components/Error';
import useCourses from '../Data/courses';



function Dashboard() {
  const dispatch= useDispatch();
  const [error,setError]= useState("");
  const [loading,setLoading]= useState(false);
  const { course, loading:loading1, error:error1 } = useSelector((state) => state.course);
  const { task, loading:loading2, error:error2 } = useSelector((state) => state.task);
  const { keys, data }=useCourses();

  const fetchFirst=async()=>{
    dispatch(courseApi());//await
    dispatch(tasks());//await
  }

  useEffect(() => {
    setLoading(loading1 || loading2);
  }, [loading1, loading2]);

  
  useEffect(() => {
    setError(error1 || error2);
  }, [error1, error2]);

  useEffect(async()=>{
    fetchFirst();
  },[]);

  if(loading){
    return <Loading/>
  }

  if(error?.length>0){
    return <Error message={error}/>
  }

  return (
    <div className=' w-full py-2'>
      <div className='flex px-4'>
        <div>
          <aside className='mx-2 border border-gray-400 rounded-md dark:border-gray-700 bg-blue-400 dark:bg-gray-950'>
            <div className="buttons py-2 px-2 text-white dark:text-gray-400 pt-4">
              <div className='flex items-center'>
                <Link to="/dashboard"><div className='cursor-pointer flex mb-2 sm:mb-0 justify-center text-white bg-blue-700 dark:bg-slate-700 sm:w-10 w-8 aspect-square rounded-full items-center
               sm:text-xl font-bold border dark:border-neutral-50 border-white'>S</div>
                </Link>
                <Link to="/dashboard">
                  <div className='hidden sm:block font-semibold cursor-pointer text-nowrap text-lg px-4'>User Name</div>
                </Link>
              </div>
              <ul className='flex flex-col  gap-2 justify-start'>
                <Link to={"/leaderboard"}><li className='cursor-pointer  hover:bg-blue-600 dark:hover:bg-gray-800  px-2 py-1 rounded-md flex items-center sm:hidden'><MdLeaderboard /></li>
                </Link>
                <Link to={"/schedule"}><li className='cursor-pointer hover:bg-blue-600 dark:hover:bg-gray-800  px-2 py-1 rounded-md flex items-center sm:hidden'><AiFillSchedule /></li>
                </Link>
                <Link to={"/courses"}><li className='cursor-pointer hover:bg-blue-600 dark:hover:bg-gray-800 px-2 py-1 rounded-md flex items-center'><SiBookstack /><span className='hidden sm:block sm:px-2'>Courses</span></li>
                </Link>
                <Link to={"/assignments"}><li className='cursor-pointer hover:bg-blue-600 dark:hover:bg-gray-800  px-2 py-1 rounded-md flex items-center'><MdOutlineAssignmentTurnedIn /><span className='hidden sm:block sm:px-2'>Assignments</span></li>
                </Link>
                <Link to={"/lectures"}><li className='cursor-pointer hover:bg-blue-600 dark:hover:bg-gray-800  px-2 py-1 rounded-md flex items-center '><PiChalkboardTeacherDuotone /><span className='hidden sm:block sm:px-2'>Lectures</span></li>
                </Link>
                <Link to={"/projects"}><li className='cursor-pointer hover:bg-blue-600 dark:hover:bg-gray-800  px-2 py-1 rounded-md flex items-center '><BsPersonWorkspace /><span className='hidden sm:block sm:px-2'>Projects</span></li>
                </Link>
                <Link to={"/achievements"}><li className='cursor-pointer hover:bg-blue-600 dark:hover:bg-gray-800  px-2 py-1 rounded-md flex items-center '><GiAchievement /><span className='hidden sm:block sm:px-2'>Achievements</span></li>
                </Link>
                <Link to={"/goals"}><li className='cursor-pointer hover:bg-blue-600 dark:hover:bg-gray-800  px-2 py-1 rounded-md flex items-center sm:hidden'><GiStairsGoal /></li>
                </Link>
                <Link to={"/rewards"}><li className='cursor-pointer hover:bg-blue-600 dark:hover:bg-gray-800  px-2 py-1 rounded-md flex items-center sm:hidden'><MdStars /></li>
                </Link>
              </ul>
            </div>
          </aside>
        </div>
        <div className='w-full rounded-md'>
          <div className=''>
                {/* <h1 className='text-center'>Welcome</h1> */}
                <div>
                  <Table title={"Upcoming Events"} graph={false} keys={events.keys} data={events.data}/>
                  <Table title={"Current Courses"} keys={keys} data={data} label={"coursecode"} value={"credit"} />
                  <Table title={"Assignments Overview"} add='/assignments' keys={assignment?.keys} data={assignment?.data} label={"id"} value={"points"}/>
                </div>
          </div>
          <Quote />
        </div>
      </div>
    </div>
  )
}

export default Dashboard