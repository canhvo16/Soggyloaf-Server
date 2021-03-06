const Router = require('express').Router()
const controller = require('../controllers/WatchListController')

Router.get('/', (req, res) => { res.send('hello') })
Router.get('/:id', controller.getWatchListById)
Router.post('/', controller.addAnimeToList)
Router.post('/:id', controller.addToList)
Router.delete('/:userId/:animeId', controller.removeAnimeFromList)

module.exports = Router