import React from 'react'
import { useSelector } from 'react-redux'
import Nav from '../shared/Nav'
import Stars from '../shared/Stars'
import HorizontalRule from '../shared/HorizontalRule'
import FunItem from '../shared/FunItem'
import Loader from '../shared/Loader'
import { selectFun } from '../services/reducer'
import { Helmet } from 'react-helmet-async'

const Fun = () => {
  const { content, fun } = useSelector(selectFun)

  return (
      <>
        <Helmet>
          <title>Cher Scarlett - Software Engineer - Fun Stuff</title>
        </Helmet>
        <Nav />
        { content ? 
          (<div className='content content_fun'>
            <h1>{content.heading}</h1>
            { content.paragraphs.map((paragraph, index) => (<p key={index}>{ paragraph }</p>)) }
            <HorizontalRule />
            {fun.map((project, index) => (<FunItem project={project} key={index} />))}
            <Stars />
        </div>) : (<Loader />)}
    </>
  )
}

export default Fun
