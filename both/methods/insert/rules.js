Meteor.methods({
    newRule: function(doc) {
        if (Meteor.user().username === "admin") {
            // Important server-side check for security and data integrity
            RuleSchema.validate(doc)

            Rules.insert({
                name: doc.name
            })
        } else {
            //This needs user feedback
            console.log("ERROR: User '"+Meteor.user().username+"' not allowed to create a new rule.")
        }
    }
})