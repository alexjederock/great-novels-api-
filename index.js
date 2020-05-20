const { getAllAuthors, getAuthorByIdOrLastNameWithNovelsAndGenres } = require('./controllers/authors')
const { getAllGenres, getGenreByIdWithNovelsAndAuthor } = require('./controllers/genres')
const { getAllNovelsWithAuthorAndGenres, getNovelByIdOrTitleWithAuthorAndGenres } = require('./controllers/novels')
const express = require('express')
const app = express()

app.get('/authors', getAllAuthors)

app.get('/authors/:find', getAuthorByIdOrLastNameWithNovelsAndGenres)

app.get('/genres', getAllGenres)

app.get('/genres/:id', getGenreByIdWithNovelsAndAuthor)

app.get('/novels', getAllNovelsWithAuthorAndGenres)

app.get('/novels/:find', getNovelByIdOrTitleWithAuthorAndGenres)

app.all('*', (request, response) => response.sendStatus(404))

app.listen(1337, () => {
  console.log('Listening on port 1337...')
})
