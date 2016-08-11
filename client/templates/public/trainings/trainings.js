Template.trainings.onCreated(function() {
    var self = this
    self.autorun(function() {
        self.subscribe('trainings')
    })
})

Template.trainings.helpers({
    training: function() {
        return Trainings.find()
    }
})