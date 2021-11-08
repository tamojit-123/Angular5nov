var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Dept = /** @class */ (function () {
    // creating constructor with paramterized
    function Dept(did, dname) {
        //assigning a value using this keyword in the instance variable 
        this.did = did;
        this.dname = dname;
    }
    return Dept;
}());
; // we finish parent class
//we are inheriting the parent class into child class 
var Emp = /** @class */ (function (_super) {
    __extends(Emp, _super);
    //child class constructor 
    function Emp(eid, ename, esal) {
        var _this = _super.call(this, 10, "sales") || this;
        _this.eid = eid;
        _this.ename = ename;
        _this.esal = esal;
        return _this;
    }
    Emp.prototype.disp = function () {
        console.log("Depart ID  :=" + this.did);
        console.log("Depart Nme : " + this.dname);
        console.log("Emp ID : " + this.eid + "\t Emp Name : " + this.ename + "\t Emp Sal=" + this.esal);
    };
    return Emp;
}(Dept));
//we are creating an object of child class and passing the vlues in the constructor 
var empdemo = new Emp(111, "rahul", 8900.345);
//through  object we are calling disp () 
empdemo.disp();
