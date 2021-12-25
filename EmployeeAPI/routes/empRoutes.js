const express = require("express");
const router = express.Router();
const Employee = require('../model/empSchema');


router.get('/', async (req,res) => {
    try{
        const employees = await Employee.find()
        res.json(employees);
    }
    catch(err) {
        console.log("error: ", err)
        res.send("error" + err);
    }
});

router.post('/', async(req,res) => {
    const employee = new Employee({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        profession: req.body.profession,
        salary: req.body.salary,
        password: req.body.password
    })
    try{
        const e1 = await employee.save()
        res.json(e1)
    }
    catch(err){
        console.log("error: ", err)
        res.send("error" + err)
    };
});

router.get('/:id',async (req,res) => {
    
    try{
        const employee = await Employee.findById(req.params.id)
        console.log("get request for a emp")
        res.json(employee)
    }
    catch(err) {
        console.log("error: ", err)
        res.send(res.send("error" + err))
    };
});

router.put('/:id', async (req,res) => {
    
    try{
        const employee = await Employee.findById(req.params.id);
        employee.name = req.body.name;
        employee.email= req.body.email;
        employee.phone= req.body.phone;
        employee.profession= req.body.profession;
        employee.salary= req.body.salary;
        employee.password= req.body.password;
        const e1 = await employee.save();
        res.json(e1);
    }
    catch(err) {
        console.log("error: ", err)
        res.send("error" + err)
    };
});

router.delete('/:id',async (req,res) => {
    
    try{
        const employee = await Employee.findById(req.params.id);
        const e1 = employee.remove();
        res.json(e1)
    }
    catch(err) {
        console.log("error: ", err)
        res.send("error" + err)
    };
});


module.exports = router;