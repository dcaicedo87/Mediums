"use strict";
module.exports = (sequelize, DataTypes) => {
  const Story = sequelize.define(
    "Story",
    {
      authorId: DataTypes.INTEGER,
      imageUrl: DataTypes.STRING,
      title: DataTypes.STRING,
      body: DataTypes.TEXT,
    },
    {}
  );
  Story.associate = function (models) {
    // associations can be defined here
    Story.belongsTo(models.User, { foreignKey: "authorId" });
    Story.hasMany(models.Comment, { foreignKey: "storyId" });
  };
  return Story;
};
