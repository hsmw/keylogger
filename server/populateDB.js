Meteor.startup(function(){
    var faker = require('faker');

    function createKeys(count) {
        let keyCount = count || 10;
        for (var i = 0; i < KeyCount; i++) {
            Keys.insert({
                number: faker.random.number({min:1000, max:99999}),
            });
        }
    }

    function createEmployees(count) {
        let empCount = count || 10;
        for (var i = 0; i < EmpCount; i++) {
            Employees.insert({
                name: faker.name.findName(),
                number: faker.random.number({min:100, max:50000}) + faker.random.arrayElement(["N","V","C"])
            });
        }
    }

    function createTransactions(count) {
        let tranCount = count || 100;

        // Get random key
        var keyCount = Keys.count(),
            randKeyIndex = faker.random.number({min:1,max:keyCount}),
            randKey = Keys.find().skip(randIndex).limit(1);

        // Get random employee
        var empCount = Employees.count(),
            randEmpIndex = faker.random.number({min:1,max:empCount}),
            randEmp = Employees.find().skip(randIndex).limit(1);

        for (var i = 0; i < tranCount; i++) {
            Transactions.insert({
                key: randKey.number,
                employee: randEmp.empId
            });
        }
    }

    createKeys();
    createEmployees();
    createTransactions();
});