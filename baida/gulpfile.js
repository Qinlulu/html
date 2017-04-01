let gulp = require('gulp');
let sass = require('gulp-sass');
let server = require('gulp-webserver');
let webpack = require('webpack');
let config = require('./webpack.config');
let autoprefix = require('gulp-autoprefixer');
let minify = require('gulp-minify-css');
let uglify = require('gulp-uglify');

//compile sass to css use gulp-sass
gulp.task('sass',function(){
	return gulp.src('src/scss/*.scss')
	.pipe(sass())
	.pipe(gulp.dest('dist/css'))
})

//create dev server
gulp.task('server',['sass'],function(){
    gulp.watch('src/scss/*.scss',['sass']);
    gulp.watch('src/html/*.html');
    gulp.watch('src/js/*.js',['webpack']);
	return gulp.src('./')
	.pipe(server({
		open:'src/html/index.html',
		directoryListing: true,
		livereload:{
			enable: true,
			filter: function(fileName) {
				if(fileName.match(/node_modules|src\\js|src\\scss/)){
					return false
				}
				return true
			}
		},
		port:"8888"
	}))
})


gulp.task('webpack',function(callback){
	webpack(config).run(function(err, stats) {
        callback();
    });
})


gulp.task('default',['server','webpack'])

//解决兼容的

gulp.task('auto', function() {
	return gulp.src(['dist/css/*.css'])
	.pipe(autoprefix(
			'last 2 versions',
			'last 1 Chrome versions',
			'last 2 Explorer versions',
			'last 3 Safari versions',
			'Firefox >= 20',
			'iOS 7',
			'Firefox ESR',
			'> 5%'
		))
	.pipe(gulp.dest('text/css'));
});


//压缩css
gulp.task('minify',["auto"],function(){
	return gulp.src('text/css/*.css')
		.pipe(minify())
		.pipe(gulp.dest('public/css'))
})

//压缩js
gulp.task('uglify',function(){
	return gulp.src('dist/js/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('public/js'))
})

//gulp.task('default',['minify','uglify'])