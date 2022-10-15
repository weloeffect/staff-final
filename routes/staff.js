const router = require('express').Router();

let Staff = require('../models/staff');

router.route('/employees').get((req, res) => {
    Staff.find()
    .then(staff => res.json(staff))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/employees/:id').get((req, res) => {
    Staff.findById(req.params.id)
    .then(staff => res.json(staff))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/create').post((req, res) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const age = Number(req.body.age);
    const salary = Number(req.body.salary);

    const newStaff = new Staff({
        firstname,
        lastname,
        age,
        salary
    });
    newStaff.save()
    .then(() => res.json('employee  added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').put((req, res) => {

    Staff.findById(req.params.id)
    .then(staff => {
        staff.firstname = req.body.firstname;
        staff.lastname = req.body.lastname;
        staff.age = Number(req.body.age);
        staff.salary = Number(req.body.salary);

        staff.save()
        .then(() => res.json('employee updated'))
        .catch(err => res.status(400).json('Error: ' + err))

    })
    .catch(err => req.status(400).json('Error: ' + err))
});

router.route('/delete/:id').delete((req, res) => {

    Staff.findByIdAndDelete(req.params.id)
    .then(() => res.json('Employee deleted'))
    .catch(err => res.status(400).json('Error: ' + err))
});



module.exports = router;