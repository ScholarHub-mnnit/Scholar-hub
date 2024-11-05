import React from 'react'
import TaskForm from '../components/TaskForm'
import TableHead from '../components/TableHead'
import { assignment } from '../Data/assignment'
import taskService from '../api/taskApiService'

function Assignments() {
  const deleteAssignment=async(entity)=>{
    //delete code
    try {
      await taskService.deleteTask(entity);
    } catch (error) {
      console.log("Assignments/delete/error:",error);
      throw error;
    }
  }

  const editAssignment=async()=>{
    //edit code
    try {
      await taskService.updateTask(entity);
    } catch (error) {
      console.log("Assignments/edit/error:",error);
      throw error;
    }
  }

  return (
    <div className=''>
      <TaskForm task={"Assignment"} content={"Assignment"}/>
      <div className="data">
        <TableHead keys={assignment?.keys} list={assignment?.data} title={"Assignments"} delFunction={deleteAssignment} editFunction={editAssignment}/>
      </div>
    </div>
  )
}

export default Assignments