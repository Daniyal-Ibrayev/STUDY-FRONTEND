let calculator = {
    a: 0,
    b: 0,
    sum() {
        return this.a + this.b;
    },

    mul() {
         return this.a * this.b;
    },

    // read() {
    //     this.a = +prompt('a?', 0);
    //     this.b = +prompt('b?', 0);
    // }
};

calculator.a = 34;
calculator.b = 10;
    
    console.log(calculator.sum() );
    console.log(calculator.mul() );
