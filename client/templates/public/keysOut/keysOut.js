Template.keysOut.onCreated(function() {
    var self = this;
    self.autorun(function() {
        self.subscribe('transactions');
    })
})

Template.keysOut.helpers({
    keysOut: function() {
        return Transactions.find();
    }
});