function compute(number) {
    let results = [];
    let isSubstituted = false;
    if (number % 3 === 0) results.push('Foo');
    if (number % 5 === 0) results.push('Bar');
    if (number % 7 === 0) results.push('Qix');
    if(results.length > 0) isSubstituted = true;
    
    const digitsToSubstitute = {3: 'Foo', 5: 'Bar', 7: 'Qix', 0: '*'};
    number.split('').forEach( (digit) => {
        if(digitsToSubstitute[digit]) {
            results.push(digitsToSubstitute[digit]);
            if(digit !== '0') isSubstituted = true
        }
    })

    if (isSubstituted) {
        return concatenatedResults();
    } else {
        return number.replace('0','*');
    }

    function concatenatedResults() {
        return results.join('');
    }
}

module.exports = compute;
