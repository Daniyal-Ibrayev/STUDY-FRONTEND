class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
        this.isAvailable = true;
    }

    borrow() {
        if (this.isAvailable) {
            console.log(`Книга взята`);
            this.isAvailable = false;
        }
        else {
            console.log(`Книга уже занята`);
        }
    }

    getBackBook() {
        this.isAvailable = true;
        console.log(`Книга возвращена`);
    }

    getInfo() {
        console.log(`Название:  ${this.title}, Автор:  ${this.author}, Статус:  ${this.isAvailable}.`);
    }
}

const book1 = new Book("frfr", "frgdf");

book1.getInfo();
book1.borrow();


book1.getInfo();
book1.getBackBook();

book1.getInfo();