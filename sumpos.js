function sumOfPositive(arr) {
    if (!arr.every((element) => typeof element === 'number'))
        return 'bad input';
    const arrayOfPositive = arr.filter((item) => item > 0);

    return {
        count: arrayOfPositive.length,
        sum: arrayOfPositive.reduce((acc, item) => acc + item, 0),
    }
}

