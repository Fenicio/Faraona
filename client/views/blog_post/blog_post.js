Template.last_blog_post.helpers({
	'options': function() {
		return {
			sort: {time: -1},
			_limit: 1,
			_where: {},
			handle: singlePostHandle
		}
	}
});

Template.blog_post.rendered = function() {
};