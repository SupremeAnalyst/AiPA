const minSquareCount = (width, height) => {
    if (width <= 0 || height <= 0) {
        return 0;
    }
    if (width > height) {
        return 1 + minSquareCount(width - height, height);
    } else {
        return 1 + minSquareCount(width, height - width);
    }
};

console.log(minSquareCount(1, 1)); // 1
console.log(minSquareCount(1, 2)); // 2
console.log(minSquareCount(2, 3)); // 3
console.log(minSquareCount(2, 4)); // 2
console.log(minSquareCount(2, 5)); // 4
