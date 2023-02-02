const arr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
const copyArr = arr.slice().sort((a, b) => a - b);

// 2. Знайти мінімальний елемент масиву та його порядковий номер.
console.log(`2. Знайти мінімальний елемент масиву та його порядковий номер: ${copyArr[0]}
index: ${arr.indexOf(copyArr[0])}`);
// 3. Знайти максимальний елемент масиву та його порядковий номер.
console.log(`3. Знайти максимальний елемент масиву та його порядковий номер: ${copyArr[copyArr.length - 1]}
index: ${arr.indexOf(copyArr[copyArr.length - 1])}`);
// 4. Визначити кількість негативних елементів.
let negative = 0;
for (let i of arr) {
    if (i < 0) {
        negative ++;
    }
}
console.log(`4. Визначити кількість негативних елементів: ${negative}`);
// 5. Знайти кількість непарних позитивних елементів.
let nonPairPositiveItems = 0;
for (let i of arr) {
    if (i > 0 && i % 2 !== 0) {
        nonPairPositiveItems ++;
    }
}
console.log(`5. Знайти кількість непарних позитивних елементів: ${nonPairPositiveItems}`);
// 6. Знайти кількість парних позитивних елементів.
let pairPositiveItems = 0;
for (let i of arr) {
    if (i > 0 && i % 2 === 0) {
        pairPositiveItems ++;
    }
}
console.log(`6. Знайти кількість парних позитивних елементів: ${pairPositiveItems}`);
// 7. Знайти суму парних позитивних елементів.
let sumPairPositive = 0;
for (let i of arr) {
    if (i > 0 && i % 2 === 0) {
        sumPairPositive += i;
    }
}
console.log(`7. Знайти суму парних позитивних елементів: ${sumPairPositive}`);
// 8. Знайти суму непарних позитивних елементів.
let sumNonPairPositive = 0;
for (let i of arr) {
    if (i > 0 && i % 2 !== 0) {
        sumNonPairPositive += i;
    }
}
console.log(`8. Знайти суму непарних позитивних елементів: ${sumNonPairPositive}`);
// 9. Знайти добуток позитивних елементів.
let sumMultiOfPositive = 0;
for (let i of arr) {
    if (i > 0) {
        if (sumMultiOfPositive === 0) {
            sumMultiOfPositive = i;
        } else {
            sumMultiOfPositive *= i;
        }
    }
}
console.log(`9. Знайти добуток позитивних елементів: ${sumMultiOfPositive}`);
// 10. Знайти найбільший серед елементів масиву, остальні обнулити.
for (let i of arr) {
    if (arr.indexOf(i) !== arr.indexOf(copyArr[copyArr.length - 1])) {
        arr[arr.indexOf(i)] = 0;
    }
}
console.log(`10. Знайти найбільший серед елементів масиву, остальні обнулити: ${arr}`);