const year = document.getElementById("year");
year.innerText = new Date().getFullYear();
const signIn = document.getElementById("sign-in");
const logOut = document.getElementById("log-out");
const signInPage = document.querySelector(".sign-in-form");
const form = document.getElementById("login-form");
const userName = document.getElementById("user-name");
const userEmail = document.getElementById("user-email");
const userPhNo = document.getElementById("user-phNo");
const cancelBtn = document.getElementById("cancel");

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
});

cancelBtn.addEventListener("click", () => {
    document.getElementById("f-name").value = "";
    document.getElementById("l-name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phNo").value = "";
    signInPage.classList.remove("display-form");
});
