import React from 'react'
import TaskForm from '../components/TaskForm'
import TableHead from '../components/TableHead'

function Lectures() {
  return (
    <div className=''>
      <TaskForm task={"Lecture"} content={"Lectures"}/>
      <div className="data">
      <div className="data">
        <TableHead title={"Lectures"}/>
      </div>
      </div>
    </div>
  )
}

export default Lectures