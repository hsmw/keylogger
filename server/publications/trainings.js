Meteor.publish('trainings', function() {
    return Trainings.find({},{fields:{'name':1}})
})