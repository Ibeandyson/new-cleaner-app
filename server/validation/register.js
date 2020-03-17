const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data){
    let errors = {}

    // converting empty firlds to an string so we can use validator functions
    data.username = !isEmpty(data.username) ? data.username: "";
    data.email = !isEmpty(data.email) ? data.email: "";
    data.phone = !isEmpty(data.phone) ? data.phone: "";
    data.address = !isEmpty(data.address) ? data.address: "";
    data.password = !isEmpty(data.password) ? data.password: "";
    data.password2 = !isEmpty(data.password2) ? data.password2: "";

    //username check
    if (Validator.isEmpty(data.username)){
        errors.username ="user name field is empty";
    }
    
    //email check
    if (Validator.isEmpty(data.email)){
        errors.email ="email field is empty";
    }else if (!Validator.isEmail(data.email)){
        errors.email = "email is invalid";
    }
    // address check
    if(Validator.isEmpty(data.address)){
        errors.address = "address field is empty";
    }
    //phone check
    if (Validator.isEmpty(data.phone)){
        errors.phone = "phone field is empty";
    }
    // password check
    if (Validator.isEmpty(data.password)){
        errors.password = "password field is empty"
    }
    if (Validator.isEmpty(data.password2)){
        errors.password2 = "comfirm password field is required";
    }
    if (!Validator.isLength(data.password, {min:8, max:30})){
        errors.password = "password must be least 8 characters";
    }
    if(!Validator.equals(data.password, data.password2)){
        errors.password= "passwords must match";
    }
    return{
        errors,
        isValid:isEmpty(errors)
    };
};

