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