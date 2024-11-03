type TariffType = "basic" | "standard" | "premium";
type DiscountType = "seasonal" | "promo";

function calculateBeatPrice(tariff: TariffType, discount?: DiscountType) {
    let result: number;
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
    console.log(`Ожидаемый результат: ${result}`)

}

calculateBeatPrice('basic', 'seasonal');
console.log("----------------------------");
calculateBeatPrice('standard', 'promo');
console.log("----------------------------");
calculateBeatPrice('premium');
console.log("----------------------------");
calculateBeatPrice('premium', 'seasonal');