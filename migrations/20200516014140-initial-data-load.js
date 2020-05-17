module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('authors', [
      { nameFirst: 'Bram', nameLast: 'Stoker' },
      { nameFirst: 'Oscar', nameLast: 'Wilde' },
      { nameFirst: 'Alice', nameLast: 'Walker' },
      { nameFirst: 'Leo', nameLast: 'Tolstoy' },
      { nameFirst: 'Charles', nameLast: 'Dickens' },
      { nameFirst: 'Arthur', nameLast: 'Miller' },
      { nameFirst: 'Alexandre', nameLast: 'Dumas' },
      { nameFirst: 'Arthur Conan', nameLast: 'Doyle' },
      { nameFirst: 'Robert Louis', nameLast: 'Stevenson' },
      { nameFirst: 'Fyodor', nameLast: 'Dostoyevsky' },
      { nameFirst: 'Agatha', nameLast: 'Christie' },
      { nameFirst: 'Ray', nameLast: 'Bradbury' },
      { nameFirst: 'George', nameLast: 'Orwell' },
      { nameFirst: 'H.G.', nameLast: 'Wells' },
      { nameFirst: 'Chinua', nameLast: 'Achebe' }
    ])

    await queryInterface.bulkInsert('genres', [
      { name: 'Fiction' },
      { name: 'Horror' },
      { name: 'Fantasy' },
      { name: 'Gothic' },
      { name: 'Historical Fiction' },
      { name: 'War' },
      { name: 'Russian Literature' },
      { name: 'Drama' },
      { name: 'Plays' },
      { name: 'Adventure' },
      { name: 'French Literature' },
      { name: 'Mystery' },
      { name: 'Crime' },
      { name: 'Thriller' },
      { name: 'Science Fiction' },
      { name: 'Dystopia' },
      { name: 'Time Travel' },
      { name: 'African Literature' }
    ])

    await queryInterface.bulkInsert('novels', [
      { title: 'Dracula', authorId: 1 },
      { title: 'The Picture of Dorian Gray', authorId: 2 },
      { title: 'The Color Purple', authorId: 3 },
      { title: 'War and Peace', authorId: 4 },
      { title: 'A Tale of Two Cities', authorId: 5 },
      { title: 'The Crucible', authorId: 6 },
      { title: 'The Three Musketeers', authorId: 7 },
      { title: 'The Hound of the Baskervilles', authorId: 8 },
      { title: 'The Strange Case of Dr. Jekyll and Mr. Hyde', authorId: 9 },
      { title: 'Crime and Punishment', authorId: 10 },
      { title: 'Murder on the Orient Express', authorId: 11 },
      { title: 'Fahrenheit 451', authorId: 12 },
      { title: 'Animal Farm', authorId: 13 },
      { title: 'The Time Machine', authorId: 14 },
      { title: 'Things Fall Apart', authorId: 15 }

    ])

    return queryInterface.bulkInsert('novelsGenres', [
      { genreId: 1, novelId: 1 },
      { genreId: 2, novelId: 1 },
      { genreId: 3, novelId: 1 },
      { genreId: 1, novelId: 2 },
      { genreId: 2, novelId: 2 },
      { genreId: 4, novelId: 2 },
      { genreId: 3, novelId: 2 },
      { genreId: 1, novelId: 3 },
      { genreId: 5, novelId: 3 },
      { genreId: 1, novelId: 4 },
      { genreId: 5, novelId: 4 },
      { genreId: 6, novelId: 4 },
      { genreId: 7, novelId: 4 },
      { genreId: 1, novelId: 5 },
      { genreId: 5, novelId: 5 },
      { genreId: 1, novelId: 6 },
      { genreId: 5, novelId: 6 },
      { genreId: 8, novelId: 6 },
      { genreId: 9, novelId: 6 },
      { genreId: 1, novelId: 7 },
      { genreId: 5, novelId: 7 },
      { genreId: 10, novelId: 7 },
      { genreId: 11, novelId: 7 },
      { genreId: 1, novelId: 8 },
      { genreId: 12, novelId: 8 },
      { genreId: 13, novelId: 8 },
      { genreId: 14, novelId: 8 },
      { genreId: 1, novelId: 9 },
      { genreId: 12, novelId: 9 },
      { genreId: 15, novelId: 9 },
      { genreId: 2, novelId: 9 },
      { genreId: 1, novelId: 10 },
      { genreId: 7, novelId: 10 },
      { genreId: 12, novelId: 10 },
      { genreId: 1, novelId: 11 },
      { genreId: 12, novelId: 11 },
      { genreId: 1, novelId: 12 },
      { genreId: 15, novelId: 12 },
      { genreId: 16, novelId: 12 },
      { genreId: 1, novelId: 13 },
      { genreId: 15, novelId: 13 },
      { genreId: 16, novelId: 13 },
      { genreId: 1, novelId: 14 },
      { genreId: 15, novelId: 14 },
      { genreId: 17, novelId: 14 },
      { genreId: 1, novelId: 15 },
      { genreId: 5, novelId: 15 },
      { genreId: 18, novelId: 15 }
    ])
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('novelsGenres')

    await queryInterface.bulkDelete('novels')

    await queryInterface.bulkDelete('genres')

    return queryInterface.bulkDelete('authors')
  }
}
