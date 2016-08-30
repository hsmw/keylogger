Template.employee.onCreated(function() {
    let self = this
    self.autorun(function() {
        self.subscribe('employees'),
        self.subscribe('trainings')
    })
})

Template.employee.helpers({
    employee: function() {
        let empId = FlowRouter.getParam("empId")
        let empArray = Employees.findOne({
                            empId: empId
                        },{
                            fields:{
                                training:1
                            }
                        })
        let result = Trainings.find({
                        code:{
                            $in: empArray.training
                        }
                    },{
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