import React, { useState } from 'react'
import TaskForm from '../components/TaskForm'
import TableHead from '../components/TableHead'
import taskService from '../api/taskApiService'
import { useDispatch, useSelector } from 'react-redux';
import { tasks } from '../store/taskSlice';


function Projects() {
    const dispatch=useDispatch();
    let data = useSelector((state) => state.task.task);
    data=data.filter((item)=>item.tasktype==='Project');
    const keys=[
                // "chaptername",
                "title",
                "deadline",
            ]; // Static keys for the table
  
  const [addForm,setAddForm]=useState(false);

  const updateData=async(entity)=>{
    //update code
    try {
      let obj={...entity, deadline:YYYYMMDD(entity.deadline)};
      console.log(obj);
      await taskService.updateTask(obj);
    } catch (error) {
      console.log("Projects/update/error:",error);
      throw error;
    }
  }

  const deleteTask=async(entity)=>{
    //delete code
    try {
      await taskService.deleteTask(entity);
      dispatch(tasks());
    } catch (error) {
      console.log("Projects/delete/error:",error);
      throw error;
    }
  }


  return (
    <div className=''>
      {addForm && <TaskForm task={"Project"} content={"Project"}/>}
      <div className="data">
         <TableHead title={"Projects"} editFunction={updateData} buttonstate={addForm} buttonFunc={()=>setAddForm((prev)=>!prev)} list={data} keys={keys} delFunction={deleteTask}/>
      </div>
    </div>
  )
}

export default Projects