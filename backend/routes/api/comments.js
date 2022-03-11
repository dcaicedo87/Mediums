const router = require("express").Router();
const asyncHandler = require("express-async-handler");
const { Comment } = require("../../db/models");
const { User } = require("../../db/models");

// POST a comment
router.post(
  "/",
  asyncHandler(async (req, res) => {
    const postComment = {
      userId: req.body.userId,
      storyId: req.body.storyId,
      body: req.body.body,
    };
    const newComment = await Comment.create(postComment);
    console.log(newComment);

    const commentToReturn = await Comment.findAll({
      where: { id: newComment.id },
      include: User,
    });
    return commentToReturn;
  })
);

// GET all comments (for testing)
// router.get(
//   "/",
//   asyncHandler(async (req, res) => {
//     const data = await Comment.findAll();
//     return res.json(data);
//   })
// );

module.exports = router;
