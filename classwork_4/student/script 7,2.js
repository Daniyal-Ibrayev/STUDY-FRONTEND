function calculateDiscount(purchaseAmount, age) {

    let discount = 0;

    if (age < 18) {
        discount = 0.1;
    }
    else if (age > 65) {
        discount = 0.2;
    }
let finalAmount = purchaseAmount - (purchaseAmount * discount);

return (`Итоговая сумма со скидкой: ${finalAmount}`);
}

console.log(calculateDiscount(1500, 14 ));