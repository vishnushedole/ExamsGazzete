const express = require('express');
const Router = express.Router();
const Controller = require('../Controller/user.js')


Router.get('/',Controller.test);

Router.get('/fetch',Controller.getNews);

Router.post('/postArticle',Controller.postArticle);

Router.get('/getArticles',Controller.getArticles);

Router.get('/ArticlebyId',Controller.ArticlebyId);

Router.get('/getStream',Controller.getStream);

Router.post('/postComment',Controller.postComment);

module.exports = Router;