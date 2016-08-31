Template.key.onCreated(function() {
    let self = this

    self.autorun(function() {
        self.subscribe('keys')
        self.subscribe('rules')
    })
})

Template.key.helpers({
    key: function() {
        let keyNum = parseInt(FlowRouter.getParam("number"))

        let keyArray = Keys.findOne({
                            number: keyNum
                        },{
                            fields:{
                                rules:1
                            }
                        })

        let result = Rules.find({
                    name:{
                        $in: keyArray.rules
                    }
                },{
                    fields:{
                        name:1
                    }
                }).map(function(obj) {
                    return obj
                })

        return result
    }
})