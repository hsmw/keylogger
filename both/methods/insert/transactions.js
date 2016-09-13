Meteor.methods({
    commitTransaction: function(mod,doc) {
        if (!!Meteor.user()) { //This will need to be changed for MCR
            // Important server-side check for security and data integrity

            if (mod.$set) { // Update
                TransactionSchema.validate(mod,{modifier: true})
            } else { // Insert
                TransactionSchema.validate(mod)
            }

            console.log(mod)
            console.log(doc)

            var keyNumber = parseInt(doc.key),
                employee = doc.employee,
                checkedOut = Transactions.findOne({key: keyNumber},{fields:{key:0,employee:0,checkedOut:0,checkedIn:0}})

            console.log("keyNumber: ",keyNumber)
            console.log("employee: ",employee)
            console.log("checkedOut: ",checkedOut)

            if (!Keys.findOne({number:keyNumber})) {
                // Future location of bootstrap alert
                console.log("Key number is not valid")
            } else if (!employee) {
                console.log("Update!")
                //Transactions.update(Transactions.findOne({key: keyNumber})._id)
            } else {
                console.log("Insert!")
                Transactions.insert({
                    key: doc.key,
                    employee: doc.employee
                })
            }
        } else {
            //This needs user feedback
            console.log("ERROR: User '"+Meteor.user().username+"' not allowed to create a new transaction.")
        }
    }
})
