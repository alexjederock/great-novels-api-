const models = require('../models')

const getAllAuthors = async (request, response) => {
  const authors = await models.Authors.findAll()

  return authors
    ? response.send(authors)
    : response.sendStatus(404)
}

const getAuthorByIdWithNovelsAndGenres = async (request, response) => {
  const { id } = request.params

  const author = await models.Authors.findOne({
    where: { id },
    include: [{ model: models.Novels, includes: [{ model: models.Genres }] }]
  })

  return author
    ? response.send(author)
    : response.sendStatus(404)
}


module.exports = { getAllAuthors, getAuthorByIdWithNovelsAndGenres }
