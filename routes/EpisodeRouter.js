const Router = require('express').Router()
const controller = require('../controllers/EpisodeController')

Router.get('/', controller.GetEpisodes)

Router.post('/:anime_id', controller.CreateEpisode)

module.exports = Router
