function compute(number) {
    let results = [];
    if (number % 3 === 0) results.push('Foo');
    if (number % 5 === 0) results.push('Bar');
    if (number % 7 === 0) results.push('Qix');
    
    const digitsToSubstitute = {3: 'Foo', 5: 'Bar', 7: 'Qix'};
    number.split('').forEach( (digit) => {
        if(digitsToSubstitute[digit]) results.push(digitsToSubstitute[digit]);
    })

    if (noRuleApplied()) {
        return number.replace('0','*');
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
