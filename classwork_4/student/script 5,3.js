let waterIntake = [300, 400, 250, 600, 500];

let totalwater = 0;

let i = 0;

for (let i = 0; i < waterIntake.length; i++) {
    console.log(`Час ${i+1}: Выпито ${waterIntake[i]} мл`)
    totalwater += waterIntake[i];

    if (totalwater[i] >= 2000) {
        console.log("Цель достигнута!");
        break;
    }
}

let water = waterIntake.length;

console.log(`Общее количество выпитой воды за ${i + 1} часов: ${Water} мл`);