import Cors from 'cors'
import siteMetadata from '@/data/siteMetadata'
import axios from 'axios'

// Helper function to initialize middleware
function initMiddleware(middleware) {
  return (req, res) =>
    new Promise((resolve, reject) => {
      middleware(req, res, (result) => {
        if (result instanceof Error) {
          return reject(result)
        }

        return resolve(result)
      })
    })
}

// Initialize the cors middleware
export const cors = initMiddleware(
  Cors({
    methods: ['POST'],
    origin: [
      'http://localhost:3000',
      'http://localhost:5173',
      'https://jaked0626.github.io',
      siteMetadata.siteUrl,
    ], //TODO: replace * with deployed url
  })
)

async function sendLineMessage(req, res) {
  await cors(req, res)
  const reqEndpoint = 'https://api.line.me/v2/bot/message/push'
  const token = process.env.LINE_TOKEN
  const uid = process.env.JAKE_LINE_UID
  const message = `MESSAGE FROM JAKE BIZ CARD || MONKEY CODING BLOG:

Sender Name: ${req.body.fullname}
Sender Email: ${req.body.email}
Subject: \n${req.body.subject}
Message: \n${req.body.message}`

  const data = {
    to: uid,
    messages: [
      {
        type: 'text',
        text: message,
      },
    ],
  }

  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  }

  axios
    .post(reqEndpoint, data, { headers })
    .then((response) => {
      console.log('Success:', response.data)
      return res.status(200).json({
        data: response.data,
      })
    })
    .catch((error) => {
      return res.status(500).json({
        error: error.response ? error.response.data : error.message,
      })
    })
  return
}

export default sendLineMessage
