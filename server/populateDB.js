Meteor.startup(function(){
    function createKeys(count) {
        let keyCount = count || 10;
        for (var i = 0; i < keyCount; i++) {
            Keys.insert({
                number: faker.random.number({min:1000, max:99999}),
                name: faker.name.jobArea()
            });
        }
    }

    function createEmployees(count) {
        let empCount = count || 10;
        for (var i = 0; i < empCount; i++) {
            Employees.insert({
                name: faker.name.findName(),
                empId: faker.random.number({min:100, max:50000}) + faker.random.arrayElement(["N","V","C"])
            });
        }
    }

    function createTransactions(count) {
        let tranCount = count || 100;

        for (var i = 0; i < tranCount; i++) {
            // Get random key
            var keyCount = Keys.find().count(),
                randKeyIndex = faker.random.number({min:1,max:keyCount}),
                randKey = Keys.find({},{skip:randKeyIndex, limit:1}).fetch();

            // Get random employee
            var empCount = Employees.find().count(),
                randEmpIndex = faker.random.number({min:1,max:empCount}),
                randEmp = Employees.find({},{skip:randEmpIndex, limit:1}).fetch();

            console.log(randKey[0]);
            console.log(randKey[0].number);
            console.log(randEmp[0]);
            console.log(randEmp[0].empId);

            var keyInTran = Transactions.find({key:randKey[0].number}).fetch();

            console.log(keyInTran);

            if (!keyInTran) {
                Transactions.insert({
                    key: randKey[0].number,
                    employee: randEmp[0].empId
                });
            }
        }
    }

    createKeys();
    createEmployees();
    createTransactions();
});