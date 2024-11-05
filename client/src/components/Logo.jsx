import React from 'react'

function Logo({className,...props}) {
  return (
    <div>
        <div className={`logo ${className} font-black text-2xl text-white`} {...props}>ScholarHub</div>
    </div>
  )
}

export default Logo