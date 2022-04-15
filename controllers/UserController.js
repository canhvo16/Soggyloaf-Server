const { User, Anime, WatchList } = require('../models')
const anime = require('../models/anime')

const GetUsers = async (req, res) => {
  try {
    const users = await User.findAll()
    res.send(users)
  } catch (error) {
    throw error
  }
}

const GetWatchList = async (req, res) => {
  try {
    const list = await User.findAll({
      include: [
        {
          model: Anime,
          as: 'watch_list',
          through: { attributes: [] }
        }
      ]
    })
    res.send(list)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetUsers,
  GetWatchList
}
