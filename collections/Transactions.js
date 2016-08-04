Transactions = new Mongo.Collection('transactions');

Transactions.allow({
    insert: function(userId, doc) {
        return !!userId;
    }
});

TransactionSchema = new SimpleSchema({
    key: {
        type: Number,
        label: "Key Number",
        unique: true
    },
    employee: {
        type: String,
        label: "Employee ID",
        optional: function() {
            return !this.isInsert;
        }
    },
    checkedOut: {
        type: Date,
        label: "Checked Out",
        autoValue: function() {
            if (this.isInsert) {
                return new Date();
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
                return new Date();
            }
        },
        autoform: {
            type: "hidden"
        },
        optional: true
    }
})

Transactions.attachSchema(TransactionSchema)