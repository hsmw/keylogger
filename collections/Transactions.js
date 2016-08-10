Transactions = new Mongo.Collection('transactions')

TransactionSchema = new SimpleSchema({
    key: {
        type: Number,
        label: "Key Number",
        unique: true,
        min: 0,
        max: 999999999
    },
    employee: {
        type: String,
        label: "Employee ID",
        optional: function() {
            return !this.isInsert
        },
        regEx: /^[0-9]+[NCV]$/,
        min: 4,
        max: 128
    },
    checkedOut: {
        type: Date,
        label: "Checked Out",
        autoValue: function() {
            if (this.isInsert) {
                return new Date()
            }
        },
        autoform: {
            type: "hidden"
        },
        optional: true
    },
    checkedIn: {
        type: Date,
        label: "Checked In",
        autoValue: function() {
            if (this.isUpdate) {
                return new Date()
            }
        },
        autoform: {
            type: "hidden"
        },
        optional: true
    }
})

Transactions.attachSchema(TransactionSchema)