import { Router } from 'express'
import SearchController from '../controllers/Search.controller'

const ApiRouter = Router()

ApiRouter.get('/search', SearchController.search)

export default ApiRouter