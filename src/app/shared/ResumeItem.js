import React from 'react'

const ResumeItem = ({role}) => {
  return (
    <div className='resume-item'>
        <h2>{role.title}</h2>
        <div className='resume-item_metadata'>
            <span>{role.subtitle}</span>
            <span>{role.dates}</span>
        </div>
    </div>
  )
}

export default ResumeItem
