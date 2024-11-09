import React from 'react'
import TaskForm from '../components/TaskForm'
import TableHead from '../components/TableHead'
import taskService from '../api/taskApiService'

function Lectures() {
    let data = useSelector((state) => state.task.task);
    data=data.filter((item)=>item.tasktype==='Lectures');
    const keys=[
                "chaptername",
                "title",
                "deadline",
                "chapterno"
            ]; // Static keys for the table
  
  const [addForm,setAddForm]=useState(false);

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
      {addForm && <TaskForm task={"Lecture"} content={"Lectures"}/>}
      <div className="data">
       {addForm && <TableHead title={"Lectures"} delFunction={deleteData} editFunction={updateData} buttonstate={addForm} buttonFunc={()=>setAddForm((prev)=>!prev)} list={data} keys={keys}/>}
      </div>
    </div>
  )
}

export default Lectures