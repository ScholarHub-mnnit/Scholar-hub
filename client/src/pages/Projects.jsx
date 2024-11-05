import React from 'react'
import TaskForm from '../components/TaskForm'
import TableHead from '../components/TableHead'
import taskService from '../api/taskApiService'

function Projects() {
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
      <TaskForm task={"Project"} content={"Project"}/>
      <div className="data">
        <TableHead title={"Projects"} editFunction={updateData}/>
      </div>
    </div>
  )
}

export default Projects