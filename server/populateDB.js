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

    Trainings.remove({}, (err,numRm) => {
        if (err) {
            console.log("Error: ",err)
        } else {
            console.log("Training removed: ",numRm)
        }
    })

    let count = 10

    for (var i = 0; i < count; i++) {
        let keyNumber = faker.random.number({min:1000, max:99999}),
            keyName = faker.name.jobArea(),
            empName = faker.name.findName(),
            empId = faker.random.number({min:100, max:50000}) + faker.random.arrayElement(["N","V","C"]),
            courseNum = faker.random.number({min:1,max:999999}),
            rulesName = faker.name.jobType()

        if (courseNum.length < 6) {
            courseNum = new Array(6 - courseNum.length + 1).join(0) + courseNum
        }

        let courseCode = faker.random.arrayElement(["AD","FN"]) + courseNum,
            courseType = faker.random.arrayElement(["OJ","CR","CB"])

        Keys.insert({
            number: keyNumber,
            name: keyName,
            rules: [rulesName]
        })

        Employees.insert({
            name: empName,
            empId: empId,
            training: [courseCode]
        })

        Transactions.insert({
            key: keyNumber,
            employee: empId
        })

        Rules.insert({
            name: rulesName
        })

        Rules.update({
            name: rulesName
        },{
            $set: {
                training: [
                    courseCode
                ]
            }
        })

        Trainings.insert({
            title: faker.name.jobDescriptor(),
            code: courseCode,
            type: courseType
        })
    }
})