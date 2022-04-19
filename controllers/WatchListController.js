const { Anime, User, WatchList } = require('../models')

const getWatchListById = async (req, res) => {
  const userId = req.params.id
  const list = await User.findAll({
    include: [
      {
        model: Anime,
        as: 'watch_list',
        through: { attributes: [] }
      }
    ],
    where: { id: userId }
  })
  res.send(list)
}

const addToList = async (req, res) => {
  const userId = req.params.id
  const animeId = req.body.animeId
  console.log(animeId)
  const newListEntity = {
    userId,
    animeId
  }
  const respond = await WatchList.create(newListEntity)
  res.send(respond)
}

const addAnimeToList = async (req, res) => {
  const userId = req.body.userId
  const animeRefId = req.body.animeRefId
  const animeId = await Anime.create({
    animeRefId
  }).then(item => item.id)
  const newListEntity = {
    userId,
    animeId
  }
  console.log(newListEntity)
  const respond = await WatchList.create(newListEntity)
  res.send(respond)
}

module.exports = {
  getWatchListById,
  addToList,
  addAnimeToList
}