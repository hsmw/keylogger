Meteor.publish('rules', function() {
    return Rules.find({},{fields:{name:1,training:1}})
})