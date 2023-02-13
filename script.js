const bookForm = document.querySelector('.bookForm');
const title = document.querySelector('.title');
const author = document.querySelector('.author');
const bookCard = document.querySelector('.bookCards');
const addBookBtn = document.querySelector('.addBookBtn');

const booksArray = JSON.parse(localStorage.getItem('books')) || [];
console.log(booksArray);

const addBook = (title, author) => {
  booksArray.push({
    title,
    author,
  });

  localStorage.setItem('books', JSON.stringify(booksArray));

  console.log(booksArray);

  return { title, author };
};

const createBookArticle = ({ title, author }) => {
  const bookArticle = document.createElement('article');
  const bookTitle = document.createElement('h2');
  const bookAuthor = document.createElement('h3');
  const removeBookBtn = document.createElement('button');
  const borderBottom = document.createElement('hr');

  bookTitle.innerText = title;
  bookAuthor.innerText = author;
  removeBookBtn.innerText = 'Remove';

  bookArticle.append(bookTitle, bookAuthor, removeBookBtn, borderBottom);
  bookCard.appendChild(bookArticle);
};

booksArray.forEach(createBookArticle);

addBookBtn.addEventListener('click', (event) => {
  event.preventDefault();

  const newBook = addBook(title.value, author.value);
  console.log(newBook);

  createBookArticle(newBook);

  title.value = '';
  author.value = '';
});

// for (let i = 0; i < booksArray.length; i += 1) {
//   const fetch = document.querySelector('.bookCards').innerHTML;
//   bookCard.innerHTML = `
//  <article class="book">
//  <h2 class="bookTitle">${booksArray[i].title}</h2>
//  <h3 class="authorName">${booksArray[i].author}</h3>
//  <button class="removeBtn" type="button">Remove</button>
//  <hr class="borderBottom" />
//  </article> ${fetch}
//  `;
// }
