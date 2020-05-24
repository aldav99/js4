function sumCodeOfSymb(word) {
    return word.trim().split('')
        .reduce((acc, currentItem) =>
            acc + currentItem.charCodeAt(), 0)
}

function wordStat(str) {
    if (str.trim().length == 0) return [{ word: str, sum: 0 }]

    return str.split(" ")
        .filter(item => item.length > 0)
        .map(function (word) {
            return { word: word, sum: sumCodeOfSymb(word) }
        });
}

// console.log(wordStat(" ".repeat(4)));
