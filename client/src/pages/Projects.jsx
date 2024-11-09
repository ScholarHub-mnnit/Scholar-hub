import React, { useState } from 'react'
import TaskForm from '../components/TaskForm'
import TableHead from '../components/TableHead'
import taskService from '../api/taskApiService'
import { useSelector } from 'react-redux';

function Projects() {
  
    let data = useSelector((state) => state.task.task);
    data=data.filter((item)=>item.tasktype==='Project');
    const keys=[
                "chaptername",
                "title",
                "deadline",
                "chapterno"
            ]; // Static keys for the table
  
  const [addForm,setAddForm]=useState(false);

  const updateData=async(entity)=>{
    //update code
    try {
      await taskService.updateTask(entity);
    } catch (error) {
      console.log("Projects/update/error:",error);
      throw error;
    }
  }

  const deleteTask=async(entity)=>{
    //delete code
    try {
      await taskService.deleteTask(entity);
    } catch (error) {
      console.log("Projects/delete/error:",error);
      throw error;
    }
  }


  return (
    <div className=''>
      {addForm && <TaskForm task={"Project"} content={"Project"}/>}
      <div className="data">
        {addForm && <TableHead title={"Projects"} editFunction={updateData} buttonstate={addForm} buttonFunc={()=>setAddForm((prev)=>!prev)} list={data} keys={keys}/>}
      </div>
    </div>
  )
}

export default Projects