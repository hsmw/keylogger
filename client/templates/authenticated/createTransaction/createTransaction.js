Template.createTransaction.onCreated(function() {
    var self = this
    self.autorun(function() {
        self.subscribe('keys')
    })
})

Template.createTransaction.events({
    'submit .createTransaction': function(event) {
        var keyNumber = parseInt(event.target.key.value),
            employee = event.target.employee.value,
            checkedOut = Transactions.findOne({keyNumber: keyNumber})

        if (!Keys.findOne({number:keyNumber})) {
            // Future location of bootstrap alert
            console.log("Key number is not valid")
        } else {
            if (checkedOut) {
                console.log("Checked Out")
                Transactions.remove(checkedOut._id)
            } else {
                console.log("Insert")
                Transactions.insert({
                    key: keyNumber,
                    employee: employee,
                    createdAt: new Date()
                })
            }
        }

        return false // Prevents page from redirecting after POST
    }
})
