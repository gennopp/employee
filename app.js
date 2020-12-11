const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const db = mongoose.createConnection('mongodb://localhost/zet_cc_abhishek');
const empRouter = express.Router();
const port = process.env.PORT || 3000;

const Employee = require('./models/empModel');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

empRouter.route('/employees')
  .post((req, res) => {
    const emp = new Employee(req.body);
    console.log(emp);
    emp.save();
    res.json(emp);
  })
  .get((req, res) => {
    //const response = {hello: 'This is my API'};
    Employee.find((err, employees) => {
      if (err) {
        return res.send(err);
      }
      else {
        return res.json(employees);
      }
    });
  });



empRouter.route('/employees/:employeeId')
  .get((req, res) => {

    Employee.findById(req.params.employeeId, (err, employee) => {
      if (err) {
        return res.send(err);
      }
      else {
        return res.json(employee);
      }
    });
  })
  .put((req, res) => {
    Employee.findById(req.params.employeeId, (err, employee) => {
      if (err) {
        return res.send(err);
      }
      else {
        employee.name = req.body.name;
        employee.dob = req.body.dob;
        employee.salary = req.body.salary;
        employee.skills = req.body.skills;
        employee.img = req.body.img;

        employee.save();
        return res.json(employee);
      }
    });
  })
  .delete((req, res) => {
    Employee.findByIdAndRemove(req.params.employeeId, (err) => {
      if(err){
        return res.send(err);
      }
      return res.sendStatus(204);
    });
  })


app.use('/api', empRouter);

app.get('/', (req, res) => {
  res.send("Welcome");
});

app.listen(port, () => {
  console.log('Running on port ' + port);
});
