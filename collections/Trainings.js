Trainings = new Mongo.Collection('trainings')

Trainings.deny({
    insert() { return true },
    update() { return true },
    remove() { return true }
})

TrainingSchema = new SimpleSchema({
    name: {
        type: String,
        label: "Training Name"
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

Trainings.attachSchema(TrainingSchema)