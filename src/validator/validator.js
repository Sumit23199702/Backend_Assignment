const isValidRequestBody = (value) => {
    return Object.keys(value).length > 0
}

const isValid = function (value) {
    if (typeof value === "undefined" || value === null) return false
    if (typeof value === "string" && value.trim().length === 0) return false
    if (typeof value === Number && value.trim().length === 0) return false
    return true
}

const isValidName = (/^[a-zA-Z ]*$/);

const isValidPinCode = (/^[1-9][0-9]{5}$/);


module.exports = {isValidRequestBody, isValid, isValidName, isValidPinCode }
