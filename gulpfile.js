var gulp 			= require('gulp'),
	browserSync 	= require('browser-sync').create(),
	min_html 		= require('gulp-minify-html'),
	sass 			= require('gulp-sass'),
	autoprefixer 	= require('gulp-autoprefixer'),
	frontnote 		= require('gulp-frontnote'),
	cssmin 			= require('gulp-cssmin'),
	rename 			= require('gulp-rename');


//ファイルの同期
gulp.task('sync', function() {
	return gulp.src([
		'*'
	])
	.pipe(browserSync.stream());
});

// ファイルの監視
gulp.task('watch', function(){
	browserSync.init({
		server: {
			baseDir: ''
		}
	});

	gulp.watch([
		'*'
	], ['sync']);
});

// HTMLの圧縮
gulp.task('min_html', function(){
	gulp.src('*.html')
	.pipe(min_html({collapseWhitespace: true}))
	.pipe(gulp.dest('min'));
});

// SassをCSSに変換
gulp.task('sass', function(){
	gulp.src('sass/*scss')
	.pipe(frontnote({
		css: 'css/style.css'
    }))
	.pipe(sass())
	.pipe(autoprefixer())
	.pipe(gulp.dest('css'))
	.pipe(cssmin())
	.pipe(rename({extname: '.min.css'}))
	.pipe(gulp.dest('min/mincss'));
});

//実行時に呼び出されるタスク
gulp.task('default', ['sync', 'watch', 'min_html', 'sass'], function(){
	gulp.watch(['*','css/*css'], ['sync']);
	gulp.watch(['sass/*scss'], ['sass']);
	gulp.watch(['*.html'], ['min_html']);
});

// browser-sync・・・   ブラウザを自動リロードさせる
// gulp-autoprefixer・・・  cssのベンダープレフィックスをCan I Useを元にいい感じにつけてくれる
// gulp-imagemin・・・  画像の軽量化
// gulp-sass・・・・  sass
// gulp-minify-html・・・   htmlの軽量化
// gulp-cssmin・・・   cssの軽量化
// gulp-rename・・・ファイル名の変換
// gulp-frontnote・・・スタイルガイドの作成
