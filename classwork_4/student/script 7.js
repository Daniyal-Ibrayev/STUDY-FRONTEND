function calculateRectangleArea(length, width) {
if (length <= 0 || width <= 0){
    return ("Некорректные данные");
}

return (length * width);

}

console.log(calculateRectangleArea (10, 10));