Meteor.publish('keys', function() {
    return Keys.find({},{fields:{number:1,name:1,rules:1}})
})