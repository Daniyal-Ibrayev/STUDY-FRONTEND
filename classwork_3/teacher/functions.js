function getLeg(name) {
    let leg = `нога ${name}`;
    return leg;
}

function getPen() {
    console.log("pen", this);
    return "Ручка";
}

let getHand = (name) => { //лямбда функция
    return `рука ${name}`;
}

let getHead = () => { //лямбда функция
    console.log("head", this);
    return "Голова";
}

let text = getLeg("Amir") + " " + getHand("Malika");
console.log(text);

let pen = getPen();
let head = getHead();

console.log(pen);
console.log(head);

console.log(pen, head);


function learnLoops() {
    for (let i = 0; i <= 10; i++) {
        console.log("for", i);
    }

    let index = 0;
    while(index < 5) {
        index++;
        console.log("while", index);
    }

    [1, 2, 4, 234, 23 ,5, 3].map((i) => {
        console.log("map", i)
    })
}

learnLoops();