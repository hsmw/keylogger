Meteor.publish('transactions', function() {
    return Transactions.find({},{fields:{key:1,employee:1,checkedOut:1,checkedIn:1}})
})