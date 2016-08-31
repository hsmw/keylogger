Template.trainings.onCreated(function() {
    var self = this
    self.autorun(function() {
        self.subscribe('trainings')
    })
})

Template.trainings.helpers({
    training: function() {
        let result = Trainings.find({},{
                        fields:{
                            title:1,
                            code:1,
                            type:1
                        }
                    }).map(function(obj) {
                        obj.href = "http://www-esh.fnal.gov/pls/default/schedule.show_course_details?this_fermi_id=0&this_course_code="+obj.code+"&this_instr_type="+obj.type
                        return obj
                    })

        return result
    }
})