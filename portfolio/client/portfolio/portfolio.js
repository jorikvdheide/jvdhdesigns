var Projects = new Meteor.Collection("projects");

if (Meteor.isClient) {

	Template.portfolioItems.rendered = function() {
		$('.portfolio_form').hide();
	};

	Template.portfolioItems.events({

		'click .newItem': function () {

			$('.portfolio_form').toggle();

		},

		'click .item_submit': function() {

			Projects.insert({
				naam: $('.item_name').val(),
				klant: $('.item_client').val(),
				categorie: $('.item_category').val()
			});

		}
	});

	Template.projects.helpers = function() {
		return Projects.find({});
	};

	Template.projects.events({
		'click a.delete': function(e) {
			e.preventDefault();
			Projects.remove(this._id);
		}
	});

}

if (Meteor.isServer) {
	Meteor.startup(function () {
		// code to run server at startup
	});
}