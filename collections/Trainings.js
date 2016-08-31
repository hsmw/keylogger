Trainings = new Mongo.Collection('trainings')

Trainings.deny({
    insert() { return true },
    update() { return true },
    remove() { return true }
})

TrainingSchema = new SimpleSchema({
    title: {
        type: String,
        label: "Course Title"
    },
    code: {
        type: String,
        label: "Course Code"
    },
    type: {
        type: String,
        label: "Course Type"
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