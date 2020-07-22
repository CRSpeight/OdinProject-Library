const container = document.querySelector("#container");
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
}

addBookToLibrary("John Henry", "Hiroshima", 150, false);
addBookToLibrary("Crichton", "The Lost World", 200, true);
addBookToLibrary("Brandon Sanderson", "The Way of Kings", 352, false);

render();
