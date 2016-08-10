Meteor.methods({
    newKey: function(doc) {
        if (Meteor.user().username === "admin") {
            // Important server-side check for security and data integrity
            KeySchema.validate(doc)

            Keys.insert({
                number: doc.number,
                name: doc.name
            })
        } else {
            //This needs user feedback
            console.log("ERROR: User '"+Meteor.user().username+"' not allowed to create a new key.")
        }
    }
})