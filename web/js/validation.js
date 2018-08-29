var button = document.getElementById('submit-button');

var button2 = document.getElementById('updatePersonalDetails');

var button3 = document.getElementById('updateAddress');

var button4 = document.getElementById('newPlacement');

if (button != null) {
    button.disabled = true;
}


if (button2 != null) {
    button2.disabled = true;
}

if (button3 != null) {
    button3.disabled = true;
}

if (button4 != null) {
    button4.disabled = true;
}


var valid = false;

var valid2 = false;

var valid3 = false;

var valid4 = false;

var captcha = false;

function validate() {

    button.disabled = true;
    var firstname = document.getElementById("firstNameField").value;
    var lastname = document.getElementById("lastNameField").value;
    var email = document.getElementById("emailField").value;
    var password = document.getElementById("passwordField").value;
    var confirmPassword = document.getElementById("confirmPasswordField").value;


    if (firstname.length == 0)
    {
        valid = false;
        producePrompt("First Name credentials are required", "firstnamePrompt", "red");
        return false;
    }
    else if(!firstname.match(/^[A-Za-z]*\s{0}[A-Za-z]*$/))
    {
        valid = false;
        producePrompt("Letters only and no spaces allowed!", "firstnamePrompt", "red");
        return false;
    }else {
        valid = true;
        producePrompt("Welcome " + firstname, "firstnamePrompt", "green");
    }

    if (lastname.length == 0)
    {
        valid = false;
        producePrompt("Last Name credentials are required", "lastnamePrompt", "red");
        return false;
    }

    else if(!lastname.match(/^[A-Za-z]*\s{0}[A-Za-z]*$/))
    {
        valid = false;
        producePrompt("Letters only and no spaces allowed!", "lastnamePrompt", "red");
        return false;
    }else{
        valid = true;

    }

    if (!email.match(/^[_\.0-9a-zA-Z-]+@([0-9a-zA-Z][0-9a-zA-Z-]+\.)+[a-zA-Z]{2,6}$/)) {
        valid = false;
        producePrompt("Email is not valid", "emailPrompt", "red");
        return false;
    } else {
        valid = true;
        producePrompt("Your email is okay", "emailPrompt", "green");

    }

    if(password.length == 0)
    {
        valid = false;
        producePrompt("Password is required", "passwordPrompt", "red");
        return false;
    }

    else if (password != confirmPassword){
        valid = false;
        producePrompt("These password do not match", "conPasswordPrompt", "red");
        return false;
    }
    else
    {
        valid = true;
    }


    done(button,valid,captcha);
}

function callback() {
    captcha = true;
    done(button,valid,captcha);
}


function done(btn, vld,cpt) {
    if (vld == true && cpt == true) {
        btn.disabled = false;
    }
}


