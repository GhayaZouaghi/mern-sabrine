const {
  listPosts,
  createPost,
  updatePost,
  deletePost,
  likePost,
  unlikePost,
  commentPost,
  editComment,
  deleteComment,
  getByID,
} = require("../controllers/post");
// require express
const express = require("express");
const isAuth = require("../middleware/isAuth");
// require Router
const router = express.Router();
//  test route
router.get("/test", (req, res) => {
  res.send("hiiii test");
});
/*  read post route
 * @desc: get post route
 * @method:get
 * @path:http://localhost:8200/api/post
 * @data: null
 */
router.get("/", listPosts);

/**
 * @desc: create post route
 * @method:POST
 * @path:http://localhost:8200/api/post
 * @data: req.body
 */
router.post("/", createPost);

/**
 * @desc: update post route
 * @method:PUT
 * @path:http://localhost:8200/api/post:id
 * @data: raq.body && req.params
 */

router.put("/:_id", isAuth, updatePost);

/**
 * @desc: delete post route
 * @method:DELETE
 * @path:http://localhost:8200/api/post:id
 * @data: null
 */
router.delete("/:id", deletePost);

// ?get one post


router.get("/:id", getByID)
// ?like ou dislike routes
/**
 * @desc: like post
 * @method:patch
 * @path:http://localhost:8200/api/post:id
 * @data: req.parms && req.body
 */
router.patch("/like-post/:id",isAuth, likePost);

// !comments routes
/**
 * @desc: commenter un post
 * @method:patch
 * @path:http://localhost:8200/api/post:id
 * @data: req.parms && req.body
 */
router.patch("/comment-post/:_id", isAuth, commentPost);

/**
 * @desc: éditer un commentaire
 * @method:patch
 * @path:http://localhost:8200/api/post:id
 * @data: req.parms && req.body
 */
router.patch("/edit-comment/:_id", isAuth, editComment);

/**
 * @desc: effacer un commentaire
 * @method:delete
 * @path:http://localhost:8200/api/post:id
 * @data: req.parms && req.body
 */
router.patch("/delete-comment/:_id", isAuth, deleteComment);

module.exports = router;
