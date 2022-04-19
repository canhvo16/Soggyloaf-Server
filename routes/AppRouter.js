const Router = require('express').Router()
const AnimeRouter = require('./AnimeRouter')
const EpisodeRouter = require('./EpisodeRouter')
const UserRouter = require('./UserRouter')
const WatchListRouter = require('./WatchListRouter')
const AuthRouter = require('./AuthRouter')

Router.use('/anime', AnimeRouter)
Router.use('/episodes', EpisodeRouter)
// Router.use('/watchlist', WatchListRouter)
Router.use('/users', UserRouter)
Router.use('/auth', AuthRouter)
Router.use('/watchlist', WatchListRouter)

module.exports = Router
