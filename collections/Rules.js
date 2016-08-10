Rules = new Mongo.Collection('rules')

RuleSchema = new SimpleSchema({
    name: {
        type: String,
        label: "Rule Name",
        min: 3,
        max: 128
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
        },
        optional: true
    }
})

Rules.attachSchema(RuleSchema)