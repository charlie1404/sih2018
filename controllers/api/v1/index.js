const express  = require('express');
const v1       = express.Router();

const postsRouter    = require('./posts');

v1.use('/posts', postsRouter);

module.exports = v1;
