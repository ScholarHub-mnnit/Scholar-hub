import React from 'react'
import TaskForm from '../components/TaskForm'
import TableHead from '../components/TableHead'
import { assignment } from '../Data/assignment'

function Assignments() {
  return (
    <div className=''>
      <TaskForm task={"Assignment"} content={"Assignment"}/>
      <div className="data">
        <TableHead keys={assignment?.keys} list={assignment?.data} title={"Assignments"}/>
      </div>
    </div>
  )
}

export default Assignments