import mongoose from 'mongoose';

import PostMessageComments from '../../models/home/postComments.js';

export const postSamplePosts = async (req, res) => {
	
	const post = [
					{postTitle: "Bangladesh National Park", message: "its amazing", user: "Shahin"}
				];

	return PostMessageComments.create(post).then(docPost => {
		console.log("\n>> Created PostComment:\n", docPost);
		// return docPost;
		res.status(200).json(docPost);
	});

};