var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var form = document.getElementById("bookForm");

var library = [
  {
    title: "The Road Ahead",
    author: "Bill Gates",
    libraryID: 1254,
  },
  {
    title: "Walter Isaacson",
    author: "Steve Jobs",
    libraryID: 4264,
  },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    libraryID: 3245,
  },
];

btn1.addEventListener("click", function () {
  console.log(library);
});

btn2.addEventListener("click", function () {
  const sort = library.sort((a, b) => b.libraryID - a.libraryID);
  console.log(sort);
});

btn3.addEventListener("click", function () {
  const sort = library.sort((a, b) => a.libraryID - b.libraryID);
  console.log(sort);
});

form.addEventListener("submit", addingBook);

function addingBook() {
  var inp1 = document.getElementById("inp1");
  var inp2 = document.getElementById("inp2");

  var id = random(1, 5000);
  var title = inp1.value;
  var author = inp2.value;

  if (inp1.value === "") {
    alert("Please fill all the field");
  } else if (inp2.value === "") {
    alert("Please fill all the field");
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
  }
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
