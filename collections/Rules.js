Rules = new Mongo.Collection('rules');

Rules.allow({
    insert: function(userId, doc) {
        return Meteor.user() == "admin";
    }
})

RuleSchema = new SimpleSchema({
    name: {
        type: String,
        label: "Rule Name"
    },
    createdAt: {
        type: Date,
        label: "Created At",
        autoValue: function() {
            if (this.isInsert) {
                return new Date();
            }
        },
        autoform: {
            type: "hidden"
        }
    }
})

Rules.attachSchema(RuleSchema)