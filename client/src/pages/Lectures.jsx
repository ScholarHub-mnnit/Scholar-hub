import React from 'react'
import TaskForm from '../components/TaskForm'
import TableHead from '../components/TableHead'
import taskService from '../api/taskApiService'

function Lectures() {
  const updateData=async(entity)=>{
    //edit error
    try {
      await taskService.updateTask(entity);
    } catch (error) {
      console.log("Lectures/update/error:",error);
      throw error;
    }
  }

  const deleteData=async()=>{
    //delete code
    try {
      await taskService.deleteTask(entity);
    } catch (error) {
      console.log("Lectures/delete/error:",error);
      throw error;
    }
  }

  return (
    <div className=''>
      <TaskForm task={"Lecture"} content={"Lectures"}/>
      <div className="data">
      <div className="data">
        <TableHead title={"Lectures"} delFunction={deleteData} editFunction={updateData}/>
      </div>
      </div>
    </div>
  )
}

export default Lectures