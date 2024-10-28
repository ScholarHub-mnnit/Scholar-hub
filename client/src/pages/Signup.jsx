import React from 'react'
import Form from '../components/Form'
import { Link } from 'react-router-dom'

function Signup() {
  const signup=(data)=>{
    console.log("signup",data);
  }
  return (
    <>
        <div className='border border-blue-400 dark:border-neutral-800 rounded-lg '>
          <Form label='Sign Up' apiToSendData={signup} />
          <p className='px-4 pb-3 dark:text-gray-400 text-gray-900'>Already have an account? <Link to={"/login"}><span className='text-blue-700 dark:text-blue-600 rounded-lg px-3 font-semibold hover:border-2 hover:border-blue-400'>Login</span></Link></p>
      </div>
    </>
  )
}

export default Signup