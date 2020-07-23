let showNewBook = false;
const container = document.querySelector("#container");
let newBookBtn = document.querySelector(".newBookCard");
let myLibrary = [];

function Book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(author, title, pages, read) {
  let book = new Book(author, title, pages, read);
  myLibrary.push(book);
}

function render() {
  container.innerHTML = "";
  myLibrary.forEach(function (e) {
    const div = document.createElement("div");
    div.classList.add("bookCard");
    const title = document.createElement("h3");
    const author = document.createElement("p");
    const pages = document.createElement("p");
    const read = document.createElement("p");
    title.textContent = e.title;
    author.textContent = "By " + e.author;
    pages.textContent = "Pages: " + e.pages;
    if (e.read) {
      read.textContent = "Read";
    } else {
      read.textContent = "Unread";
    }
    div.appendChild(title);
    div.appendChild(author);
    div.appendChild(pages);
    div.appendChild(read);
    container.appendChild(div);
  });

  const div = document.createElement("div");
  div.classList.add("bookCard", "newBookCard");
  const title = document.createElement("h3");
  title.textContent = "New Book";
  div.appendChild(title);
  container.appendChild(div);

  newBookBtn = document.querySelector(".newBookCard");
  newBookBtn.onclick = () => renderForm();
}

function renderForm() {
  const formContent = `<div id="form">
    <table>
      <tr>
        <td>Title</td>
        <td>Title Input</td>
      </tr>
      <tr>
        <td>Author</td>
        <td>Author Input</td>
      </tr>
      <tr>
        <td>Pages</td>
        <td>Pages Input</td>
      </tr>
      <tr>
        <td>Read?</td>
        <td>Read Toggle</td>
      </tr>
    </table>
  </div>`;
  const form = document.querySelector("#form");
  if (showNewBook) {
    render();
  } else {
    newBookBtn.innerHTML = formContent;
  }
  showNewBook = !showNewBook;
}

addBookToLibrary("John Henry", "Hiroshima", 150, false);
addBookToLibrary("Crichton", "The Lost World", 200, true);
addBookToLibrary("Brandon Sanderson", "The Way of Kings", 352, false);

render();
