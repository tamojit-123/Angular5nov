describe("calulator-add", function(){

    it("This is calculator", function(){
        var total = add(1,2);
        expect(total).toEqual(3);
    })

});

describe("calulator-sub", function(){

    it("This is calculator", function(){
        var total = sub(1,2);
        expect(total).toEqual(-1);
    })

});

describe("calulator-mul", function(){

    it("This is calculator", function(){
        var total = mul(1,2);
        expect(total).toEqual(2);
    })

});

describe("calulator-div", function(){

    it("This is calculator", function(){
        var total = div(4,2);
        expect(total).toBe(2);
    })

});