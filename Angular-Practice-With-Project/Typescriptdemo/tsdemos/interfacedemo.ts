interface customer
{
    //fields declaration 
    name: string;
    age : number;


}
// i am declaring function it accepting one argument i.e. type -> datatype customer
 
let custex = (type: customer): void=>
{
    console.log("Name : "+type.name+'\t'+"Age="+type.age);
}

let ex = {name: "Jhon", age:13} //json type 
custex (ex); //calling a function and passing parameters 