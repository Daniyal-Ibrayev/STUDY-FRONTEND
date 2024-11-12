let calories = [2000, 2200, 2500, 1800, 1900, 3100, 2000];

let totalCalories = 0;

let i = 0;

for (let i = 0; i < calories.length; i++) {
    console.log(`День ${i+1}: Потреблено ${calories[i]} калорий`)
    totalCalories += calories[i];

    if (calories[i] > 3000) {
        console.log("Перебор калорий!");
        break;
    }
}

let days = calories.length;

let averageCalories = totalCalories / days;

console.log(`Общее количество калорий за ${days} дней: ${totalCalories}`);
console.log(`Среднее количество калорий в день: ${averageCalories}`);