const splitNumber = (number) => {
    const numStr = number.toString();

    return numStr.split('')
        .map((char, index) => {
            const digit = parseInt(char);
            const power = numStr.length - index - 1;
            return digit !== 0 ? digit * Math.pow(10, power) : null;
        })
        .filter(value => value);
};

console.log(splitNumber(23007));