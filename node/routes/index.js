var express = require('express');
var router = express.Router();
var kuromoji = require('kuromoji');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/kuromoji', function(req, res, next) {
  if(!req.query.s){ throw new Error("引数が指定されていません"); }
  var builder = kuromoji.builder({
    dicPath: '/var/www/node/node_modules/kuromoji/dict'
  });
  builder.build(function(err, tokenizer) {
    if(err) { throw err; }
    var tokens = tokenizer.tokenize(req.query.s);
    console.dir(tokens);
    res.header('Content-Type', 'application/json; charset=utf-8')
    res.send(tokens);
  });
});

module.exports = router;
