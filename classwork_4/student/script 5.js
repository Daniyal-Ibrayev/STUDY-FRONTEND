let initialDeposit = null;
let monthlyInterestRate = 2.5;
let annualContribution = 50000;
let years = 3;

initialDeposit ??= 100000;
monthlyInterestRate ??= 0.5;
annualContribution ??= 0;
years ??= 5;

// if (monthlyInterestRate > 2) {
//   console.log( `Процентная ставка слишком велика: 2` );
//   monthlyInterestRate = 2;
// } 

// while (currentmonth <= months) {
//   initialDeposit += initialDeposit * (monthlyInterestRate / 100);
//   console.log(`Месяц ${currentmonth}: ${initialDeposit.toFixed(0)}`);
//   currentmonth++;
// } 

// for (let i = 1; i <= years; i++) {
//   initialDeposit += annualContribution;
//   console.log(`Год ${i}: ${initialDeposit.toFixed(0)}`);
// }



for (let i = 1; i <= years; i++) {

  if (initialDeposit > 1000000) {
    console.log(`Цель достигнута!`);
    initialDeposit = 1000000;
    break;
  }

  for (let j = 1; j <= 12; j++) {
    initialDeposit += initialDeposit * (monthlyInterestRate / 100);
  }

  initialDeposit += annualContribution;

  console.log(`Год ${i}: Накоплено ${initialDeposit.toFixed(2)}`)
}