const year = document.getElementById("year");
year.innerText = new Date().getFullYear();
const signIn = document.getElementById("sign-in");
const signUp = document.getElementById("sign-up");
const signInPage = document.querySelector(".sign-in-form");
const form = document.getElementById("login-form");
const userName = document.getElementById("user-name");
const userEmail = document.getElementById("user-email");
const userPhNo = document.getElementById("user-phNo");

signIn.addEventListener('click', () => {
    signInPage.classList.toggle("display-form");
});
signUp.addEventListener('click', () => {
    signInPage.classList.toggle("display-form");
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
    console.log(fName);
    console.log(lName);
    console.log(email);
    console.log(phNumber);
    signInPage.classList.remove("display-form");
});
