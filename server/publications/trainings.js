Meteor.publish('trainings', function() {
    return Trainings.find({},{fields:{title:1,code:1,type:1}})
})