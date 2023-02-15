import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
	postTitle: String,
	message: String,
	user: String,
	createdAt: {
		type: Date,
		default: new Date()
	}
});

const PostMessageComments = mongoose.model('PostMessaageComments', postSchema);

export default PostMessageComments;