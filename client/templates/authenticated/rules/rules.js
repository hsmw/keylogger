Template.rules.onCreated(function() {
    var self = this
    self.autorun(function() {
        self.subscribe('rules')
    })
})

Template.rules.helpers({
    rule: function() {
        return Rules.find()
    }
})