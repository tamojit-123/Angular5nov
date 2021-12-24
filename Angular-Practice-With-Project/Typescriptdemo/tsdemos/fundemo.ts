function show(id : number, name :string) : string
{
    if(id==100 && name=="xx")
    {
        return ("it is correct");
    }
    else{
        return ("not correct");
    }
}

console.log(show(100,"xx"));

console.log("==============================================================");

let name1 :string[] = ["ravi","mohan","akhul"] ; //list of names
name1.forEach(function (nn){   //creating anyonumus function and iterating the value from the array variable
    console.log(nn);
});

console.log("==============================================================");

let exam : number | string;
exam=120;
console.log(exam)
exam="welcome to union type";
console.log(exam)


function accept(value : (number | string))
{
    if(typeof(value)==="number")
    console.log("it is number")
    else if (typeof(value)==="string")
    console.log("it is string")
    
}

accept(123);
accept("welcome")

console.log(typeof("xx"))