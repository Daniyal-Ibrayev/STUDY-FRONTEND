function TipCalculator() {
   
    const bill = +document.getElementById("bill")?.value; //6
    const tip = +document.getElementById("tip")?.value; //4

    const total = bill * (tip/100) + bill;

    const result = document.getElementById("resultTotal");
    result.innerText = total;
}