Meteor.subscribe('chatLog', Session.get('currentChatLog'));
Meteor.subscribe('blogPosts');
Meteor.subscribe('comments');
Meteor.subscribe('tags');