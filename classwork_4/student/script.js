let price = 200;
let discount = 10;
let taxIncluded = true;

price ??= 100;
if (discount > 30){
    console.log( 'Скидка слишком велика' );
    discount = 30;
} 

discount ??= 0;

if (taxIncluded === false){
    price = price/100 * 20 + price;
}

price = price - (price/100 * discount);
console.log('Финальная цена: ', price)