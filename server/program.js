// $ kick-off-koa run program.js 8080
var koa = require('koa');
var app = new koa();

var port = process.argv[2];
app.listen(port);


app.use(function *() {
    this.body = 'hello';
});
