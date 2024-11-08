const fibonacci = function(number) {

    if (number < 0) return "OOPS";      

    let firstPrev = 1;
    let secondPrev = 0;     

    for (let i = 2; i <= number; i++) {
        let current = firstPrev + secondPrev;
        secondPrev = firstPrev;
        firstPrev = current;
    }

    return firstPrev;

};

// Do not edit below this line
module.exports = fibonacci;
