Template.createTransaction.onCreated(function() {
    let self = this
    self.autorun(function() {
        self.subscribe('transactions')
    })
})

Template.createTransaction.helpers({
    currentUser: function() {
        return Meteor.user()
    },
    typeAction: upsert,
    docAction: nullForInsert
})

Template.createTransaction.events({
    'submit'(event) {
        event.preventDefault()

        let dummy1 = nullForInsert()
            dummy2 = upsert()
    }
})

let empExists = function() {
    let empId = AutoForm.getFieldValue("employee", "upsertTransaction"),
        emp = Transactions.findOne({employee:empId})

    if (!!empId && !emp) { // employee is entered but not returned
        alert("Employee is not in database") // Future bootstrap notify
    } else {
        console.log("empId: ",empId)
        console.log("emp: ",emp)
        console.log("!!emp: ",!!emp)

        return !!emp
    }
}

let nullForInsert = function() {
    let doc = null

    if (!empExists()) { // employee was entered
        let keyNum = AutoForm.getFieldValue("key", "upsertTransaction"),
            doc = Transactions.findOne({key:keyNum})
    }

    console.log("doc: ",doc)

    return doc //null for insert
}

let upsert = function() {
    let type = "update"

    if (empExists()) { // employee was entered
        console.log("empExists")
        type = "insert"
    }

    console.log("type: ",type)

    return type
}