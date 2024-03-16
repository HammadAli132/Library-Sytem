const year = document.getElementById("year");
year.innerText = new Date().getFullYear();
const signIn = document.getElementById("sign-in");
const logOut = document.getElementById("log-out");
const signInPage = document.querySelector(".sign-in-form");
const loginForm = document.getElementById("login-form");
const userName = document.getElementById("user-name");
const userEmail = document.getElementById("user-email");
const userPhNo = document.getElementById("user-phNo");
const profileCancelBtn = document.querySelector(".signin-cancel");
const bookLibrary = document.querySelector(".container");

signIn.addEventListener('click', () => {
    signInPage.classList.add("display-form");
});
logOut.addEventListener('click', () => {
    userName.innerText = "-";
    userEmail.innerText = "-";
    userPhNo.innerText = "-";
});

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const fName = document.getElementById("f-name").value;
    const lName = document.getElementById("l-name").value;
    const email = document.getElementById("email").value;
    const phNumber = document.getElementById("phNo").value;
    userName.innerText = `${fName} ${lName}`;
    userEmail.innerText = email;
    userPhNo.innerText = phNumber;
    signInPage.classList.remove("display-form");
});

const bookForm = document.getElementById("book-form");
const bookCancelBtn = document.querySelector(".book-cancel");
const addBookBtn = document.getElementById("add-book-card");
const addBookPage = document.querySelector(".book-form-bg");
const myLibrary = [];
function Book(name, author, pages, status) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

function addBookToLibrary(book) {
    const bookCard = document.createElement("div");
    bookCard.setAttribute("class", "book-card");
    bookCard.innerHTML = `<div class="card-image"></div>
    <div class="separator"></div>
    <div class="book-details">
        <div class="book-n">
            <span class="BH">Name: </span>
            <span class="user-BN" id="BN"></span>
        </div>
        <div class="book-a">
            <span class="BH">Author: </span>
            <span class="user-BA" id="BA"></span>
        </div>
        <div class="book-p">
            <span class="BH">Pages: </span>
            <span class="user-BP" id="BP"></span>
        </div>
        <div class="book-s">
            <span class="BH">Status: </span>
            <span class="user-BS" id="BS"></span>
        </div>
    </div>`;
    bookCard.querySelector("#BN").innerText = book.name;
    bookCard.querySelector("#BA").innerText = book.author;
    bookCard.querySelector("#BP").innerText = book.pages;
    bookCard.querySelector("#BS").innerText = book.status;
    bookLibrary.appendChild(bookCard);
}

addBookBtn.addEventListener('click', () => {
    addBookPage.classList.add("display-form");
});

bookForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const bName = document.getElementById("b-name").value;
    const bAuthor = document.getElementById("b-author").value;
    const bPages = document.getElementById("b-pages").value;
    const bStatus = document.getElementsByName("status");
    let status = "";
    bStatus.forEach(stat => {
        if (stat.checked === true) {
            status = stat.id;
            return;
        }
    });
    status = status[0].toUpperCase() + status.slice(1);
    let book = new Book(bName, bAuthor, bPages, status);
    addBookToLibrary(book);
    addBookPage.classList.remove("display-form");
});

profileCancelBtn.addEventListener("click", () => {
    document.getElementById("f-name").value = "";
    document.getElementById("l-name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phNo").value = "";
    signInPage.classList.remove("display-form");
});

bookCancelBtn.addEventListener('click', () => {
    document.getElementById("b-name").value = "";
    document.getElementById("b-author").value = "";
    document.getElementById("b-pages").value = "";
    document.getElementsByName("status").forEach(stat => {
        stat.checked = false;
    });
    addBookPage.classList.remove("display-form");
});