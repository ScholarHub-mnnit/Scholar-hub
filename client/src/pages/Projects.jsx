import React from 'react'
import TaskForm from '../components/TaskForm'
import TableHead from '../components/TableHead'

function Projects() {
  return (
    <div className=''>
      <TaskForm task={"Project"} content={"Project"}/>
      <div className="data">
        <TableHead title={"Projects"}/>
      </div>
    </div>
  )
}

export default Projects