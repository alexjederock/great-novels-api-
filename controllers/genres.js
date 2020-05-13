const models = require('../models')

const getAllGenres = async (request, response) => {
  const genres = await models.Genres.findAll()

  return genres
    ? response.send(genres)
    : response.sendStatus(404)
}

const getGenreByIdWithNovelsAndAuthor = async (request, response) => {
  const { id } = request.params

  const genre = await models.Genres.findOne({
    where: { id },
    include: [{ model: models.Novels, includes: [{ model: models.Authors }] }]
  })

  return genre
    ? response.send(genre)
    : response.sendStatus(404)
}


module.exports = { getAllGenres, getGenreByIdWithNovelsAndAuthor }
