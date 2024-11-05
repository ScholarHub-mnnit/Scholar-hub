import React, { useRef, useState } from 'react'
import { FaEdit } from "react-icons/fa";
import { HiSave } from "react-icons/hi";
import { MdDeleteOutline } from "react-icons/md";
import { v4 as uuidv4 } from 'uuid';

function EditableData({ entity, keys, delFunction, editFunction  }) {
    const [data, setData] = useState({ ...entity });
    const [isEditable, setIsEditable] = useState(false);
    const ref=useRef(keys.map((it)=>uuidv4()));
    const deleteData = (id) => {
        console.log(id);
        delFunction(id);
    }
    const editData = () => {
        //edit data
        editFunction(entity);
        setIsEditable(false);
    }

    return (
        <>
            <tr className='dark:bg-slate-900'>
                {keys.map((item,idx) => <td key={item+ref[idx]} className='w-fit'>
                    <input
                        className={`w-full py-2 text-center text-sm transition-all duration-200 
                            ${isEditable 
                                ? "border border-blue-300 bg-blue-50 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200" 
                                : "text-black bg-white dark:text-gray-200 dark:bg-gray-950"} 
                            outline-none focus:outline-none dark:bg-gray-900`}
                        id={data?.id || data?._id || data?.title}
                        value={data[item] || ""}
                        onChange={(e) => setData({ ...data, [item]: e.target.value })}
                        readOnly={!isEditable}
                    /></td>)}
                <td className='flex mt-0.5 w-full justify-center items-center dark:bg-gray-950 dark:text-white '><button
                    className="dark:bg-gray-950 w-8 h-8 rounded-lg text-sm text-center border border-black/10 bg-gray-50 hover:bg-gray-100 shrink-0 "
                    onClick={() => {
                        
                        if (isEditable) {
                            editData();
                        }
                        else setIsEditable((prev) => !prev);
                    }}
                >
                    {isEditable ? <HiSave className='w-full text-xl' />: <FaEdit className='w-full text-xl' />}
                </button>
                <button
                        className="dark:bg-gray-950 w-8 h-8 text-center rounded-lg text-sm border border-black/10 bg-gray-50 hover:bg-gray-100 shrink-0"
                        onClick={() => deleteData(data?.id || data?.title)}
                    >
                        <MdDeleteOutline className='w-full text-2xl'/>
                    </button>
                </td>
            </tr>
        </>
    );
}

export default EditableData;
