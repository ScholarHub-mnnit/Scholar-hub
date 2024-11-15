import React from 'react'
import { Link } from 'react-router-dom';
import PieChart from './ChartComp';

function Table({ title ,graph=true, keys=[] ,add="", data=[],label,value,chartInfo}) {
    return (
        <div className=" my-3 py-2 sm:px-3 border dark:border-slate-800 rounded">
            <div className={`flex ${add.length>0?"justify-between":"justify-center"} items-center mb-4`}><h1 className="ml-2 text-blue-400 dark:text-gray-400 text-2xl font-bold ">{title}</h1>
            {add.length>0 && <Link to={add}><button className='border px-4 py-1 rounded dark:bg-slate-800 dark:hover:bg-slate-900 dark:hover:text-gray-100 text-blue-400 dark:hover:border-gray-400  hover:border-blue-600 hover:text-black dark:text-gray-400 text-lg font-semibold'>All</button></Link>}
            </div>
            <div className="flex gap-4 items-center justify-evenly flex-col md:flex-row">
                {keys.length>0 ? <div className='md:w-1/2'>
                    <table className="md:min-w-full bg-white border dark:border-slate-600 px-4 py-4">
                        <thead>
                            <tr className=" dark:bg-gray-900 bg-blue-400 text-white dark:text-gray-400 uppercase text-sm leading-normal">
                                {Array.isArray(keys) && keys.map((item,idx)=><th key={idx} className="py-3 px-2 text-center ">{item}</th>)}
                            </tr>
                        </thead>
                        <tbody className="text-gray-600 text-sm font-light">
                            {Array.isArray(data) && data.length>0 && data.map((course,idx) => (
                                <tr key={course?.id || idx} className="dark:bg-gray-600 dark:hover:bg-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-950 hover:bg-gray-100 ">
                                    {Array.isArray(keys) && keys.map((item,idx)=><td key={idx} className="py-2 px-2 text-center text-wrap font-medium">{course[item]}</td>)}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>:
                <h1 className='text-center'>No Data Found!</h1>}
                {graph && keys.length>0 && <div className='graph sm:py-0 py-6 md:order-none order-first'>
                    <div className='w-full  py-2 flex justify-center items-center'>
                        <PieChart info={chartInfo} label={label} value={value}/>
                    </div>
                </div>}
            </div>
        </div>
    )
}

export default Table