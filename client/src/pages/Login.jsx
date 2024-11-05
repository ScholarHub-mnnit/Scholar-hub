import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import Input from '../components/Input';
import authService from '../api/authApiService';
import { useDispatch } from 'react-redux';
import { login } from '../store/userSlice';
import Loading from '../components/Loading';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState(false);
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const { register, handleSubmit, formState: { errors }, } = useForm({
    defaultValues: {
      email: "",
      password: "",
    }
  })
  const dataSubmit = async (data) => {
    console.log("login", data);
    setError("");
    setLoading(true);
    try {
      const res=await authService.login(data);
      if(res){
        dispatch(login(res));
        navigate("/dashboard");
      }

    } catch (error) {
      setError(error?.message);
    }
    setLoading(false);
  }
  if(loading){
    return <Loading/>
  }
  return (
    <>
      <div className='min-h-screen mx-auto py-32'>
        <div className='border border-blue-400 dark:border-neutral-800 rounded-lg '>
          <form onSubmit={handleSubmit(dataSubmit)} className='pt-6 pb-2 px-4 flex flex-col justify-center items-center'>
            <h1 className='dark:text-gray-300 text-darken text-xl font-bold text-center text-gray-900'>Login</h1>
            <div className='flex flex-col pt-6'>
              <div>
                <Input label={"Email"} placeholder={"Enter your email..."} {...register("email", {
                  required: "Email is required!",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Invalid email address",
                  },
                })} />
                {errors && errors?.email && errors.email?.message.length > 0 && <p className='text-red-600 text-center mb-2 text-md'>{errors.email.message}</p>}
              </div>
              <div>
                <Input label={"Password"} type="password" placeholder={"Your password..."} {...register("password", {
                  required: "Password is required!",
                })} />
                {errors && errors?.password && errors.password?.message.length > 0 && <p className=' mb-2 text-center text-md text-red-600'>{errors.password.message}</p>}
              </div>
              <div className='flex justify-end'>
                <Link to={"/forgot-password"}><p className='text-blue-600 text-sm font-semibold'>Forget Password!</p></Link>
              </div>
            </div>
            <div>
            {error.length > 0 && <p className=' mb-2 text-center text-md text-red-600 '>{error}</p>}
              <button className="my-4 dark:hover:bg-gray-900 dark:bg-gray-950 bg-blue-500 w-fit hover:bg-blue-700 text-white font-bold 
            py-1 px-4 border dark:border-neutral-800 dark:hover:border-black border-blue-700 rounded text-md" type='submit'>
                Login
              </button>
            </div>
          </form>
        </div>
      </div>u
    </>
  )
}

export default Login