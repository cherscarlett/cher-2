import React from 'react'
import { useSelector } from 'react-redux'
import Nav from '../shared/Nav'
import ResumeItem from '../shared/ResumeItem'
import Stars from '../shared/Stars'
import { selectResume } from '../services/reducer'

const Resume = () => {
  const { content, resume } = useSelector(selectResume)

  return (
      <>
        <Nav />
        { content ? 
          (<div className='content content_resume'>
            <h1>{content.heading}</h1>
            {resume.map((role, index) => (<ResumeItem role={role} key={index} />))}
            <Stars />
        </div>) : (<>Loading...</>)}
    </>
  )
}

export default Resume
