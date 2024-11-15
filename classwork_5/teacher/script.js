function countAge() {
    const birthDate = new Date(document.getElementById("birthDate")?.value);
    
    const dateNow = new Date().getFullYear();
    const age = dateNow - birthDate.getFullYear();

    const result = document.getElementById("resultAge");
    result.innerText = `Your age is ${age} years old`;
}