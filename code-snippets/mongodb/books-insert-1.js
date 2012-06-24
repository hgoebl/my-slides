var book1 = {
  title: 'MongoDB: The Definitive Guide',
  authors: [
    { lastName: 'Chodorow', firstName: 'Kristina' },
    { lastName: 'Dirolf', firstName: 'Michael' }
  ],
  tags: ['NoSQL', 'BigData'],
  pages: 195
};

db.books.save(book1);
