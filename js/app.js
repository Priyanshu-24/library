let addBook = document.getElementById("add-book");
let library = [];
displayBooks();

addBook.addEventListener("click", function (e) {
  let author = document.getElementById("author");
  let title = document.getElementById("title");
  let nop = document.getElementById("nop");

  if (author.value == "" || title.value == "" || nop.value == "")
    alert("Required Input Field is missing");

  else if (nop.value == 0) 
  alert("Number of Pages cannot be: 0");

  else {
    let books = JSON.parse(localStorage.getItem("library"));

    if (books) library = books;

    library.push({ author: author.value, title: title.value, nop: nop.value });
    localStorage.setItem("library", JSON.stringify(library));

    displayBooks();

    author.value = "";
    title.value = "";
    nop.value = "";
  }
})

function displayBooks() {
  let books = JSON.parse(localStorage.getItem("library"));

  if (books !== null) {
    let html = "";

    books.forEach(function (element, index) {
      html += `
        <tr>
          <th>${element.author}</th>
          <th>${element.title}</th>
          <th>${element.nop}</th>
          <th><button id = "${index}" onClick = "deleteBook(this.id)" class = "dlt-btn">Delete</button></th>
          </tr>
        `;
    });

    let a = document.getElementById("library");
    a.innerHTML = html;
  }
}

function deleteBook(index) {
  // console.log("deleting", index);

  let books = JSON.parse(localStorage.getItem("library"));
  books.splice(index, 1);
  localStorage.setItem("library", JSON.stringify(books));
  displayBooks();
}