function validateDetails() {


            button2.disabled = true;

    var firstname = document.getElementById("firstName").value;
    var lastname = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phoneField").value;

    //firstname

    if (firstname.length == 0) {
        valid2 = false;
        producePrompt("First Name credentials are required", "firstNamePrompt", "red");
        return false;
    }
    else if (!firstname.match(/^[A-Za-z]*\s{0}[A-Za-z]*$/)) {
        valid2 = false;
        producePrompt("Letters only and no spaces allowed!", "firstNamePrompt", "red");
        return false;
    } else {
        valid2 = true;
        producePrompt("Welcome " + firstname, "firstNamePrompt", "green");

    }

    //lastname

    if (lastname.length == 0) {
        valid2 = false;
        producePrompt("Last Name credentials are required", "lastNamePrompt", "red");
        return false;
    }

    else if (!lastname.match(/^[A-Za-z]*\s{0}[A-Za-z]*$/)) {
        valid2 = false;
        producePrompt("Letters only and no spaces allowed!", "lastNamePrompt", "red");
        return false;
    } else {
        valid2 = true;
        producePrompt("Welcome " + firstname + " " + lastname, "lastNamePrompt", "green");
    }

    //Email

    if (!email.match(/^[_\.0-9a-zA-Z-]+@([0-9a-zA-Z][0-9a-zA-Z-]+\.)+[a-zA-Z]{2,6}$/)) {
        valid2 = false;
        producePrompt("Email is not valid", "emailPrompt", "red");
        return false;
    } else {
        valid2 = true;
        producePrompt("Your email is okay", "emailPrompt", "green");

    }


    //phone

    if (!phone.match(/^(((\+44\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\+44\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\+44\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?\#(\d{4}|\d{3}))?$/))
    {
        valid2 = false;
        producePrompt("Please enter a UK phone number", "phonePrompt", "red");
        return false;
    } else if(phone.match(/^(((\+44\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\+44\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\+44\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?\#(\d{4}|\d{3}))?$/))
    {
        valid2 = true;
        producePrompt("Your number is okay", "phonePrompt", "green");

    }
    //alert(valid2);
    done(button2,valid2,true);

}





function validateAddresses() {

    button3.disabled =  true;

    var street = document.getElementById("streetNameField").value;
    var postcode = document.getElementById("postCodeField").value;
    var county = document.getElementById("countyField").value;
    var city = document.getElementById("cityField").value;


    //streetname

    if(street.length == 0)
    {
        valid3 = false;
        producePrompt("This field cannot be empty please fill it", "streetPrompt", "red");
        return false;
    }else {
        valid3 = true;
        producePrompt("Validation is okay", "streetPrompt", "green");
    }


    //postcode

    if(!postcode.match(/([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9]?[A-Za-z]))))\s?[0-9][A-Za-z]{2})/)) {
        valid3 = false;
        producePrompt("postcode is not valid", "postCodePrompt", "red");
        return false;
    }else {
        valid3 = true;
        producePrompt("postcode is okay", "postCodePrompt", "green");
    }


    if(city.length == 0)
    {
        valid3 = false;
        producePrompt("This field cannot be empty", "cityPrompt", "red");
        return false;
    }
    else if (!city.match(/^[A-Za-z]*\s{0}[A-Za-z]*$/)) {
        valid3 = false;
        producePrompt("Letters only!", "cityPrompt", "red");
        return false;
    } else {
        valid3 = true;
        producePrompt("City is validated", "cityPrompt", "green");

    }
    done(button3,valid3,true);



}


function validateAd() {

    button4.disabled =  true;

    var title = document.getElementById("placementTitle").value;
    var salary = document.getElementById("placementSalary").value;
    var type = document.getElementById("placementType").value;
    var location = document.getElementById("placementLocation").value;

    if (title.length == 0) {
        valid4 = false;
        producePrompt("First Name credentials are required", "titlePrompt", "red");
        return false;
    }
    else if (!title.match(/[A-Za-z][-]/)) {
        valid4 = false;
        producePrompt("Letters only!", "titlePrompt", "red");
        return false;
    } else {
        valid4 = true;
        producePrompt("valid checked", "titlePrompt", "green");

    }

    if (salary.length == 0) {
        valid4 = false;
        producePrompt("Salary is required", "salaryPrompt", "red");
        return false;
    }
    else if (!salay.match(/^[0-9]{1,2}([,.][0-9]{1,2})?$/)) {
        valid4 = false;
        producePrompt("Letters only!", "salaryPrompt", "red");
        return false;
    } else {
        valid4 = true;
        producePrompt("valid checked", "salaryPrompt", "green");

    }

    if (type.length == 0) {
        valid4 = false;
        producePrompt("Type of placement is required", "typePrompt", "red");
        return false;
    }
    else if (!type.match(/[A-Za-z][-]/)) {
        valid4 = false;
        producePrompt("Letters only!", "typePrompt", "red");
        return false;
    } else {
        valid4 = true;
        producePrompt("valid checked", "typePrompt", "green");

    }

    if (location.length == 0) {
        valid4 = false;
        producePrompt("Location of placement is required", "locaitonPrompt", "red");
        return false;
    }
    else if (!location.match(/[A-Za-z][-]/)) {
        valid4 = false;
        producePrompt("Letters only!", "locationPrompt", "red");
        return false;
    } else {
        valid4 = true;
        producePrompt("valid checked", "locationPrompt", "green");

    }

    done(button4,valid4,true);

}

function producePrompt(message, promptLocation, color) {
    document.getElementById(promptLocation).innerHTML = message;
    document.getElementById(promptLocation).style.color = color;


}





