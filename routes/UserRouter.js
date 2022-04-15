const Router = require('express').Router()
const controller = require('../controllers/UserController')

Router.get('/', controller.GetUsers)

Router.get('/watchlist', controller.GetWatchList)

module.exports = Router
