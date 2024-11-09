import React, { useState } from 'react'
import TaskForm from '../components/TaskForm'
import TableHead from '../components/TableHead'
import taskService from '../api/taskApiService'
import { useDispatch, useSelector } from 'react-redux';
import { tasks } from '../store/taskSlice'


function Lectures() {
    const dispatch=useDispatch();
    let data = useSelector((state) => state.task.task);
    data=data.filter((item)=>item.tasktype==='Lectures');
    const keys=[
                "title",
                "date",
            ]; // Static keys for the table
  
  const [addForm,setAddForm]=useState(false);

  const updateData=async(entity)=>{
    //edit error
    try {
      await taskService.updateTask(entity);
      dispatch(tasks());
    } catch (error) {
      console.log("Lectures/update/error:",error);
      throw error;
    }
  }

  const deleteData=async(entity)=>{
    //delete code
    try {
      await taskService.deleteTask(entity);
      dispatch(tasks());
    } catch (error) {
      console.log("Lectures/delete/error:",error);
      throw error;
    }
  }

  return (
    <div className=''>
      {addForm && <TaskForm task={"Lecture"} content={"Lectures"}/>}
      <div className="data">
        <TableHead title={"Lectures"} delFunction={deleteData} editFunction={updateData} buttonstate={addForm} buttonFunc={()=>setAddForm((prev)=>!prev)} list={data} keys={keys}/>
      </div>
    </div>
  )
}

export default Lectures