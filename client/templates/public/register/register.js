Template.register.onCreated(function() {
    var self = this
    self.autorun(function() {
        self.subscribe('keys')
    })
})
