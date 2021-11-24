// Libraries
import express from 'express'
import cors from 'cors' // Cross-Origin Resource Sharing, you might not need it most of the time
import config from './config.js'

// Routers
import homeRouter from './routes/homeRouter.js'
import { validateReq } from './middlewares/validateReq.js'

const app = express()
const port = config.PORT || 5000

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors()) // This allows cross origin requests, and you might need this if requests are coming from a different domain
app.use(validateReq()) // This is a demonstration of a test middleware, check middlewares folder for more info

// Routes
app.use('/', homeRouter)

// Listening to port
app.listen(port, () => console.log(`Listening to port ${port}`))
