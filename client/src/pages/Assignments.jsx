import React, { useState } from 'react'
import TaskForm from '../components/TaskForm'
import useAssignments from '../Data/assignment'
import taskService from '../api/taskApiService'
import TableHead from '../components/TableHead';

function Assignments() {

  const [addForm,setAddForm]=useState(false);


  const deleteAssignment=async(entity)=>{
    //delete code
    try {
      await taskService.deleteTask(entity);
    } catch (error) {
      console.log("Assignments/delete/error:",error);
      throw error;
    }
  }

  const {keys, data}=useAssignments();

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
      {addForm && <TaskForm task={"Assignment"} content={"Assignment"}/>}
      <div className="data">
        <TableHead keys={keys} list={data} title={"Assignments"} delFunction={deleteAssignment} editFunction={editAssignment} buttonstate={addForm} buttonFunc={()=>setAddForm((prev)=>!prev)}/>
      </div>
    </div>
  )
}

export default Assignments