Meteor.Router.add({
	'/': 'postsList',
	'/post/:id': 'blog_post',
	'/post/new': 'blog_post_submit'
});