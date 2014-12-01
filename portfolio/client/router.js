Router.map(function () {
  this.route('home', {
    path: '/',
    layoutTemplate: 'homelayout',
    yieldTemplates: {
      'section1': {to: 'first'},
      'section2': {to: 'second'},
      'homeblog': {to: 'homeblog'},
      'calltoaction': {to: 'calltoaction'}
    }
  });
  this.route('portfolio', {
    path: '/portfolio',
    layoutTemplate: 'layout'
  });
  this.route('about', {
    path: '/about',
    layoutTemplate: 'layout'
  });
  this.route('blog', {
    path: '/blog',
    layoutTemplate: 'layout'
  });
  this.route('contact', {
    path: '/contact',
    layoutTemplate: 'layout'
  });
  this.route('admin', {
        path:'/admin',
        template: 'admin',
        onBeforeAction: function() {
            if (Meteor.loggingIn()) {
                this.render(this.loadingTemplate);
            } else if(!Roles.userIsInRole(Meteor.user(), ['admin'])) {
                console.log('redirecting');
                this.redirect('/');
            }
        }
    });
});