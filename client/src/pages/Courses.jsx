import React from 'react';
import { useForm } from 'react-hook-form';
import Input from '../components/Input';
import TableHead from '../components/TableHead';
import { courses } from '../Data/courses';

function Courses() {
  const { register, handleSubmit, formState: { errors }, watch, } = useForm({
    defaultValues: {
      name: "",
      coursecode: "",
      credit: 2,
      confirmcredit: "",
      branch: "",
      college: "",
      year: "",
      semester: ""
    }
  })

  const dataSubmit =async (data) => {
    console.log(data);
    //submit courses data
  }

  const editCourse=async()=>{
    //edit code
  }

  const deleteCourse=async()=>{
    //delete code
  }

  return (
    <div>
      <div className="form">
        <form onSubmit={handleSubmit(dataSubmit)} className='pt-6 pb-2 px-4 flex flex-col justify-center items-center'>
          <h1 className='font-serif dark:text-gray-300 text-darken text-xl font-bold text-center text-gray-900 mb-3'>New Course</h1>
          <div className='flex flex-col items-center border px-4 pb-3 border-gray-400 rounded-md dark:border-gray-700 dark:bg-gray-950'>
            <div className='flex sm:flex-row sm:justify-evenly sm:w-full flex-col pt-6'>
              <div>
                <Input label={"Course Name"} placeholder={"Enter name..."} {...register("name", {
                  required: "Name is required!",
                })} />
                {errors && errors?.name && errors.name?.message.length > 0 && <p className=' mb-2 text-center text-md text-red-600'>{errors.name.message}</p>}
              </div>
              <div>
                <Input label={"Course Code"} placeholder={"Enter Code..."} {...register("coursecode", {
                  required: "Course Code is required!",
                })} />
                {errors && errors?.coursecode && errors.coursecode?.message.length > 0 && <p className=' mb-2 text-center text-md text-red-600'>{errors.coursecode.message}</p>}
              </div>
              <div>
                <Input label={"Credit"} type="number" placeholder={"Your credit..."} {...register("credit", {
                  required: "credit is required",
                  valueAsNumber: true,
                  min: {
                    value: 2,
                    message: "At least 2 credits must!"
                  },
                })} />
                {errors && errors?.credit && errors.credit?.message.length > 0 && <p className=' mb-2 text-center text-md text-red-600'>{errors.credit.message}</p>}
              </div>
            </div>
            <div>
              <button className="mt-4 dark:hover:bg-gray-900 dark:bg-gray-950 bg-blue-500 w-fit hover:bg-blue-700 text-white font-bold 
            py-1 px-4 border dark:border-neutral-800 dark:hover:border-black border-blue-700 rounded text-md" type='submit'>
                Add
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="table w-full">
        <TableHead title={"Courses"} keys={courses.keys} list={courses.data} delFunction={deleteCourse} editFunction={editCourse}/>
      </div>
    </div>
  )
}

export default Courses