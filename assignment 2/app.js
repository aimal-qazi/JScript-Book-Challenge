function toShow(FormId) {
  var tabs = document.querySelectorAll(".hid");
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].style.display = "none";
  }
  var selectTab = document.getElementById(FormId);
  selectTab.style.display = "block";
}

var form = document.getElementById("bookForm");

var library = [];

form.addEventListener("submit", addingBook);

function addingBook(event) {
  event.preventDefault();
  var inp1 = document.getElementById("inp1");
  var inp2 = document.getElementById("inp2");

  var id = random(1, 5000);
  var title = inp1.value;
  var author = inp2.value;

  if (inp1.value === "") {
    alert("Please fill all the fields");
  } else if (inp2.value === "") {
    alert("Please fill all the fields");
  } else {
    var book = {
      title: title,
      author: author,
      libraryID: id,
    };

    library.push(book);

    inp1.value = "";
    inp2.value = "";

    console.log("Book added:", book);

    var tableBody = document.getElementById("getTable");

    var row = document.createElement("tr");
    var idCell = document.createElement("td");
    idCell.textContent = book.libraryID;
    var titleCell = document.createElement("td");
    titleCell.textContent = book.title;
    var authorCell = document.createElement("td");
    authorCell.textContent = book.author;

    row.appendChild(idCell);
    row.appendChild(titleCell);
    row.appendChild(authorCell);

    tableBody.appendChild(row);

    alert(title + " is Successfully Added");
  }
}
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const sortBtn1 = document.getElementById("sort1");

sortBtn1.addEventListener("click", function () {
  library.sort((a, b) => a.libraryID - b.libraryID);
  displayBooks1(library);
});

function displayBooks1(books) {
  var tableBody = document.getElementById("getTable");
  tableBody.innerHTML = "";
  for (var i = 0; i < books.length; i++) {
    var row = document.createElement("tr");
    var idCell = document.createElement("td");
    idCell.textContent = books[i].libraryID;
    var titleCell = document.createElement("td");
    titleCell.textContent = books[i].title;
    var authorCell = document.createElement("td");
    authorCell.textContent = books[i].author;
    row.appendChild(idCell);
    row.appendChild(titleCell);
    row.appendChild(authorCell);
    tableBody.appendChild(row);
  }
}

const sortBtn2 = document.getElementById("sort2");

sortBtn2.addEventListener("click", function () {
  library.sort((a, b) => b.libraryID - a.libraryID);
  displayBooks2(library);
});

function displayBooks2(books) {
  var tableBody = document.getElementById("getTable");
  tableBody.innerHTML = "";
  for (var i = 0; i < books.length; i++) {
    var row = document.createElement("tr");
    var idCell = document.createElement("td");
    idCell.textContent = books[i].libraryID;
    var titleCell = document.createElement("td");
    titleCell.textContent = books[i].title;
    var authorCell = document.createElement("td");
    authorCell.textContent = books[i].author;
    row.appendChild(idCell);
    row.appendChild(titleCell);
    row.appendChild(authorCell);
    tableBody.appendChild(row);
  }
}
