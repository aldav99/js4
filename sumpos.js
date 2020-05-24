function sumOfPositive(arr) {
    arrayOfPositive = arr.filter((item) => item > 0);

    return {
        count: arrayOfPositive.length,
        sum: arrayOfPositive.reduce((acc, item) => acc + item, 0),
    }
}

console.log(sumOfPositive([-91, -93, -45, 67, 96, 40, -34, 96, -42, 58]))