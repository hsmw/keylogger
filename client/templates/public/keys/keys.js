Template.keys.onCreated(function() {
    var self = this;
    self.autorun(function() {
        self.subscribe('keys');
    })
});

Template.keys.helpers({
    key: function() {
        return Keys.find();
    }
});