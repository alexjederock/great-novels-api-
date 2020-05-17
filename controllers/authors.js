const models = require('../models')

const getAllAuthors = async (request, response) => {
  const authors = await models.Authors.findAll()

  return authors
    ? response.send(authors)
    : response.sendStatus(404)
}

const getAuthorByIdWithNovelsAndGenres = async (request, response) => {
  const { find } = request.params

  const author = await models.Authors.findOne({
    where: {
      [models.Op.or]: [
        { nameLast: { [models.Op.like]: `%${find}%` } },
        { id: find }
      ]
    },
    include: [{ model: models.Novels, include: [{ model: models.Genres }] }]
  })

  return author
    ? response.send(author)
    : response.sendStatus(404)
}


module.exports = { getAllAuthors, getAuthorByIdWithNovelsAndGenres }
