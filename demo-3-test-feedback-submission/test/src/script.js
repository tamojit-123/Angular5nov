// import './validationScript.js';
// import { submitContact } from './validationScript.js';

//captures feedbacks submitted
let feedbacks = [];
let errors;
window.submitFeedback = formData=>{
    let result = submitData(formData);
    if(!result){
        //filter out empty error messages
        let errorMessages = Object.values(errors).filter(e => e !== '');

        //display validation summary with error messages
        displayValidationSummary(errorMessages);

        //display error messages alongside the input fields
        displayIndividualErrorMessages(errors)
        return false;
    }
    else{
        // feedbacks.push(feedback);
        return true;
    }


} 

//function called when submit button is clided
const submitData = (formData) => {
    console.log(formData);
    // event.preventDefault();
    //feedback object captures all the inputs provided
    let feedback = formData;//Object.fromEntries(new FormData(formData))


    //errors object captures all the validation errors
    errors = {
        userNameError: validateUserName(feedback.username),
        emailError: validateEmail(feedback.email),
        contactNoError: validateContactNo(feedback.contactNo),
        productError: validateProduct(feedback.product),
        commentsError: validateComments(feedback.comments),
        purchaseDateError: validatePurchaseDate(feedback.purchaseDate)
    }

    // //filter out empty error messages
    let errorMessages = Object.values(errors).filter(e => e !== '');

    // //display validation summary with error messages
    
    // //display error messages alongside the input fields
    
    //if no errors, push the feedback to feedbacks array
    if (errorMessages.length === 0){
        feedbacks.push(feedback);
        console.log(feedbacks);
        return true
    } 
    else {
        displayValidationSummary(errorMessages);
        displayIndividualErrorMessages(errors)
        return false;
    }
    //feedbacks can be logged on to console, or can even be updated on UI
}

//function to display validation summary with error messages provided
function displayValidationSummary(errorMessages){

    let list='';
    errorMessages.map(e => `<li>${e}</li>`).forEach(item=>{
        list += item; 
    });
    document.getElementsByTagName('ul')[0].innerHTML += list;
}

//function to display error messages alongside the input fields
function displayIndividualErrorMessages(errorMessages) {

    document.getElementById('userNameError').innerText = errorMessages.userNameError;

    document.getElementById('emailError').innerText = errorMessages.emailError;

    document.getElementById('contactNoError').innerText = errorMessages.contactNoError;

    document.getElementById('productError').innerText = errorMessages.productError;

    document.getElementById('commentsError').innerText = errorMessages.commentsError;

    document.getElementById('purchaseDateError').innerText = errorMessages.purchaseDateError;
}

//function to validate username
const validateUserName = (userName) => {
    if (userName === '' || userName === undefined || userName === null)
        return "Username cannot be left blank";
    else
        return "";
}

//function to validate email
const validateEmail = (email) => {
    let emailError = '';
    let validRegex = "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$";
    
    if (email === '' || email === undefined || email === null)
        emailError += "Email cannot be left blank";
    
    else if (!email.match(validRegex))
        emailError += 'Invalid Email';

    return emailError;

}

//function to validate contact no
const validateContactNo = (contactNo) => {
    let contactNoError = '';
    //to validate following patterns of contact nos
    //0999999999, 099-999-999, (099)-999-9999, (099)9999999, 099 999 9999, 099 999-9999, (099) 999-9999, 099.999.9999
    let validRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    if (contactNo === '' || contactNo === undefined || contactNo === null)
        contactNoError += "ContactNo cannot be left blank";

    else if (!contactNo.match(validRegex))
        contactNoError += 'Invalid ContactNo';

    return contactNoError;
}

//function to validate product
const validateProduct = (product) => {
    if (product === '' || product === undefined || product === null)
        return "Product cannot be left blank"
    else
        return "";
}

//function to validate comments
const validateComments = (comments) => {
    let commentsError = '';
    if (comments === '' || comments === undefined || comments === null)
        commentsError += "Comments cannot be left blank";
    else if (comments.length > 70)
        commentsError = 'Comments should contain maximum of 70 characters';
    return commentsError;
}

//function to validate purchase-date
const validatePurchaseDate = (purchaseDate) => {
    let purchaseDateError = '';
    if (purchaseDate === '' || purchaseDate === undefined || purchaseDate === null)
        purchaseDateError = "Purchase Date cannot be left blank";
    
    return purchaseDateError;
}

//disable all future dates for purchase date input
let purchaseDate = document.getElementById('purchaseDate');
!purchaseDate ?? purchaseDate.setAttribute('max',new Date().toISOString().split('T')[0])



