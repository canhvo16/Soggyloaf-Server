const Router = require('express').Router()
const AnimeRouter = require('./AnimeRouter')
const EpisdoeRouter = require('./EpisodeRouter')
const UserRouter = require('./UserRouter')
const WatchListRouter = require('./WatchListRouter')
const AuthRouter = require('./AuthRouter')

// Router.use('./anime', AnimeRouter)
// Router.use('./episodes', EpisdoeRouter)
// Router.use('./watchlist', WatchListRouter)
Router.use('/users', UserRouter)
Router.use('/auth', AuthRouter)

module.exports = Router
