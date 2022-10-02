import React from 'react'
import Stars from '../shared/Stars'

const FunItem = ({project}) => {
  return (
    <div className='fun-item'>
        <h2>{project.title}</h2>
        <div className='fun-item_metadata'>
            <a href={project.url} rel='nofollow'>
                <img src={project.img} />
                <p>
                    {project.description}
                    <strong>{project.link} →</strong>
                </p>
            </a>
        </div>
        <Stars />
    </div>
  )
}

export default FunItem
