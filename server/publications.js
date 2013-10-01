Meteor.publish('blogPosts', function() {
	return Posts.find(); 
});
Meteor.publish('tags', function() {
	return Tags.find();
});