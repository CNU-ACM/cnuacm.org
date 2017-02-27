var postCounter = 1;

PostProvider = function(){};
PostProvider.prototype.dummyData = [];

PostProvider.prototype.findById = function(id, callback) {
	callback( null, this.dummyData )
};

PostProvider.prototype.findById = function(id, callback) {
	var result = null;
		for(var i =0;i<this.dummyData.length;i++) {
			if( this.dummyData[i]._id == id ) {
				result = this.dummyData[i];
				break;
			}
		}
	callback(null, result);

};


PostProvider.prototype.save = function(posts, callback) {
	var post = null;

	if( typeof(posts.length) == "undefined")
		posts = [posts];

	for( var i =0; i < posts.length; i++) {
		post = posts[i]
		post._id = postCounter++;
		post.created_at = new Date();

		if( post.comments === undefined) {
			post.comments = [];
		}

		for(var j = 0; j < post.comments.length; j++) {
			post.comments[j].created_at = new Date();
		}
		this.dummyData[this.dummyData.length]= post;
	}
	callback(null, posts);
};

	new PostProvider().save([
			{title: 'Post one', body: 'Body one', comments:[{author:'Taylor', comment:'I love it'}, {author:'Perkins', comment:'This is rubbish!'}]},
			{title: 'Post two', body: 'Body two'},
  			{title: 'Post three', body: 'Body three'}
		], function(error, articles){});


exports.PostProvider = PostProvider
