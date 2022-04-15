const Router = require('express').Router()
const AnimeRouter = require('./AnimeRouter')
const EpisodeRouter = require('./EpisodeRouter')
const UserRouter = require('./UserRouter')
const WatchListRouter = require('./WatchListRouter')

Router.use('/anime', AnimeRouter)
Router.use('/episodes', EpisodeRouter)
// Router.use('/watchlist', WatchListRouter)
Router.use('/users', UserRouter)

module.exports = Router
