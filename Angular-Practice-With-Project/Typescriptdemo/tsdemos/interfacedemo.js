// i am declaring function it accepting one argument i.e. type -> datatype customer
var custex = function (type) {
    console.log("Name : " + type.name + '\t' + "Age=" + type.age);
};
var ex = { name: "Jhon", age: 13 };
custex(ex); //calling a function and passing parameters 
