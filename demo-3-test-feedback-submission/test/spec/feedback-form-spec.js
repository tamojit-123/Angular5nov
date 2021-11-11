/*
User Story : Feedback Submission
Scenario 1 : All Details correctly provided
Given: feedback
When: feedback is submitted
Then: feedback collection should be updated with the given feedback
*/

// import feedbackScript from '../src/script.js';

// console.log(feedbackScript)

describe("Feedback", function () {

  it("should return true for valid inputs", function () {

    let feedbackForm = {
      purchaseDate: new Date(),
      username: "john mathews",
      email: "john.m@gmail.com",
      contactNo: "7603408890",
      product: "Double Door Fridge",
      comments: "Received in good condition. Good support provided for installation"
    }
    // feedbackScript.displayIndividualErrorMessages = jasmine.createSpy();
    // spyOn(window,'displayValidationSummary');//.and.callFake(e=>{console.log('error')});
    // spyOn(feedbackScript,'displayIndividualErrorMessages').and.callFake(e=>{console.log('error')});
    // setTimeout(()=>{
    expect(submitData(feedbackForm)).toBeTrue();
    expect(feedbacks.length).toEqual(1);
    expect(feedbacks[0].username).toEqual('john mathews');
    // done();

    // },1000)
  });
  it("should update feedback list for valid inputs", function () {

    let feedbackForm = {
      purchaseDate: new Date(),
      username: "john mathews",
      email: "john.m@gmail.com",
      contactNo: "7603408890",
      product: "Double Door Fridge",
      comments: "Received in good condition. Good support provided for installation"
    }
    submitData(feedbackForm);
    expect(feedbacks.length).toEqual(2);
    expect(feedbacks[0].username).toEqual('john mathews');
  });

  it("should return false for invalid inputs", function () {
    let feedbackForm = {
      userName: "john mathews",
      email: null,
      contactNo: "+17603408890",
      product: null,
      comments: "Received in good condition. Good support provided for installation"
    }
    spyOn(window,'displayValidationSummary').and.callFake(()=>{});
    
    spyOn(window,'displayIndividualErrorMessages').and.callFake(()=>{});
    expect(submitData(feedbackForm)).toBeFalse();
    
    expect(displayValidationSummary).toHaveBeenCalled();
    expect(displayIndividualErrorMessages).toHaveBeenCalled();
  });


});
