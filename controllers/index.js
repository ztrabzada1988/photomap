var ProfileController = require('./ProfileController');
var PostController = require('./PostController');
var CommentController = require('./CommentController');

// this is gonna be your resource so localhost:3000/:resource = post, comment or profile
module.exports = {
    post: PostController,
    comment: CommentController,
    profile: ProfileController
}