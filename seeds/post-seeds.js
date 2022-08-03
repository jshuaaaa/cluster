const { Post } = require('../models/index');

const postData = [
  {
    posted_by: 1,
    post_content: 'I really have some real stuff!'
  },
  {
    posted_by: 2,
    post_content: 'I really love me some beans man!'
  },
  {
    posted_by: 3,
    post_content: 'Takoyaki is the best way to eat octopus!'
  },
  {
    posted_by: 4,
    post_content: 'You have to try some tonkatsu ramen!'
  },
  {
    posted_by: 5,
    post_content: 'I will be the king of pirates!!'
  },
  {
    posted_by: 6,
    post_content: 'Gotta get to some paperwork...zzzz'
  },
  {
    posted_by: 7,
    post_content: 'The arcs just do not compare...'
  },
  {
    posted_by: 8,
    post_content: 'It exists, I am telling youuuu....'
  },
  {
    posted_by: 9,
    post_content: 'Seattle cost of living is a lot lower than other hot spots for software engineers'
  },
  {
    posted_by: 10,
    post_content: 'Quantum computing is pretty awesome, but cloud computing is already here!'
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;