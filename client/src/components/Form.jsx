import React from 'react'
import { useForm } from 'react-hook-form'
import Input from './Input'

function Form({label='Sign Up',apiToSendData}) {
    const {register, handleSubmit, formState:{errors},watch,}=useForm({
        defaultValues:{
            username:"",
            email:"",
            password:"",
            confirmpassword:"",
            branch:"",
            college:"",
            year:"",
            semester:""
        }
    })

    const dataSubmit=(data)=>{
        console.log(data);
        apiToSendData(data);
    }
    return (
            <form onSubmit={handleSubmit(dataSubmit)} className='pt-6 pb-2 px-4 flex flex-col justify-center items-center'>
                <h1 className='dark:text-gray-300 text-darken text-xl font-bold text-center text-gray-900'>{label}</h1>
            <div className='flex flex-col pt-6'>
            <div>
                <Input label={"Name"} placeholder={"Enter your name..."} {...register("name",{
                    required: "Name is required!",
                })}/>
                {errors && errors?.name && errors.name?.message.length>0 && <p className=' mb-2 text-center text-md text-red-600'>{errors.name.message}</p>}
            </div>
            <div>
                <Input label={"User name"} placeholder={"Enter your username..."} {...register("username",{
                    required: "Username is required!",
                })}/>
                {errors && errors?.username && errors.username?.message.length>0 && <p className=' mb-2 text-center text-md text-red-600'>{errors.username.message}</p>}
            </div>
            <div>
                <Input label={"Email"} placeholder={"Enter your email..."} {...register("email",{
                    required: "Email is required!",
                    pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: "Invalid email address",
                    },
                })}/>
                {errors && errors?.email && errors.email?.message.length>0 && <p className=' mb-2 text-center text-md text-red-600'>{errors.email.message}</p>}
            </div>
            <div>
                <Input label={"Branch"} placeholder={"Enter your branch..."} {...register("branch",{
                    required: "Branch is required!",
                })}/>
                {errors && errors?.branch && errors.branch?.message.length>0 && <p className=' mb-2 text-center text-md text-red-600'>{errors.branch.message}</p>}
            </div>
            <div>
            <Input label={"Semester"} placeholder={"Enter semester..."} {...register("semester",{
                    required: "Semester is required!",
                })}/>
                {errors && errors?.semester && errors.semester?.message.length>0 && <p className=' mb-2 text-center text-md text-red-600'>{errors.semester.message}</p>}
            </div>
            <div>
            <Input label={"Year"} placeholder={"Enter your year..."} {...register("year",{
                    required: "Year is required!",
                    validate: value => !isNaN(value) || "Year must be a valid number",
                })}/>
            {errors && errors?.semester && errors.semester?.message.length>0 && <p className=' mb-2 text-center text-md text-red-600'>{errors.semester.message}</p>}
            </div>
            <div>
            <Input label={"College"} placeholder={"Enter your college..."} {...register("college",{
                    required: "College is required!",
                })}/>
            {errors && errors?.college && errors.college?.message.length>0 && <p className=' mb-2 text-center text-md text-red-600'>{errors.college.message}</p>}
            </div>
            <div>
            <Input label={"Password"} type="password" placeholder={"Your password..."} {...register("password", {
                        required: "Password is required",
                        pattern: {
                            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                            message: "Password must contain at least one uppercase letter, one lowercase letter, one number, one special character, and be at least 8 characters long.",
                        },
                    })}/>
            {errors && errors?.password && errors.password?.message.length>0 && <p className=' mb-2 text-center text-md text-red-600'>{errors.password.message}</p>}
            </div>
            <div>
            <Input label={"Confirm Password"} type="password" placeholder={"Confirm password..."} {...register("confirmpassword", { 
                            required: "Confirm Password is required", 
                            validate: (value) => value === watch("password") || "Passwords do not match"
                        })}/>
            {errors && errors?.confirmpassword && errors.confirmpassword?.message.length>0 && <p className=' mb-2 text-center text-md text-red-600'>{errors.confirmpassword.message}</p>}
            </div>
            </div>
            <div>
            <button className="mt-4 dark:hover:bg-gray-900 dark:bg-gray-950 bg-blue-500 w-fit hover:bg-blue-700 text-white font-bold 
            py-1 px-4 border dark:border-neutral-800 dark:hover:border-black border-blue-700 rounded text-md" type='submit'>
                {label}
            </button>
        </div>
            </form>
    )
}

export default Form