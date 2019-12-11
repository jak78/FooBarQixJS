function compute(number) {
    let results = [];
    if (number % 3 === 0) results.push('Foo');
    if (number % 5 === 0) results.push('Bar');
    if (number % 7 === 0) results.push('Qix');

    if (noRuleApplied()) {
        return number;
    } else {
        return concatenatedResults();
    }

    function noRuleApplied() {
        return results.length === 0;
    }

    function concatenatedResults() {
        return results.join('');
    }
}

module.exports = compute;
