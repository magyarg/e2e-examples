const gulp = require('gulp');
const http = require('http');
const connect = require('connect');
const serveStatic = require('serve-static');

/**
 * Gulp task: Create an HTTP server
 * to simulate tests.
 */
gulp.task('http', function(done) {
    const app = connect().use(serveStatic('test/fixtures'));
    http.createServer(app).listen(9000, done);
});