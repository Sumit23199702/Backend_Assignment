const studentModel = require("../model/studentModel.js");
const validator = require("../validator/validator.js");


const createStudent = async function (req, res) {
    try {
        let data = req.body
        if (!validator.isValidRequestBody(data)) return res.status(400).send({ status: false, message: "Plz enter some data." })

        let { name, Class, rollNo, studentImage, identity, schoolName, district, pinCode } = data

        // Validation for Name-----
        if (!validator.isValid(name)) {
            return res.status(400).send({ status: false, msg: "Name is required" })
        }

        if (!validator.isValidName.test(name)) {
            return res.status(400).send({ status: false, msg: "Plz provide a valid Name" })
        }

        // Validation for Class-----
        if (!validator.isValid(Class)) {
            return res.status(400).send({ status: false, msg: "Class is required" })
        }

        // Validation for rollNumber-----
        if (!validator.isValid(rollNo)) {
            return res.status(400).send({ status: false, msg: "RollNumber is required" })
        }

        let uniqueRollNo = await studentModel.findOne({ rollNo })
        if (uniqueRollNo) {
            return res.status(400).send({ status: false, msg: "This RollNumber Already Exist" })
        }

        // Validation for Student Image-----
        if (!validator.isValid(studentImage)) {
            return res.status(400).send({ status: false, msg: "Student Image is required" })
        }

        let uniqueImage = await studentModel.findOne({ studentImage })
        if (uniqueImage) {
            return res.status(400).send({ status: false, msg: "This Image Already Exist" })
        }

        // Validation for Identity-----
        if (!validator.isValid(identity)) {
            return res.status(400).send({ status: false, msg: "Identity is required" })
        }

        let uniqueIdentity = await studentModel.findOne({ identity })
        if (uniqueIdentity) {
            return res.status(400).send({ status: false, msg: "This Identity Already Exist" })
        }

        // Validation for School Name-----
        if (!validator.isValid(schoolName)) {
            return res.status(400).send({ status: false, msg: "Name of School is required" })
        }

        if (!validator.isValidName.test(schoolName)) {
            return res.status(400).send({ status: false, msg: "Plz provide a valid School Name" })
        }

        // Validation for District-----
        if (!validator.isValid(district)) {
            return res.status(400).send({ status: false, msg: "District is required" })
        }

        // Validation for Pincode-----
        if (!validator.isValid(pinCode)) {
            return res.status(400).send({ status: false, msg: "Pincode is required" })
        }

        if (!validator.isValidPinCode.test(pinCode)) {
            return res.status(400).send({ status: false, msg: "Plz provide a valid Pincode" })
        }


        let savedData = await studentModel.create(data)
        return res.status(201).send({ status: true, data: savedData })

    } catch (error) {
        res.status(500).send({ status: false, message: error.message });
    }
}
module.exports = { createStudent }