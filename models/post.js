module.exports = function(sequelize, DataTypes) {
    var Post = sequelize.define("Post", {
      title: {
        type: DataTypes.STRING,
        validate: {
          len: [1]
        }
      },
      descript: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      price: {
        type: DataTypes.INTEGER
      }
    });
    return Post;
  };
  