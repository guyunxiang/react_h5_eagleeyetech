const gulp = require('gulp'),
	react = require('gulp-react'),
	babel = require('gulp-babel'),
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
			host: '192.168.2.29',
			port: 8080
		}))
});

// 开发任务
gulp.task('develop', [
	'react',
	'watch',
	'server'
]);