function compute(number) {
    let results = [];
    let isFooBarQixMode = false
    if (number % 3 === 0) addSubstitute('Foo', results);
    if (number % 5 === 0) addSubstitute('Bar', results);
    if (number % 7 === 0) addSubstitute('Qix', results);
    
    const digitsToSubstitute = {3: 'Foo', 5: 'Bar', 7: 'Qix', 0: '*'};
    number.split('').forEach( (digit) => {
        if(digitsToSubstitute[digit]) {
            addSubstitute(digitsToSubstitute[digit], results);
        } else {
            addOriginalDigit(digit);
        }

    })
    if(isFooBarQixMode) {
        return toString(resultsWithoutDigits())
    } else {
        return toString(results);
    }

    function toString(results) {
        return results.join('');
    }

    function resultsWithoutDigits() {
        return results.filter(r => !r.match(/\d/));
    }

    function addOriginalDigit(digit) {
        results.push(digit)
    }

    function addSubstitute(substitute, results) {
        results.push(substitute);
        if( substitute !== '*') {
            isFooBarQixMode = true;
        }
    }
}

module.exports = compute;
