function createUser(name, age, email) {

    this.name = name;
    this.age = age;
    this.email = email;

} 

createUser.prototype.introduce = function() {
    return `Привет, меня зовут ${this.name}, мне ${this.age} лет.`;
};

this.updateEmail = function(newEmail) {
    this.newEmail = newEmail;
}

const user1 = new createUser("Danjblack", 68);
const user2 = new createUser("Dayajblack", 24);

// console.log(user1.introduce());
// console.log(user2.introduce());


class User {
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }

    introduce() {
        console.log(`Привет, меня зовут ${this.name}, мне ${this.age} лет. ${this.email}`);
    }

    updateEmail(email) {
        this.email = email; 
    }

}

const user = new User("asdf", 25, "isd@User.ru");
user.introduce();
user.updateEmail("lalallala");
user.introduce();
