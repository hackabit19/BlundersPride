const Validator = require("validator");
const isEmpty = require("./is-empty");

const userTypes = require("../static/userTypes").userTypes;
const cityList = require("../static/cityList").cityList;
const stateList = require("../static/stateList").stateList;

console.log(userTypes);

const validateRegisterInput = data => {
    let errors = {};

    data.name = isEmpty(data.name) ? "" : data.name;
    if (!Validator.isLength(data.name, { min: 2, max: 40 })) {
        errors.name = "Name must be between 2 and 40 chars";
    }
    if (Validator.isEmpty(data.name)) {
        errors.name = "Name field is required";
    }

    data.userType = isEmpty(data.userType) ? "" : data.userType;

    if (
        userTypes.filter(type => Validator.equals(type, data.userType))
            .length === 0
    ) {
        errors.userType = "Invalid User Type";
    }

    if (Validator.isEmpty(data.userType)) {
        errors.userType = "User Type field is required";
    }

    data.email = isEmpty(data.email) ? "" : data.email;
    if (!Validator.isEmail(data.email)) {
        errors.email = "Invalid Email";
    }
    if (Validator.isEmpty(data.email)) {
        errors.email = "Email field is required";
    }

    data.password = isEmpty(data.password) ? "" : data.password;

    if (!Validator.isLength(data.password, { min: 2, max: 50 })) {
        errors.password = "Password must be between 2 and 50 chars";
    }
    if (Validator.isEmpty(data.password)) {
        errors.password = "Password field is required";
    }

    data.confirmPassword = isEmpty(data.confirmPassword)
        ? ""
        : data.confirmPassword;
    if (!Validator.equals(data.password, data.confirmPassword)) {
        errors.confirmPassword = "Passwords do not match";
    }

    if (Validator.isEmpty(data.confirmPassword)) {
        errors.confirmPassword = "Confirm Password field is required";
    }

    data.phoneNumber = isEmpty(data.phoneNumber) ? "" : data.phoneNumber;
    if (!Validator.isLength(data.phoneNumber, { min: 10, max: 10 })) {
        errors.phoneNumber = "Phone Number contain 10 digits";
    }

    if (!Validator.isNumeric(data.phoneNumber)) {
        errors.phoneNumber = "Phone Number must contain numbers";
    }

    if (Validator.isEmpty(data.phoneNumber)) {
        errors.phoneNumber = "Phone Number field is required";
    }

    data.city = isEmpty(data.city) ? "" : data.city;

    if (
        cityList.filter(city => Validator.equals(city, data.city)).length === 0
    ) {
        errors.city = "Invalid city";
    }
    if (Validator.isEmpty(data.city)) {
        errors.city = "City field is required";
    }

    data.state = isEmpty(data.state) ? "" : data.state;

    if (
        stateList.filter(state => Validator.equals(state, data.state))
            .length === 0
    ) {
        errors.state = "Invalid state";
    }

    if (Validator.isEmpty(data.state)) {
        errors.state = "State field is required";
    }

    if (Validator.equals(data.userType, "common")) {
        data.bloodGroup = isEmpty(data.bloodGroup) ? "" : data.bloodGroup;
        if (Validator.isEmpty(data.bloodGroup)) {
            errors.bloodGroup = "Blood Group field is required";
        }
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};

module.exports = validateRegisterInput;
