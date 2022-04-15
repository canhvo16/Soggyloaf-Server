const { Anime, Episode } = require('../models')

const GetAnime = async (req, res) => {
  try {
    const anime = await Anime.findAll()
    res.send(anime)
  } catch (error) {
    throw error
  }
}

const CreateAnime = async (req, res) => {
  try {
    let animeBody = req.body
    let result = await Anime.create(animeBody)
    res.send(result)
  } catch (error) {
    throw error
  }
}

const GetAnimeEpisodes = async (req, res) => {
  try {
    let result = await Anime.findByPk(req.params.anime_id, {
      include: Episode
    })
    res.send(result)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAnime,
  CreateAnime,
  GetAnimeEpisodes
}
