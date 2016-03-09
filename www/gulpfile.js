const gulp = require('gulp'),
	clean = require('gulp-clean'),
	jsmin = require('gulp-jsmin'),
	cssmin = require('gulp-minify-css'),
	imagemin = require('gulp-imagemin'),
	rename = require('gulp-rename'),
	replace = require('gulp-replace'),
	react = require('gulp-react'),
	babel = require('gulp-babel'),
	copy = require('gulp-copy'),
	server = require('gulp-server-livereload');

// react转换
gulp.task('react', () => {
	gulp.src('src/**/*.js')
		.pipe(react())
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(gulp.dest('js'))
});

// 拷贝库文件
gulp.task('copy', () => {
	gulp.src(['lib/**/*', 'data/*'])
		.pipe(copy('dist'))
		.pipe(gulp.dest('dist'))
});

// 清空目录
gulp.task('clean', () => {
	gulp.src('dist')
		.pipe(clean())
})

// 压缩js
gulp.task('jsmin', () => {
	gulp.src('js/*.js')
		.pipe(jsmin())
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(gulp.dest('dist/js'))
});

// 压缩css
gulp.task('cssmin', () => {
	gulp.src('css/*.css')
		.pipe(cssmin())
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(gulp.dest('dist/css'))
});

// 压缩图片
gulp.task('imagemin', () => {
	gulp.src('images/*')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/images'))
});

// 替换html关键字
gulp.task('replace', () => {
	gulp.src('index.html')
		.pipe(replace(/js\/.*\./g, '$&min.'))
		.pipe(replace(/css\/.*\./g, '$&min.'))
		.pipe(gulp.dest('dist'))
})

// 监听文件
gulp.task('watch', () => {
	gulp.watch('src/**/*.js', ['react'])
});

// 启动服务
gulp.task('server', () => {
	gulp.src('.')
		.pipe(server({
			livereload: true,
			directoryListing: true,
			//open: true,
			host: 'localhost',
			port: 8080
		}))
});

// 开发任务
gulp.task('develop', [
	'react',
	'watch',
	'server'
]);

// 发布任务
gulp.task('deploy', [
	'clean',
	'react',
	'jsmin',
	'cssmin',
	'imagemin',
	'copy',
	'replace'
]);