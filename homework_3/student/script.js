let form = document.getElementById("login");

form.addEventListener("submit", (event) => {
    event.preventDefault();


    let name = document.getElementById("name")?.value;

    let email = document.getElementById("email")?.value;

    let password = document.getElementById("password")?.value;

    let error = "";

    if (!name || name.length <= 3) {
        error += "Name must not be empty and should be at least 3 characters long! ";
    }


    if (!isEmailValid(email)) {
        error += "Email not valid! ";
    }

    if (!password || password.length <= 6) {
        error += "Password must be at least 6 characters long! ";
    }

    let errorText = document.getElementById("errorText");
    errorText.innerText = error;
})

function isEmailValid(value) {
    const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

    return EMAIL_REGEXP.test(value);
}