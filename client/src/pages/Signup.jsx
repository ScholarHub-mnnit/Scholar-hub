import React, { useState } from 'react'
import Form from '../components/Form'
import { Link } from 'react-router-dom'
import authService from '../api/authApiService';
import Loading from '../components/Loading';

function Signup() {
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState("");
  const [success,setSuccess] = useState(false);
  const signup=async(data)=>{
    console.log("signup",data);
    setError("");
    setLoading(true);
    try {
      const res= await authService.signup(data);
      if(res) setSuccess(true);
    } catch (error) {
      console.log(error.response?.data?.message);
      setError(error.response?.data?.message);
    }
    setLoading(false);
  }
  if(loading){
    return <Loading/>
  }
  return (
    <>
      <div className='min-h-screen mx-auto mt-4'>
        <div className='border border-blue-400 dark:border-neutral-800 rounded-lg '>
          <Form label='Sign Up' apiToSendData={signup} />
          {error?.length > 0 && <p className=' my-2 text-center text-md text-red-600 '>{error}</p>}
          {success && <p className=' my-2 text-center text-md font-bold text-blue-600 '>Successful! </p>}
          <p className='px-4 pb-3 dark:text-gray-400 text-gray-900'>Already have an account? <Link to={"/login"}><span className='text-blue-700 dark:text-blue-600 rounded-lg px-3 font-semibold hover:border-2 hover:border-blue-400'>Login</span></Link></p>
      </div>
      </div>
    </>
  )
}

export default Signup