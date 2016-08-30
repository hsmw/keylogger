Template.rule.onCreated(function() {
    var self = this
    self.autorun(function() {
        self.subscribe('rules')
        self.subscribe('trainings')
    })
})

Template.rule.helpers({
    rule: function() {
        let ruleName = FlowRouter.getParam("name")
        console.log(ruleName)
        let ruleArray =  Rules.findOne({
                            name: ruleName
                        },{
                            fields:{
                                training:1
                            }
                        })
        let result = Trainings.find({
                        code:{
                            $in: ruleArray.training
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
        console.log(ruleArray)
        return result
    }
})