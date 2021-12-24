class Dept
{
    //declartion instance variable 
    did: number;
    dname: string;

    // creating constructor with paramterized
    constructor(did: number , dname: string)
    {
        //assigning a value using this keyword in the instance variable 
        this.did=did;
        this.dname=  dname;

    }


}; // we finish parent class

//we are inheriting the parent class into child class 
class Emp extends Dept{

    //child class instance variables 
    eid : number;
    ename: string;
    esal : number;

    //child class constructor 
    constructor(eid : number , ename : string, esal : number)
    {
        super(10,"sales");
        this.eid = eid;
        this.ename= ename;
        this.esal = esal;
    }
    disp(): void 
    {
        console.log("Depart ID  :="+this.did);
        console.log("Depart Nme : "+this.dname);
        console.log("Emp ID : "+this.eid+"\t Emp Name : "+this.ename+"\t Emp Sal="+this.esal);
    }
}

//we are creating an object of child class and passing the vlues in the constructor 
let empdemo = new Emp(111,"rahul",8900.345)
//through  object we are calling disp () 
empdemo.disp();