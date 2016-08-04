Template.transactions.onCreated(function() {
    var self = this
    self.autorun(function() {
        self.subscribe('transactions')
    })
})

Template.transactions.helpers({
    transactions: function() {
        return Transactions.find();
    }
})