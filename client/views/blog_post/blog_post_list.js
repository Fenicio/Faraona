Template.postsList.helpers({
	posts: function() {
		return Posts.find({}, {limit: 1}); //MAL MAL MAL
	}
})