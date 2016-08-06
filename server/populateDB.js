Meteor.startup(function(){

    Keys.remove({}, (err,numRm) => {
        if (err) {
            console.log("Error: ",err)
        } else {
            console.log("Keys removed: ",numRm)
        }
    })

    Employees.remove({}, (err,numRm) => {
        if (err) {
            console.log("Error: ",err)
        } else {
            console.log("Employees removed: ",numRm)
        }
    })

    Transactions.remove({}, (err,numRm) => {
        if (err) {
            console.log("Error: ",err)
        } else {
            console.log("Transactions removed: ",numRm)
        }
    })

    Rules.remove({}, (err,numRm) => {
        if (err) {
            console.log("Error: ",err)
        } else {
            console.log("Rules removed: ",numRm)
        }
    })

    let count = 10

    for (var i = 0; i < count; i++) {
        let keyNumber = faker.random.number({min:1000, max:99999}),
            keyName = faker.name.jobArea(),
            empName = faker.name.findName(),
            empId = faker.random.number({min:100, max:50000}) + faker.random.arrayElement(["N","V","C"])

        Keys.insert({
            number: keyNumber,
            name: keyName
        })

        Employees.insert({
            name: empName,
            empId: empId
        })

        Transactions.insert({
            key: keyNumber,
            employee: empId
        })

        Rules.insert({
            name: faker.name.jobType()
        })
    }
})