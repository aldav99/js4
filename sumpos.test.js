describe("sumpos", function () {

    describe("Проверка на корректных данных", function () {

        it("Массив из задания с помощью deepEqual", function () {
            assert.deepEqual(sumOfPositive([-91, -93, -45, 67, 96, 40, -34, 96, -42, 58]), { count: 5, sum: 357, });
        });

        it("Еще один массив с помощью deepEqual", function () {
            assert.deepEqual(sumOfPositive([96, -42, 58]), { count: 2, sum: 154, });
        });
    });

    describe("Проверка на не корректных данных", function () {

        it("Элемент массива - строка", function () {
            assert.equal(sumOfPositive([-91, "-93", -45, 67, 96, 40, -34, 96, -42, 58]), "invalid");
        });

        it("Элемент массива - объект", function () {
            assert.equal(sumOfPositive([96, { count: 5, sum: 357, }, 58]), "invalid");
        });

        it("Элемент массива - массив", function () {
            assert.equal(sumOfPositive([-91, [-45, 67], -45, 67, 96, 40, -34, 96, -42, 58]), "invalid");
        });
    });

    describe("Проверка на пограничных данных", function () {

        it("Элемент массива - положительна бесконечность", function () {
            assert.deepEqual(sumOfPositive([Infinity, -91, -93, -45, 67, 96, 40, -34, 96, -42, 58]), { count: 6, sum: Infinity, });
        });

        it("Элемент массива - отрицательная бесконечность", function () {
            assert.deepEqual(sumOfPositive([-Infinity, -91, -93, -45, 67, 96, 40, -34, 96, -42, 58]), { count: 5, sum: 357, });
        });

        it("Пустой массив", function () {
            assert.deepEqual(sumOfPositive([]), { count: 0, sum: 0, });
        });

        it("Массив с нулевым элементом", function () {
            assert.deepEqual(sumOfPositive([0, 96, -42, 58]), { count: 2, sum: 154, });
        });
    });


});

