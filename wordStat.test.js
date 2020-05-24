describe("wordStat", function () {

    // проверять как функция отреагирует на иные типы входных данных не требуется если в задаче не указано обратное 

    describe("Проверка sumCodeOfSymb(word)", function () {

        it("Подсчет символов в правильном слове", function () {
            assert.equal(sumCodeOfSymb("Lorem"), 511);
        });

        it("Подсчет символов, если ничего не введено", function () {
            assert.equal(sumCodeOfSymb(""), 0);
        });

        it("Подсчет символов, если введено пустое слово (пробел)", function () {
            assert.equal(sumCodeOfSymb(" "), 0);
        });

        it("Подсчет символов, если введено пустое слово ( > 1 пробела)", function () {
            assert.equal(sumCodeOfSymb("  "), 0);
        });

        it("Подсчет, включая символы пунктуации", function () {
            assert.equal(sumCodeOfSymb("am.et"), 469);
        });
    });

    describe("Проверка wordStat", function () {

        it("Проверка правильного ввода ", function () {
            assert.deepEqual(wordStat("Lorem ipsum dolor sit amet."), [{ word: 'Lorem', sum: 511 },
            { word: 'ipsum', sum: 558 },
            { word: 'dolor', sum: 544 },
            { word: 'sit', sum: 336 },
            { word: 'amet.', sum: 469 }]
            );
        });

        it("Проверка правильного ввода #2", function () {
            assert.deepEqual(wordStat("Lorem dolor sit amet."), [{ word: 'Lorem', sum: 511 },
            { word: 'dolor', sum: 544 },
            { word: 'sit', sum: 336 },
            { word: 'amet.', sum: 469 }]
            );
        });

        it("Проверка неправильного ввода", function () {
            assert.deepEqual(wordStat("Lorem 55 sit amet."), [{ word: 'Lorem', sum: 511 },
            { word: '55', sum: 106 },
            { word: 'sit', sum: 336 },
            { word: 'amet.', sum: 469 }]
            );
        });


        it("Проверка ввода строки пробелов", function () {
            let fourSpace = " ".repeat(4);
            assert.deepEqual(wordStat(fourSpace), [{ word: fourSpace, sum: 0 }]
            );
        });

        it("Проверка ввода пустой строки", function () {
            let fourSpace = "";
            assert.deepEqual(wordStat(fourSpace), [{ word: fourSpace, sum: 0 }]
            );
        });


    });


});

