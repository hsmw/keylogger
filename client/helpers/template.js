Template.Header.onRendered(function () {
    /*****************************************************************************/
    /* This helper adds an active class to bootstrap navbar link that is the current page */
    /*****************************************************************************/
    var path = FlowRouter.current().route.path;
    var paths = path.replace(/(\/[A-Za-z\-]+)/g, function(m, $1, idx, str) {
        return str.slice(0, idx || str.length).replace(/\/$/, '') + ',';
    })
        .replace(/\,$/, '')
        .split(',');

    // find only links in bootstrap navbar
    var $navbarAnchors = $('.navbar a');

    paths.forEach(function(item) {
        $navbarAnchors.parent("li").removeClass('active');
        $navbarAnchors.removeClass('active').filter('[href="' + item + '"]').parent("li").addClass('active');
    });
});

Template.registerHelper('active', () => {
    FlowRouter.watchPathChange();
    /*****************************************************************************/
    /* This helper adds an active class to bootstrap navbar link that is the current page */
    /*****************************************************************************/
    var path = FlowRouter.current().route.path;
    var paths = path.replace(/(\/[A-Za-z\-]+)/g, function(m, $1, idx, str) {
        return str.slice(0, idx || str.length).replace(/\/$/, '') + ',';
    })
        .replace(/\,$/, '')
        .split(',');

    // find only links in bootstrap navbar
    var $navbarAnchors = $('.navbar a');

    paths.forEach(function(item) {
        $navbarAnchors.parent("li").removeClass('active');
        $navbarAnchors.removeClass('active').filter('[href="' + item + '"]').parent("li").addClass('active');
    });
});