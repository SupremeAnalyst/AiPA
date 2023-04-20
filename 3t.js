const findPairWithSum = (arr, targetSum) => {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        const sum = arr[left] + arr[right];
        if (sum === targetSum) {
            return [arr[left], arr[right]];
        } else if (sum < targetSum) {
            left++;
        } else {
            right--;
        }
    }
    return null;
};

const sortedArr = [-10, -5, 0, 2, 6, 8, 10, 15, 20];
const targetSum = 35;

const pair = findPairWithSum(sortedArr, targetSum);

if (pair) {
    console.log(`Найдена пара чисел: ${pair}`);
} else {
    console.log("Пара чисел не найдена");
}