const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Users extends Model {}

Users.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
          group_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          username: {
            type: DataTypes.STRING,
          },
          password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8],
              }
          }
        },
        {
          sequelize,
          timestamps: false,
          freezeTableName: false,
          underscored: true,
          modelName: 'users',
        }
      );

      module.exports = Users;