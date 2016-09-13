Template.keys.onCreated(function() {
    let self = this
    self.autorun(function() {
        self.subscribe('keys')
    })
})

Template.keys.helpers({
    key: function() {
        return Keys.find()
    }
})