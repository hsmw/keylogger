Keys = new Mongo.Collection('keys')

Keys.allow({
    insert: function(userId, doc) {
        return Meteor.user() == "admin"
    }
})

KeySchema = new SimpleSchema({
    number: {
        type: Number,
        label: "Key Number",
        unique: true
    },
    name: {
        type: String,
        label: "Key Name"
    },
    createdAt: {
        type: Date,
        label: "Created At",
        autoValue: function() {
            if (this.isInsert) {
                return new Date()
            }
        },
        autoform: {
            type: "hidden"
        }
    }
})

Keys.attachSchema(KeySchema)