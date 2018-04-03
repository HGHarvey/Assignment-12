function update() {
    /* ===================
        Your code starts here
    =====================*/
	
    //Create new array.
    var messages = [];
var firstName = getValue('firstName');
var lastName = getValue('lastName');
var emailAddress= getValue('emailAddress')
    //If first name is empty. Add it to the array
   if(firstName ==""){
       messages.push("First Name is Required")
   }
    //If last name is empty. Add it to the array
    if(lastName ==""){
        messages.push("Last Name is Required")}

    //Email is empty. Add it to the array
if(emailAddress == ""){
    messages.push("Email is Required")}

    //Loop through array
for(i = 0; i < messages.length; i++)
getElm('error-list').innerHTML += messages [i] + "<br>";


    //Create javascript object for the user
user = {
    firstname: firstName,
    lastname: lastName,
    emailaddress: emailAddress,
    fullname: function(){
        return this.firstname + "" + this.lastname;
    }
}


    //log the user object to the console
console.log(user);
console.log(user.fullname());

    //Check to see if everything is valid
    if(messages == ""){
        isValid = true;
    }

    //Create string for today's date. Remember, if you hard code this, it will be invalid tomorrow.
var submittedDate = newDate();
var stringDate = submittedDate.toDateString();
    //Make the alert box.
alert("Submitted on" + stringDate);

    /* ===================
        Your code ends here
    =====================*/


}



var btn = document.getElementById('btnUpdate');
btn.addEventListener('click', update);

function getValue(id) {
    return getElm(id).value;
}

function getElm(id) {
    return document.getElementById(id);
}