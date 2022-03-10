const router = require("express").Router();
const asyncHandler = require("express-async-handler");
const { Comment } = require("../../db/models");

// POST a comment
router.post(
  "/",
  asyncHandler(async (req, res) => {
    const postComment = {
      userId,
      storyId,
      body,
    };

    await Comment.create(postComment);
    return res.json(postComment);
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
