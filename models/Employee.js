const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema(
    {
        date_hired: Date,
        department:String,
        position:String,
        status: String,
        family_name:String,
        first_name:String,
        middle_name:String,
        contact_number: String,
        email_address: String,
        birthday: Date,
        religion:String,
        address: String,
        weight: String,
        tin_no:String,
        pagibig_no: String,
        height: String,
        sss_no: String,
        philhealth_no: String,
        civil_status: String,
        spouse_name: String,
        spouse_birthday: Date,
        spouse_no: String,
        spouse_email: String,
        spouse_occupation: String,
        number_of_children: String,
        elementary: String,
        elementary_address: String,
        elementary_year: String,
        secondary:String,
        secondary_address:String,
        secondary_year: String,
        tertiary:String,
        tertiary_address:String,
        course: String,
        tertiary_year: String,
        emergency_name: String,
        emergency_address: String,
        emergency_relationship: String,
        emergency_number: String
    }

);

const Employee = mongoose.model('Employee', EmployeeSchema);

module.exports = Employee;
