import sendgrid from '@sendgrid/mail'
import Cors from 'cors'
import siteMetadata from '@/data/siteMetadata'

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

async function sendEmail(req, res) {
  sendgrid.setApiKey(process.env.SENDGRID_API_KEY)
  try {
    // Run cors middleware
    await cors(req, res)
    // send request
    await sendgrid.send({
      to: 'jakez0626@gmail.com', // Your email where you'll receive emails
      from: 'monkeycoding.wtrflwrs@gmail.com', // your website email address here
      subject: `[Contact from Monkey Coding] : ${req.body.subject}`,
      html: `
      <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="en">
        <head>
          <meta charset="utf-8">
          <title>Incoming Message</title>
          <meta name="description" content="Message from MonkeyCoding">
          <meta name="author" content="SitePoint">
          <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
          <link rel="stylesheet" href="css/styles.css?v=1.0">
        </head>

        <body>
          <div class="container" style="margin-left: 20px;margin-right: 20px;">
            <h3>New message from ${req.body.fullname}!</h3>
            <table>
              <tr>
                <th>Name</th>
                <td>${req.body.fullname}</td>
              </tr>
              <tr>
                <th>Email</th>
                <td>${req.body.email}</td>
              </tr>
              <tr>
                <th>Subject</th>
                <td>${req.body.subject}</td>
              </tr>
              <tr>
                <th>Message</th>
                <td><textarea name="message">${req.body.message}</textarea></td>
              </tr>
            </table>
          </div>
        </body>
      </html>`,
    })
  } catch (error) {
    console.log(error)
    return res.status(error.statusCode || 500).json({ error: error.message })
  }

  return res.status(200).json({ error: '' })
}

export default sendEmail
