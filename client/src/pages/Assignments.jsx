import React from 'react'
import TaskForm from '../components/TaskForm'
import TableHead from '../components/TableHead'
import { assignment } from '../Data/assignment'
import taskApiService from '../api/taskApiService'

function Assignments() {
  const deleteAssignment=async()=>{
    //delete code
  }

  const editAssignment=async()=>{
    //edit code
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