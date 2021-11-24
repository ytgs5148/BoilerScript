import { Router } from 'express'

const homeRouter = Router()

homeRouter.get('', async (req, res) => {
    res.send('Hello World')
})

export default homeRouter
