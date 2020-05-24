function sumOfPositive(arr) {
    if (arr.every((element) => typeof element === 'number')) {
        arrayOfPositive = arr.filter((item) => item > 0);
    } else {
        return 'invalid';
    }

    return {
        count: arrayOfPositive.length,
        sum: arrayOfPositive.reduce((acc, item) => acc + item, 0),
    }
}
