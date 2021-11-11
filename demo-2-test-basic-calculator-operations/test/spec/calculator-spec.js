describe("Calculator - Add function", function() {

  it("should be able to add numbers", function() {
    let addResult = add(4,1);
    expect(addResult).toEqual(5);

  });

  it("should be able to concatenate strings", function() {
    let addResult = add("4","1");
    expect(addResult).toEqual("41");

  });
});

describe("Calculator - Subtract Function", function() {
  
  it("should be able to subtract numbers", function() {
    let subtractResult = subtract(4,1);
    expect(subtractResult).toEqual(3);

  });

});

describe("Calculator - Multiply Function", function() {
  
  it("should be able to multiply numbers", function() {
    let multiplicationResult = multiply(4,1);
    expect(multiplicationResult).toEqual(4);
  });

});

describe("Calculator - Divide Function", function() {
  
  it("should be able to divide numbers", function() {
    let divisionResult = divide(4,1);
    expect(divisionResult).toEqual(4);
  });
  
  it("should be able to divide numbers", function() {
    let divisionResult = divide(4,12);
    expect(divisionResult.toFixed(2)).toEqual('0.33');
  });

  // it("should return Infinity when divided by 0", function() {
  //   let divisionResult = divide(4,0);
  //   expect(divisionResult).toEqual(Infinity);
  // });

  it("should throw exception when divided by 0", function() {
    expect(()=>divide(4,0)).toThrow('cannot divide by 0');
  });
});
