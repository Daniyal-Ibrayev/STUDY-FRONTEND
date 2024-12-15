let shoppingCart = {
    items: [
        {
            name: "dog",
            price: "40",
            quantity: "6",
        },

        {
            name: "cat",
            price: "25",
            quantity: "4",
        }
    ],

    addItem: function (name, price, quantity) {
        this.items.push({
            name,
            price,
            quantity
        })
    },

    removeItem: function (name) {
        let newItems = this.items.filter(item => item.name != name);
        this.items = newItems;
    },

    getTotal: function() {
        const total = this.items.reduce((sum, item) => {
            return sum + item.price * item.quantity;
        }, 0);

        console.log("Всего: ", total)
    },

    showCart: function() {
        this.items.forEach(item => {
            const totalItemCost = item.price * item.quantity;
            console.log(`${item.name}: Количество: ${item.quantity}, Цена за штуку: ${item.price}, Стоимость: ${totalItemCost}`);
        });


        console.log("---------------------------------------");
    }

}


shoppingCart.showCart();
shoppingCart.addItem("daniyal", 10000000, 1);
shoppingCart.showCart();

shoppingCart.getTotal();
shoppingCart.removeItem("dog");
shoppingCart.showCart();