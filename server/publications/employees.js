Meteor.publish('employees', function() {
    return Employees.find({},{fields:{name:1,empId:1,training:1}})
})