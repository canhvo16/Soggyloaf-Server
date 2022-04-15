const Router = require('express').Router()
const controller = require('../controllers/AnimeControllers')

Router.get('/', controller.GetAnime)

Router.post('/new', controller.CreateAnime)

Router.get('/:anime_id', controller.GetAnimeEpisodes)

module.exports = Router
