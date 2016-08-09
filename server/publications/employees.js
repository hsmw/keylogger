Meteor.publish('employees', function() {
    return Employees.find({},{fields:{'name':1,'empId':1}})
})