Template.Header.helpers({
    active: function() {
        var route = FlowRouter.current().route.name;
        console.log("route name: ",route);
        var active = {
            register: route == "register",
            transactions: route == "transactions",
            keys: route == "keys",
            rules: route == "rules",
            employees: route == "employees",
        };
        return active;
    }
});