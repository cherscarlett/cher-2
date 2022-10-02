import React from 'react'
import Stars from '../shared/Stars'

const Tracks = ({track}) => {
  const {name, id} = track
  const artists = track.artists.map(artist => artist.name).join(', ')
  const image = track.album.images[0]

  return (
    <div className='track'>
        <a href={`https://open.spotify.com/track/${id}`}>
            <img src={image.url} width='100%' />
            <div className='track_metadata'>
                <span>{ artists }</span>
                <span>{ name }</span>
            </div>
       </a>
       <Stars />
    </div>
  )
}

export default Tracks
