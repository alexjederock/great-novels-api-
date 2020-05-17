const { getAllAuthors, getAuthorByIdWithNovelsAndGenres } = require('./controllers/authors')
const { getAllGenres, getGenreByIdWithNovelsAndAuthor } = require('./controllers/genres')
const { getAllNovelsWithAuthorAndGenres, getNovelByIdWithAuthorAndGenres } = require('./controllers/novels')
const express = require('express')
const app = express()

app.get('/authors', getAllAuthors)

app.get('/authors/:find', getAuthorByIdWithNovelsAndGenres)

app.get('/genres', getAllGenres)

app.get('/genres/:id', getGenreByIdWithNovelsAndAuthor)

app.get('/novels', getAllNovelsWithAuthorAndGenres)

app.get('/novels/:find', getNovelByIdWithAuthorAndGenres)

app.all('*', (request, response) => response.sendStatus(404))

app.listen(1337, () => {
  console.log('Listening on port 1337...')
})
