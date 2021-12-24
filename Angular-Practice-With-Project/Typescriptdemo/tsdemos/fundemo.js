function show(id, name) {
    if (id == 100 && name == "xx") {
        return ("it is correct");
    }
    else {
        return ("not correct");
    }
}
console.log(show(100, "xx"));
console.log("==============================================================");
var name1 = ["ravi", "mohan", "akhul"]; //list of names
name1.forEach(function (nn) {
    console.log(nn);
});
console.log("==============================================================");
var exam;
exam = 120;
console.log(exam);
exam = "welcome to union type";
console.log(exam);
function accept(value) {
    if (typeof (value) === "number")
        console.log("it is number");
    else if (typeof (value) === "string")
        console.log("it is string");
}
accept(123);
accept("welcome");
console.log(typeof (10));
