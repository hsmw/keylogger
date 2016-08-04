FlowRouter.route('/', {
    name: 'register',
    action() {
        BlazeLayout.render('applicationLayout', {
            header: 'Header',
            body: 'register',
            footer: 'Footer'
        });
    }
});

FlowRouter.route('/keys', {
    name: 'keys',
    action() {
        BlazeLayout.render('applicationLayout', {
            header: 'Header',
            body: 'createKey',
            footer: 'Footer'
        });
    }
});

FlowRouter.route('/employees', {
    name: 'employees',
    action() {
        BlazeLayout.render('applicationLayout', {
            header: 'Header',
            body: 'employees',
            footer: 'Footer'
        });
    }
});

FlowRouter.route('/transactions', {
    name: 'transactions',
    action() {
        BlazeLayout.render('applicationLayout', {
            header: 'Header',
            body: 'transactions',
            footer: 'Footer'
        });
    }
});

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