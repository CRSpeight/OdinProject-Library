let showNewBook = false;
const container = document.querySelector("#container");
let myLibrary = [];

function Book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

Book.prototype.toggleRead = function () {
  this.read = !this.read;
  render();
};

function addBookToLibrary(author, title, pages, read) {
  let book = new Book(author, title, pages, read);
  myLibrary.push(book);
}

function render() {
  container.innerHTML = "";
  myLibrary.forEach(function (e, i) {
    const div = document.createElement("div");
    div.classList.add("bookCard");
    const title = document.createElement("h3");
    const author = document.createElement("p");
    const pages = document.createElement("p");
    const read = document.createElement("p");
    const deleteBtn = document.createElement("button");
    title.textContent = e.title;
    author.textContent = "By " + e.author;
    pages.textContent = "Pages: " + e.pages;
    if (e.read) {
      read.textContent = "Read";
    } else {
      read.textContent = "Unread";
    }
    deleteBtn.textContent = "X";
    deleteBtn.dataset.index = i;
    deleteBtn.classList.add("deleteBtn");

    div.appendChild(title);
    div.appendChild(author);
    div.appendChild(pages);
    div.appendChild(read);
    div.appendChild(deleteBtn);
    container.appendChild(div);
  });

  const div = document.createElement("div");
  div.classList.add("bookCard", "newBookCard");
  const newButton = document.createElement("button");
  newButton.textContent = "New Book";
  newButton.classList.add("newBtn");
  div.appendChild(newButton);
  container.appendChild(div);
  newButton.onclick = () => renderForm();
  showNewBook = false;

  const deleteButtons = document.querySelectorAll(".deleteBtn");
  deleteButtons.forEach((b) => {
    b.addEventListener("click", () => {
      myLibrary.splice(b.getAttribute("data-index"), 1);
      render();
    });
  });
}

function renderForm() {
  const formContent = `<form id="form" class="form">
    <table>
      <tr>
        <td>Title</td>
        <td><input type="text" name="title" required></td>
      </tr>
      <tr>
        <td>Author</td>
        <td><input type="text" name="author" required></td>
      </tr>
      <tr>
        <td>Pages</td>
        <td><input type="number" name="pages" required></td>
      </tr>
      <tr>
        <td>Read?</td>
        <td><input type="checkbox" name="read"></td>
      </tr>
      <tr>
      <td><button type="submit">Submit</button></td>
      <td><button onclick="render()">Cancel</button></td>
    </tr>
    </table>
  </form>`;

  if (showNewBook) {
    render();
  } else {
    let newBookDiv = document.querySelector(".newBookCard");
    newBookDiv.innerHTML = formContent;
    const form = document.querySelector("#form");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      addBookToLibrary(
        this.form.author.value,
        this.form.title.value,
        this.form.pages.value,
        this.form.read.checked
      );
      render();
    });
  }
  showNewBook = !showNewBook;
}

addBookToLibrary("John Henry", "Hiroshima", 150, false);
addBookToLibrary("Crichton", "The Lost World", 200, true);
addBookToLibrary("Brandon Sanderson", "The Way of Kings", 352, false);

render();
