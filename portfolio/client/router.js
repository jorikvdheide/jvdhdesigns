Router.route('/', function () {
  this.render('home');
  this.layout('layout');
});

Router.route('/home', function () {
  this.render('home');
  this.layout('layout');
});

Router.route('/portfolio', function () {
  this.render('portfolio');
  this.layout('layout');
});

Router.route('/about', function () {
  this.render('about');
  this.layout('layout');
});

Router.route('/contact', function () {
  this.render('contact');
  this.layout('layout');
});

Router.route('/dashboard', function () {
  this.render('dashboard');
  this.layout('layout');
});

Router.configure({
    layoutTemplate: 'layout'
});

Router.map(function() {
    this.route('admin', {
        path:'/admin',
        template: 'accountsAdmin',
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