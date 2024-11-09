import React, { useState } from 'react'
import TaskForm from '../components/TaskForm'
import useAssignments from '../Data/assignment'
import taskService from '../api/taskApiService'
import TableHead from '../components/TableHead';
import { useDispatch } from 'react-redux';
import { tasks } from '../store/taskSlice'
import YYYYMMDD from '../utility/YYYYMMDD';

function Assignments() {
  const dispatch=useDispatch();
  const [addForm,setAddForm]=useState(false);
  

  const deleteAssignment=async(entity)=>{
    //delete code
    try {
      await taskService.deleteTask(entity);
      dispatch(tasks());
      // use toaster later
    } catch (error) {
      console.log("Assignments/delete/error:",error);
      throw error;
    }
  }

  const {keys, data}=useAssignments();

  const editAssignment=async(entity)=>{
    //edit code
    try {
      let obj={...entity, deadline:YYYYMMDD(entity.deadline)};
      console.log(obj);
      await taskService.updateTask(obj);
      dispatch(tasks());
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