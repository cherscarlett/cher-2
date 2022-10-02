import React from 'react'
import { useSelector } from 'react-redux'
import Nav from '../shared/Nav'
import Track from '../shared/Track'
import Stars from '../shared/Stars'
import HorizontalRule from '../shared/HorizontalRule'
import { selectHome } from '../services/reducer'
import { Helmet } from 'react-helmet-async'

const Home = () => {
  const { content, tracks } = useSelector(selectHome)

  return (
    <>
      <Helmet>
        <title>cher.dev</title>
      </Helmet>
      <Nav />
      {content ? (
        <div className='content content__home'>
          <h1>{ content.heading }</h1>
          <div>
            { content.paragraphs.map((paragraph, index) => (<p key={index}>{ paragraph }</p>)) }
            <p>
              Follow me on&nbsp;
              <a className='twitter social_link' href="https://twitter.com/cherthedev">Twitter</a>
              &nbsp;or&nbsp;
              <a className='github social_link' href="https://github.com/cherscarlett">Github</a>.
              Reach me at&nbsp;
              <a className='social_link' href="mailto:hello@cher.dev">hello@cher.dev</a>.
            </p>
          </div>
          <HorizontalRule />
          <h2>{ content.subHeading }</h2>
          <div className='tracks'>
            { tracks.map(track => (<Track key={track.id} track={track} />)) || 'Loading tracks...'}
          </div>
          <Stars />
        </div>) : (<>Loading...</>) }
    </>
  )
}

export default Home
