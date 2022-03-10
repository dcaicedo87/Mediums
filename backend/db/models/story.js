"use strict";
module.exports = (sequelize, DataTypes) => {
  const Story = sequelize.define(
    "Story",
    {
      authorId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      imageUrl: DataTypes.STRING,
      title: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
          len: [4, 100],
        },
      },
      body: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {}
  );
  Story.associate = function (models) {
    // associations can be defined here
    Story.belongsTo(models.User, { foreignKey: "authorId" });
    Story.hasMany(models.Comment, {
      foreignKey: "storyId",
      onDelete: "cascade",
      hooks: true,
    });
  };
  return Story;
};
