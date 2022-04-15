const { Episode, Anime } = require('../models')

const GetEpisodes = async (req, res) => {
  try {
    const episodes = await Episode.findAll()
    res.send(episodes)
  } catch (error) {
    throw error
  }
}

const CreateEpisode = async (req, res) => {
  try {
    let animeId = parseInt(req.params.anime_id)
    let episodeBody = {
      animeId,
      ...req.body
    }
    let result = await Episode.create(episodeBody)
    res.send(result)
  } catch (error) {
    throw error
  }
}

module.exports = {
  CreateEpisode,
  GetEpisodes
}
