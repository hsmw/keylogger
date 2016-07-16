Template.keys.onCreated(function() {
    var self = this;
    self.autorun(function() {
        self.subscribe('keys');
    })
});

Template.keys.helpers({
    keys: function() {
        return Keys.find();
    }
});