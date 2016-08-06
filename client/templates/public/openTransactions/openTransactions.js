Template.openTransactions.onCreated(function() {
    var self = this;
    self.autorun(function() {
        self.subscribe('transactions')
    })
})

Template.openTransactions.helpers({
    transaction: function() {
        return Transactions.find()
    }
})