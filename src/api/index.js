import Router from 'koa-router'
import compose from 'koa-compose'
import mount from 'koa-mount'
import axios from 'axios'
import TRACK_IDS from './tracks'
import content from './content'
import work from './work'

const router = new Router()

const SPOTIFY_BASE_URL = 'https://api.spotify.com/v1/'
const {SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET} = process.env

router.get('/home', async (ctx) => {
  const response = await axios({
    method: 'post',
    url: 'https://accounts.spotify.com/api/token',
    params: {
      grant_type: 'client_credentials',
    },
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + (Buffer.from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString('base64'))
    }
  })

  const {access_token} = response.data

  const {data: tracks} = await axios.get(`${SPOTIFY_BASE_URL}tracks?ids=${TRACK_IDS.join(',')}`, {
    headers: {
      withCredentials: true,
      Authorization: `Bearer ${access_token}`
  }})

  ctx.body = {
    content: content.home,
    tracks: tracks.tracks,
  }
})

router.get('/resume', (ctx) => {

  ctx.body = {
    content: content.resume,
    resume: work,
  }
})

const middleware = compose([
  router.allowedMethods(),
  router.routes(),
])

// this would make all routes have `/api` in front of them (e.g. /api/home)
export default mount('/api', middleware)
