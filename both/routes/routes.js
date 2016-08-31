FlowRouter.route('/', {
    name: 'register',
    action() {
        BlazeLayout.render('applicationLayout', {
            header: 'Header',
            body: 'register',
            footer: 'Footer'
        })
    }
})

FlowRouter.route('/keys', {
    name: 'keys',
    action() {
        BlazeLayout.render('applicationLayout', {
            header: 'Header',
            body: 'keys',
            footer: 'Footer'
        })
    }
})

FlowRouter.route('/keys/:number', {
    name: 'key',
    action() {
        BlazeLayout.render('applicationLayout', {
            header: 'Header',
            body: 'key',
            footer: 'Footer'
        })
    }
})

FlowRouter.route('/employees', {
    name: 'employees',
    action() {
        BlazeLayout.render('applicationLayout', {
            header: 'Header',
            body: 'employees',
            footer: 'Footer'
        })
    }
})

FlowRouter.route('/employees/:empId', {
    name: 'employee',
    action: function(params, queryParams) {
        BlazeLayout.render('applicationLayout', {
            header: 'Header',
            body: 'employee',
            footer: 'Footer'
        })
    }
});

FlowRouter.route('/trainings', {
    name: 'trainings',
    action() {
        BlazeLayout.render('applicationLayout', {
            header: 'Header',
            body: 'trainings',
            footer: 'Footer'
        })
    }
})

FlowRouter.route('/transactions', {
    name: 'transactions',
    action() {
        BlazeLayout.render('applicationLayout', {
            header: 'Header',
            body: 'transactions',
            footer: 'Footer'
        })
    }
})

FlowRouter.route('/rules', {
    name: 'rules',
    action() {
        BlazeLayout.render('applicationLayout', {
            header: 'Header',
            body: 'rules',
            footer: 'Footer'
        })
    }
})

FlowRouter.route('/rules/:name', {
    name: 'rule',
    action() {
        BlazeLayout.render('applicationLayout', {
            header: 'Header',
            body: 'rule',
            footer: 'Footer'
        })
    }
})