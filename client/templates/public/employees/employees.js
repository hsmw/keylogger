Template.employees.onCreated(function() {
    var self = this
    self.autorun(function() {
        self.subscribe('employees')
    })
})

Template.employees.helpers({
    employee: function() {
        return Employees.find()
    }
})