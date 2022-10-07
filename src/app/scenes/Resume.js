import React from 'react'
import { useSelector } from 'react-redux'
import Nav from '../shared/Nav'
import ResumeItem from '../shared/ResumeItem'
import Stars from '../shared/Stars'
import Loader from '../shared/Loader'
import { selectResume } from '../services/reducer'
import { Helmet } from 'react-helmet-async'

const Resume = () => {
  const { content, resume } = useSelector(selectResume)

  return (
      <>
        <Helmet>
          <title>Cher Scarlett - Software Engineer - Resume</title>
        </Helmet>
        <Nav />
        { content ? 
          (<div className='content content_resume'>
            <h1>{content.heading}</h1>
            {resume.map((role, index) => (<ResumeItem role={role} key={index} />))}
            <Stars />
        </div>) : (<Loader />)}
    </>
  )
}

export default Resume
