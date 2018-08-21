'use strict';
module.exports = (sequelize, DataTypes) => {
  var Recipe = sequelize.define('Recipe', {
    title: DataTypes.STRING,
    preparetime: DataTypes.INTEGER,
    step1: DataTypes.STRING,
    step2: DataTypes.STRING,
    step3: DataTypes.STRING,
    step4: DataTypes.STRING,
    step5: DataTypes.STRING
  }, {});
  Recipe.associate = function(models) {
    // associations can be defined here
  };
  return Recipe;
};