let addBook = document.getElementById("add-book");
let library = [];
displayBooks();

addBook.addEventListener("click", function (e) {
  let author = document.getElementById("author");
  let title = document.getElementById("title");
  let nop = document.getElementById("nop");

  if(author.value == "" || title.value == "" || nop.value == "")
  alert("Required Input Field is missing");

  else if(nop.value == 0)
  alert("Number of Pages cannot be: 0");

  else{

    library.push({ author: author.value, title: title.value, nop: nop.value });
    localStorage.setItem("library", JSON.stringify(library));

    displayBooks();

    author.value = "";
    title.value = "";
    nop.value = "";
  }

});

function displayBooks() {
  let books = JSON.parse(localStorage.getItem("library"));

  if(books !== null)
  {


  let html = "";

  books.forEach(function (element, index) {
    html += `

        <div class = "card">
             <div>${element.author}</div>
             <div>${element.title}</div>
            <div>${element.nop}</div>
            <button id = "${index}" onClick = "deleteBook(this.id)">Delete</button>
        </div>
 
        `;
  });

  let a = document.getElementById("library");
  a.innerHTML = html;
}

}

function deleteBook(index){
    console.log("deleting", index);

    let books = JSON.parse(localStorage.getItem("library"));
    books.splice(index,1);
    localStorage.setItem("library", JSON.stringify(books));
    displayBooks();

}
