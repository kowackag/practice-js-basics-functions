let result = 0;

const sumCount = function (toNumberCount) {
    for (let i = 1; i < toNumberCount; i++) {
        result += i;
    }
    return result;
}

sumCount(5);
console.log(result);