let basePrice = null;
let subscriptionType = "premium";
let promoCode = "SALE20";
let applyTax = true;

basePrice ??= 500;

if (subscriptionType === "premium") {
    basePrice += (basePrice / 100 * 50);
} else if (subscriptionType !== "standard") {
    subscriptionType = "basic";
    basePrice -= (basePrice / 100 * 20); // 2 - 10 = -8   10 - 2 = 8 basePrice = 10, basePrice/100 * 20 = 2
}

if (promoCode === "SALE20") {
    basePrice -= (basePrice / 100 * 20);
} else if (promoCode === "VIP") {
    basePrice -= (basePrice / 100 * 30);
}


if (applyTax) {
    basePrice += (basePrice / 100 * 15);
}
console.log(`Финальная стоимость подписки: ${basePrice}`);

