function countSalary(baseSalary, overtimeHours, bonusPercentage, applyTax) {
    baseSalary ??= 50000;
    overtimeHours ??= 0;
    bonusPercentage ??= 10;
    
    if (overtimeHours > 40){
        console.log(`Чрезмерное количество часов переработки: 40`);
        overtimeHours = 40;
    } 
    
    const overtimePrice = (baseSalary / 100 * 1.5) * overtimeHours;
    if (bonusPercentage > 50) {
        console.log(`Премия слишком велика: 50`);
        bonusPercentage = 50;
    } 
    
    const bonusPrice = (baseSalary / 100 * bonusPercentage);
    let finalSalary = baseSalary;

    finalSalary += overtimePrice;
    finalSalary += bonusPrice;
    
    if (applyTax) {
        finalSalary -= (finalSalary / 100 * 13);
    }
    console.log(`Итоговая зарплата: ${finalSalary}`);
}

countSalary(80000, 20, 15, false);
console.log("----------------------------");
countSalary(null, 50, 60, true);
console.log("----------------------------");
countSalary(125000, 5, 10, true);



