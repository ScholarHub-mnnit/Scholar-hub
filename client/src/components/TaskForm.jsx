import React from 'react'
import { useForm } from 'react-hook-form';
import Input from './Input';

function TaskForm({ task, content }) {
    const today=new Date();
    const { register, getValues, setValue, watch, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            title: "",
            tasktype: content || "Assignment",
            deadline: today.toLocaleDateString(),
            chapterno: 0,
            chaptername: "",
            duration: null,
            status: "Pending",
            remark: "",
            setgoal: false,
            goaltype: "",
        }
    });
    const dateValue=watch('deadline');
    const type = watch('tasktype');
    const goals = watch('setgoal');
    const submitData = (data) => {
        console.log(data);
    }
    return (
        <div className='flex flex-col items-center my-2 sm:mx-4'>
            <h2 className="sm:text-2xl text-xl font-bold text-center font-serif  text-gray-900 dark:text-gray-400 ">New {task}</h2>
            <form onSubmit={handleSubmit(submitData)} className="w-fit py-4 px-2 border border-gray-400 rounded-md dark:border-gray-700 dark:bg-gray-950">
                <div className='flex flex-col gap-2 items-center'>
                    <div>
                        <Input
                            label={"Title"}
                            id="title"
                            {...register('title', { required: 'Title is required!' })}
                            placeholder={getValues('tasktype')+" title here..."}
                        />
                        {errors.title && <p className="text-red-500 text-center">{errors.title.message}</p>}
                    </div>
                    <div className="type grid grid-cols-1 sm:grid-cols-2 sm:gap-20  w-full">
                        <div>
                            <div className='flex  justify-between items-center '>
                                <label htmlFor="tasktype" className="block mx-2 text-gray-900 dark:text-gray-400 text-md font-bold text-nowrap">Type: </label>
                                <select
                                    className='focus:outline-none py-2 px-3 shadow text-black dark:text-gray-200 dark:bg-gray-950  dark:border-neutral-800 border border-gray-300 rounded '
                                    onChange={(e) => setType(e.target.value)}
                                    id="tasktype"
                                    {...register('tasktype', { required: "Type is required!" })}
                                >
                                    <option value="Assignment">Assignment</option>
                                    <option value="Lectures">Lecture</option>
                                    <option value="Project">Project</option>
                                </select>
                            </div>
                            {errors.tasktype && <p className="text-red-500 text-center">{errors.tasktype.message}</p>}
                        </div>

                        {type === 'Lectures' ? <div className='m-2'>
                            <Input
                                label={"Duration"}
                                type="time"
                                id="duration"
                                {...register('duration')}
                            />
                        </div>
                            :
                            <div className='flex  justify-between items-center '>
                                <label htmlFor="deadline" className="block mx-2 text-gray-900 dark:text-gray-400 text-md font-bold text-nowrap">Deadline:</label>
                                <input
                                    className='py-2 px-3 shadow text-black dark:text-gray-200 dark:bg-gray-950  dark:border-neutral-800 border border-gray-300 rounded '
                                    type="date"
                                    id="deadline"
                                    {...register('deadline')}
                                />
                            </div>}

                    </div>
                    <div className="chapter grid grid-cols-1 sm:gap-20  sm:grid-cols-2  w-full">
                        <div>
                            <Input
                                label={"Chapter No."}
                                type="number"
                                id="chapterno"
                                {...register('chapterno', { min: { value: 1, message: 'Chapter number must be at least 1' } })}
                            />
                            {errors.chapterno && <p className="text-red-500">{errors.chapterno.message}</p>}
                        </div>

                        <div>
                            <Input
                                label={"Chapter Name"}
                                id="chaptername"
                                {...register('chaptername')}
                            />
                        </div>
                    </div>
                    {/* <div>
                            <label htmlFor="reward_point">Reward Points</label>
                            <input
                                type="number"
                                id="reward_point"
                                {...register('reward_point')}
                                className="border rounded p-2 w-full"
                            />
                            </div> */}
                    <div className="status grid grid-cols-1 sm:grid-cols-2 sm:gap-20  w-full">
                        <div className='flex justify-between items-center  w-full'>
                            <label htmlFor="status" className="block mx-2 text-gray-900 dark:text-gray-400 text-md font-bold text-nowrap">Status: </label>
                            <select
                                id="status"
                                {...register('status')}
                                className='py-2 px-3 shadow text-black dark:text-gray-200 dark:bg-gray-950  dark:border-neutral-800 border border-gray-300 rounded '
                            >
                                <option value="Completed">Completed</option>
                                <option value="Pending">Pending</option>
                                <option value="Overdue">Overdue</option>
                            </select>
                        </div>

                        <div className=' w-full'>
                            <Input
                                label="remark"
                                id="description"
                                {...register('description')}
                            />
                        </div>
                    </div>

                    <div className={`goals grid grid-cols-1 ${goals ? "sm:grid-cols-2" : ""} sm:gap-20   w-full`}>
                        <div className={`flex items-center ${!goals ? "justify-center" : ""} w-full`}>
                            <label htmlFor="setgoal" className="block mx-2 text-gray-900 dark:text-gray-400 text-md font-bold text-nowrap">
                                Set Goal:
                            </label>
                            <input className='mx-2' type="checkbox" id="setgoal" {...register('setgoal')} />
                        </div>

                        {goals && <div className='flex justify-between items-center'>
                            <label htmlFor="goaltype" className="block mx-2 text-gray-900 dark:text-gray-400 text-md font-bold text-nowrap">Goal Type: </label>
                            <select
                                id="goaltype"
                                {...register('goaltype')}
                                className='py-2 px-3 shadow text-black dark:text-gray-200 dark:bg-gray-950  dark:border-neutral-800 border border-gray-300 rounded '
                            >
                                <option value="Daily">Daily</option>
                                <option value="Weekly">Weekly</option>
                            </select>
                        </div>}
                    </div>
                    <button type="submit" className="dark:hover:bg-gray-900 dark:bg-gray-950 bg-blue-500 w-fit hover:bg-blue-700 text-white font-bold 
            py-2 px-4 border dark:border-neutral-800 dark:hover:border-black border-blue-700 rounded text-md">Add {task}</button>
                </div>
            </form>
        </div>
    )
}

export default TaskForm