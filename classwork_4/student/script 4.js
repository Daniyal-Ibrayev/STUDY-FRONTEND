function calculateBeatPrice(tariff, discount) {
    var result;
    switch (tariff) {
        case "basic":
            result = 20;
            break;
        case "standard":
            result = 50;
            break;
        case "premium":
            result = 100;
            break;
        default:
            console.error("you need to choose tariff, your tariff now is basic");
            result = 20;
            break;
    }
    switch (discount) {
        case "promo":
            result -= result / 100 * 20;
            break;
        case "seasonal":
            result -= result / 100 * 10;
            break;
    }
    console.log("\u041E\u0436\u0438\u0434\u0430\u0435\u043C\u044B\u0439 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442: ".concat(result));
}
calculateBeatPrice('basic', 'seasonal');
console.log("----------------------------");
calculateBeatPrice('standard', 'promo');
console.log("----------------------------");
calculateBeatPrice('premium');
console.log("----------------------------");
calculateBeatPrice('premium', 'seasonal');
