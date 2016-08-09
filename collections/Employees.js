Employees = new Mongo.Collection('employees')

Employees.deny({
    insert() { return true },
    update() { return true },
    remove() { return true }
})

EmployeeSchema = new SimpleSchema({
    name: {
        type: String,
        label: "Employee Name"
    },
    empId: {
        type: String,
        label: "Employee ID",
        unique: true
    },
    createdAt: {
        type: Date,
        label: "Created At",
        autoValue: function() {
            if (this.isInsert) {
                return new Date();
            }
        },
        autoform: {
            type: "hidden"
        }
    }
})

Employees.attachSchema(EmployeeSchema)