const studentModel = require("../model/studentModel.js");
const validator = require("../validator/validator.js");
const { uploadFile } = require("./aws")


const createStudent = async function (req, res) {
    try {
        let data = req.body
        let file = req.files

        if (!validator.isValidRequestBody(data) && (file == undefined || file.length == 0)) {
            return res.status(400).send({ status: false, message: "Plz enter some data." })
        }

        let { name, Class, rollNo, schoolName, district, pinCode } = data

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

          //saving aws link of Student Image
      console.log(file)
      if (file && file.length > 0) {
          
          let uploadedFileURL = await uploadFile(file[0])
          let uploadedFileURL2 = await uploadFile(file[1])
          
          data["studentImage"] = uploadedFileURL
          data["identity"] = uploadedFileURL2
      }
      else {
          return res.status(400).send({ status: false, message: "No file found" })
      }


        let savedData = await studentModel.create(data)
        return res.status(201).send({ status: true, data: savedData })

    } catch (error) {
        res.status(500).send({ status: false, message: error.message });
    }
}
module.exports = { createStudent }