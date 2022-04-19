const Router = require('express').Router()
const controller = require('../controllers/WatchListController')

Router.get('/', (req, res) => { res.send('hello') })
Router.get('/:id', controller.getWatchListById)
Router.post('/', controller.addAnimeToList)
Router.post('/:id', controller.addToList)

module.exports = Router