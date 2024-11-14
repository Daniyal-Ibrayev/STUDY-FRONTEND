function calculateDeliveryCost(weight, distance){

    let basePrice = 50;
    let additionalweight = 0;
    let additionaldistance = 0;

    if (weight > 5){
        additionalWeight = (weight - 5) * 20;
    }
    if ( distance > 100){
        additionalDistance = (distance - 100) * 5;
    }

    let Cost = basePrice + additionalWeight + additionalDistance;

    return (`Итоговая сумма: ${Cost} рублей`);
}

console.log(calculateDeliveryCost(6, 150));