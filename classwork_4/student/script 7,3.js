function calculateDeliveryCost(weight, distance){

    let basePrice = 50;
    let additionalWeight = 0;
    let additionalDistance = 0;

    if (weight > 5){
        additionalWeight = (weight - 5) * 20;
    }
    if (distance > 100){
        additionalDistance = (distance - 100) * 5;
    }

    let cost = basePrice + additionalWeight + additionalDistance;

    return (`Итоговая сумма: ${cost} рублей`);
}

console.log(calculateDeliveryCost(6, 150));