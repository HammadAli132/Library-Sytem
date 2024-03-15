const year = document.getElementById("year");
year.innerText = new Date().getFullYear();
const signIn = document.getElementById("sign-in");
const logOut = document.getElementById("log-out");
const signInPage = document.querySelector(".sign-in-form");
const form = document.getElementById("login-form");
const userName = document.getElementById("user-name");
const userEmail = document.getElementById("user-email");
const userPhNo = document.getElementById("user-phNo");
const profileCancelBtn = document.querySelector(".signin-cancel");
const bookCancelBtn = document.querySelector(".book-cancel");

signIn.addEventListener('click', () => {
    signInPage.classList.toggle("display-form");
});
logOut.addEventListener('click', () => {
    userName.innerText = "-";
    userEmail.innerText = "-";
    userPhNo.innerText = "-";
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const fName = document.getElementById("f-name").value;
    const lName = document.getElementById("l-name").value;
    const email = document.getElementById("email").value;
    const phNumber = document.getElementById("phNo").value;
    userName.innerText = `${fName} ${lName}`;
    userEmail.innerText = email;
    userPhNo.innerText = phNumber;
    signInPage.classList.remove("display-form");
    addBookPage.classList.remove("display-form");
});

profileCancelBtn.addEventListener("click", () => {
    document.getElementById("f-name").value = "";
    document.getElementById("l-name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phNo").value = "";
    signInPage.classList.remove("display-form");
});

const addBookBtn = document.getElementById("add-book-card");
const addBookPage = document.querySelector(".book-form-bg");

addBookBtn.addEventListener('click', () => {
    addBookPage.classList.toggle("display-form");
});

bookCancelBtn.addEventListener('click', () => {
    document.getElementById("b-name").value = "";
    document.getElementById("b-author").value = "";
    document.getElementById("b-pages").value = "";
    document.getElementById("read").checked = false;
    document.getElementById("pending").checked = false;
    document.getElementById("unread").checked = false;
    addBookPage.classList.remove("display-form");
});