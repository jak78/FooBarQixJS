function compute(number) {
    let results = [];
    if (number % 3 === 0) results.push('Foo');
    if (number % 5 === 0) results.push('Bar');
    if (results.length === 0) {
        return number;
    } else {
        return results.join('');
    }
}

module.exports = compute;
