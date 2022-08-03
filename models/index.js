const Users = require('./User');
const Posts = require('./Post');

Posts.belongsTo(Users);

Users.hasMany(Posts);

module.exports = { Users, Posts };