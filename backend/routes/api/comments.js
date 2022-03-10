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

// GET all comments
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const data = await Story.findAll({
      include: [Comment],
    });
    return res.json(data);
  })
);

module.exports = router;
