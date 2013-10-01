Template.footer.helpers({
	'isUserAdmin': function() {
		return Meteor.user() && Meteor.user()._id==="Lz8stn9DSrKhybm7y";
	}
});

Template.footer.isUserAdmin = function() {
	return Meteor.user() && Meteor.user()._id==="Lz8stn9DSrKhybm7y";
};