var gulp = require('gulp'),
	connect = require('gulp-connect'),
	argv = require('yargs').argv,
	watch = require('gulp-watch'),
	wrap = require('gulp-wrap'),
	sass = require('gulp-ruby-sass'),
	jshint = require('gulp-jshint'),
	uglify = require('gulp-uglify'),
	browserify = require('gulp-browserify'),
	concat = require('gulp-concat'),
	gutil = require('gulp-util'),
	notify = require('gulp-notify'),
	brand = "dst";

// Webserver task
	gulp.task('webserver', function() {
		connect.server({
			root: brand,
			livereload: true,
			port: 8080,
			host: 'localhost'
		});
	});

// Livereload task
	gulp.task('livereload', function() {
		var glob = ['./'+brand+'/assets/css/*.css','./'+brand+'/assets/js/*.js'];
		gulp.src(glob)
			.pipe(watch(glob))
			.pipe(connect.reload())
			.pipe(notify("Reloaded"));
	});

// HTML
	gulp.task('views',function() {
		return gulp.src(['./src/views/**/*.html', '!./src/views/layout.html', '!./src/views/modals/*.html'])
			.pipe(wrap({src: './src/views/layout.html'}))
			.pipe(gulp.dest(brand));
	});
	gulp.task('modals',function() {
		return gulp.src(['./src/views/modals/*.html'])
			.pipe(gulp.dest('./'+brand+'/modals/'));
	});

// SASS
	gulp.task('sass', function() {
		var opt = { trace: true, style: "nested" };
		return sass('./src/assets/sass/master.scss', opt)
			.pipe(gulp.dest('./'+brand+'/assets/css'))
			.pipe(notify('Styles Task Completed'));
	});

// JS task
	gulp.task('lint', function() {
		return gulp
			.src(['./src/assets/js/**/*.js','!./src/assets/js/libs/**/*', '!./src/assets/js/bundle.js'])
			.pipe(jshint({ strict: false, node: true, sub: true, globals: { window: true, date: true, angular: true, le_app: true, app: true, document: true, SignaturePad: true, $: true, Image: true } }))
			.pipe(jshint.reporter('default'));
	});
	gulp.task('browserify', function() {
		// Single point of entry (make sure not to src ALL your files, browserify will figure it out for you)
		return gulp
			.src(['./src/assets/js/main.js'])
			.pipe(browserify({
				insertGlobals: true,
				debug: false
			}))
			.on('error', gutil.log)
			// Bundle to a single file
			.pipe(concat('bundle.js'))
			// .pipe(ngAnnotate()) // This does the minifyin magic for angular
			// .pipe(uglify({
			// 	compress: {
			// 		drop_console: true
			// 	}
			// }))
			// Output it to our dist folder
			.pipe(gulp.dest('./dst/assets/js/'))
			// .pipe(livereload())
			.pipe(notify('Browserify Task Completed'));
	});

// Watch ask
	gulp.task('watch', function() {
		gulp.watch(['./src/assets/js/**/*.js','!./src/assets/js/libs/**/*', '!./src/assets/js/bundle.js'], ['lint','browserify']);
		gulp.watch('./src/assets/sass/**/*.scss', ['sass']);
		gulp.watch(['./src/views/**/*.html', '!./src/views/modals/*.html'], ['views']);
		gulp.watch('./src/views/modals/*.html', ['modals'])
	});

// Default Task
	// gulp.task('default', ['sass','views','webserver','livereload','watch']);
	gulp.task('default', ['sass','views','webserver','livereload','watch']);