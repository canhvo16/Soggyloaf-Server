const Router = require('express').Router()
const episode = require('../models/episode')
const AnimeRouter = require('./AnimeRouter')
const EpisdoeRouter = require('./EpisodeRouter')
const UserRouter = require('./UserRouter')
const WatchListRouter = require('./WatchListRouter')

Router.use('./anime', AnimeRouter)
Router.use('./episodes', EpisdoeRouter)
Router.use('./watchlist', WatchListRouter)
Router.use('./users', UserRouter)

module.exports = Router
