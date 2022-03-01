const add = (a, b) => a + b;

const sub = (a, b) => a - b;

const mul = (a, b) => a * b;

const div = (a, b) => {
    if (a != 0) {
        return a / b;
    } else {
        throw "Cannot div by zero";
    }
}