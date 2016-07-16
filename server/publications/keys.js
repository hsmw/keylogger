Meteor.publish('keys', function() {
    return Keys.find();
});

Meteor.publish('transactions', function() {
    return Transactions.find();
})