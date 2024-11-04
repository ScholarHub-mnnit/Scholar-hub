import React from 'react'
import EditableData from './EditableData';
import {v4 as uuidv4} from 'uuid'

function TableHead({title, keys, list=[], delFunction, editFunction}) {
    return (
        <div className='my-4 '>
        <h2 className="sm:text-2xl text-xl font-bold text-center font-serif dark:text-gray-400">All {title}</h2>
        {list.length>0 ?<div>
            <table className="md:mx-4 w-full bg-white border dark:border-slate-600 px-4 py-4">
            <thead>
                <tr className=" dark:bg-gray-900 bg-blue-400 text-white dark:text-gray-400 uppercase text-sm leading-normal">
                    {keys.map((item, idx) => <th key={idx} className="py-2 text-center text-wrap">{item}</th>)}
                    <th className="text-center py-2 px-2">Edit</th>
                </tr>
            </thead>
        <tbody>{
            list.map((item)=><EditableData key={uuidv4()}  entity={item} keys={keys} delFunction={delFunction} editFunction={editFunction}/>)
        }
        </tbody>
        </table>
        </div>:
        <div className="border w-fit m-auto  rounded-md  px-3 py-2 sm:text-2xl text-xl font-bold text-center font-serif dark:text-gray-400">
            No {title} found. Would you like to assign new {title}?
        </div>
    }
    </div>
    )
}

export default TableHead