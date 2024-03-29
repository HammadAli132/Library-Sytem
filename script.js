const year = document.getElementById("year");
year.innerText = new Date().getFullYear();
const signIn = document.getElementById("sign-in");
let isSignIn = false;
const logOut = document.getElementById("log-out");
const signInPage = document.querySelector(".sign-in-form");
const loginForm = document.getElementById("login-form");
const userName = document.getElementById("user-name");
const userEmail = document.getElementById("user-email");
const userPhNo = document.getElementById("user-phNo");
const readBook = document.getElementById("read-book");
let rbCount = 0;
const unRreadBook = document.getElementById("unread-book");
let unrbCount = 0;
const pendingBook = document.getElementById("pending-book");
let pbCount = 0;
const likedBook = document.getElementById("liked-book");
let lbCount = 0;
const profileCancelBtn = document.querySelector(".signin-cancel");
const bookLibrary = document.querySelector(".container");
const myLibrary = [];

signIn.addEventListener('click', () => {
    signInPage.classList.add("display-form");
});
logOut.addEventListener('click', () => {
    userName.innerText = "-";
    userEmail.innerText = "-";
    userPhNo.innerText = "-";
    document.getElementById("f-name").value = "";
    document.getElementById("l-name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phNo").value = "";
    for (let i = myLibrary.length - 1; i >= 0; i--) {
        if (myLibrary[i] === null) {
            myLibrary.pop();
            continue; 
        } 
        let book = myLibrary[i];
        myLibrary.pop();
        const status = book.querySelector("#BS").innerText;
        const isLiked = book.querySelector("#heart").getAttribute("src");
        switch (status) {
            case "Read":
                rbCount--;
                readBook.innerText = rbCount;
                break;
            case "Unread":
                unrbCount--;
                unRreadBook.innerText = unrbCount;
                break;
            case "Pending":
                pbCount--;
                pendingBook.innerText = pbCount;
                break;
            }
            if (isLiked === "img/heart.png") {
                lbCount--;
                likedBook.innerText = lbCount;
            }
        bookLibrary.removeChild(book);
    }
    isSignIn = false;
});

loginForm.addEventListener('submit', (e) => {
    isSignIn = true;
    e.preventDefault();
    const fName = document.getElementById("f-name").value;
    const lName = document.getElementById("l-name").value;
    const email = document.getElementById("email").value;
    const phNumber = document.getElementById("phNo").value;
    document.getElementById("f-name").value = "";
    document.getElementById("l-name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phNo").value = "";
    userName.innerText = `${fName} ${lName}`;
    userEmail.innerText = email;
    userPhNo.innerText = phNumber;
    signInPage.classList.remove("display-form");
});

profileCancelBtn.addEventListener("click", () => {
    document.getElementById("f-name").value = "";
    document.getElementById("l-name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phNo").value = "";
    signInPage.classList.remove("display-form");
});

const bookForm = document.getElementById("book-form");
const bookCancelBtn = document.querySelector(".book-cancel");
const addBookBtn = document.getElementById("add-book-card");
const addBookPage = document.querySelector(".book-form-bg");
let bookID = 0;

function Book(name, author, pages, status) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

function addBookToLibrary(book) {
    bookID++;
    const bookCard = document.createElement("div");
    bookCard.setAttribute("class", "book-card");
    bookCard.innerHTML = `
    <div class="card-image"></div>
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
        <div class="operations" id="${bookID}">
            <img src="img/hollow_heart .png" alt="Like" id="heart">
            <img src="img/delete.png" alt="Delete" id="del">
        </div>
    </div>`;
    bookCard.querySelector("#heart").addEventListener('click', e => {
        if (e.target.getAttribute("src") === "img/hollow_heart .png") {
            e.target.setAttribute("src", "img/heart.png");
            lbCount++;
        }
        else if (e.target.getAttribute("src") === "img/heart.png") {
            e.target.setAttribute("src", "img/hollow_heart .png");
            if (lbCount > 0)
                lbCount--;
        }
        likedBook.innerText = lbCount;
    });
    bookCard.querySelector("#del").addEventListener('click', e => {
        let id = (e.target.parentElement.id) - 1;
        console.log(id);
        let book = myLibrary[id];
        myLibrary[id] = null;
        const status = book.querySelector("#BS").innerText;
        const isLiked = book.querySelector("#heart").getAttribute("src");
        switch (status) {
            case "Read":
                rbCount--;
                readBook.innerText = rbCount;
                break;
            case "Unread":
                unrbCount--;
                unRreadBook.innerText = unrbCount;
                break;
            case "Pending":
                pbCount--;
                pendingBook.innerText = pbCount;
                break;
        }
        if (isLiked === "img/heart.png") {
            lbCount--;
            likedBook.innerText = lbCount;
        }
        bookLibrary.removeChild(book);
    });
    bookCard.querySelector("#BN").innerText = book.name;
    bookCard.querySelector("#BA").innerText = book.author;
    bookCard.querySelector("#BP").innerText = book.pages;
    bookCard.querySelector("#BS").innerText = book.status;
    const status = bookCard.querySelector("#BS").innerText;
    switch (status) {
        case "Read":
            rbCount++;
            readBook.innerText = rbCount;
            break;
        case "Unread":
            unrbCount++;
            unRreadBook.innerText = unrbCount;
            break;
        case "Pending":
            pbCount++;
            pendingBook.innerText = pbCount;
            break;
    }
    bookLibrary.removeChild(addBookBtn);
    bookLibrary.appendChild(bookCard);
    bookLibrary.appendChild(addBookBtn);
    myLibrary.push(bookCard);
}

addBookBtn.addEventListener('click', () => {
    if (isSignIn === false) {
        alert("Please Sign In First ----->");
        return;
    }
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
    document.getElementById("b-name").value = "";
    document.getElementById("b-author").value = "";
    document.getElementById("b-pages").value = "";
    document.getElementsByName("status").forEach(stat => {
        stat.checked = false;
    });
    addBookPage.classList.remove("display-form");
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