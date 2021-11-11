const add = (value1, value2) => value1 + value2;

const subtract = (value1, value2) => value1 - value2;

const multiply = (value1, value2) => value1 * value2;

const divide = (value1, value2) => {
    if(value2!==0)
        return value1 / value2;
    else
        throw 'cannot divide by 0';
}