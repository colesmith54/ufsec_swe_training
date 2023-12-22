const Employee = require("../model/Employee");

const getAllEmployees = async (req, res) => {
    const employees = await Employee.find().exec();
    if (!employees) {
        return res.status(204).json({ message: "No employees found" });
    }
    res.json(employees);
};

const createNewEmployee = async (req, res) => {
    if (!req?.body?.firstname || !req?.body?.lastname) {
        return res
            .status(400)
            .json({ message: "First and last names are required." });
    }

    try {
        const result = await Employee.create({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
        });
        res.json(result);
        res.status(201).json({ message: "Employee created" });
    } catch (err) {
        console.error(err);
    }
};

const updateEmployee = async (req, res) => {
    if (!req?.body?.id) {
        return res.status(400).json({ message: "Employee ID is required." });
    }

    const employee = await Employee.findOne({ id: req.body.id }).exec();
    if (!employee) {
        return res
            .status(204)
            .json({ message: `Not employees matches ID ${req.body.id}.` });
    }
    if (req.body?.firstname) employee.firstname = req.body.firstname;
    if (req.body?.lastname) employee.lastname = req.body.lastname;
    const result = await employee.save();
    res.json(result);
};

const deleteEmployee = async (req, res) => {
    if (!req?.body?.id) {
        return res.status(400).json({ message: "Employee ID is required." });
    }
    const employee = await Employee.findOne({ id: req.body.id }).exec();
    if (!employee) {
        return res
            .status(204)
            .json({ message: `Not employees matches ID ${req.body.id}.` });
    }
    const result = await employee.deleteOne({ _id: req.body._id });
    res.json(result);
};

const getEmployee = async (req, res) => {
    if (!req?.params?.id) {
        return res.status(400).json({ message: "Employee ID is required." });
    }
    const employee = await Employee.findOne({ id: req.params.id }).exec();
    if (!employee) {
        return res
            .status(204)
            .json({ message: `Not employees matches ID ${req.params.id}.` });
    }
    res.json(employee);
};

module.exports = {
    getAllEmployees,
    createNewEmployee,
    updateEmployee,
    deleteEmployee,
    getEmployee,
};
