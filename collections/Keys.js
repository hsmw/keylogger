Keys = new Mongo.Collection('keys')

KeySchema = new SimpleSchema({
    number: {
        type: Number,
        label: "Key Number",
        unique: true,
        min: 0,
        max: 999999999
    },
    name: {
        type: String,
        label: "Key Name",
        min: 3,
        max: 128
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
        },
        optional: true
    }
})

Keys.attachSchema(KeySchema)