const gulp = require('gulp');
const sass = require('gulp-sass');
const replace = require('gulp-replace');
const autoprefixer = require('gulp-autoprefixer');
const minifyCss = require('gulp-clean-css');
const renameCss = require('gulp-rename');

const px2rem = require('gulp-px2rem-plugin');
sass.compiler = require('node-sass');

// gulp创建任务
gulp.task('sass', function () {
	return gulp
		.src('./src/index.scss') // 编写的scss文件路径
		.pipe(sass().on('error', sass.logError)) //将scss编译成css
		.pipe(renameCss('index.css')) //重命名压缩后的css
		.pipe(gulp.dest('./')); //压缩后的css存放位置
});

// gulp创建任务
gulp.task('sass-min', function () {
	return gulp
		.src('./src/index.scss') // 编写的scss文件路径
		.pipe(sass().on('error', sass.logError)) //将scss编译成css
		.pipe(
			// 添加前缀
			autoprefixer({
				cascade: false,
			}),
		)
		.pipe(minifyCss()) //压缩css
		.pipe(renameCss('index.min.css')) //重命名压缩后的css
		.pipe(gulp.dest('./')); //压缩后的css存放位置
});

// gulp创建任务,转rem
gulp.task('build-rem', function ({
	dw = 750, // 设计稿宽度
	valid_num = 6, // 保留小数位
	pieces = 1500, // 设计稿等分数 10rem = dw  根据需要调整；
}) {
	return gulp
		.src('./src/index.scss') // 编写的scss文件路径
		.pipe(sass().on('error', sass.logError)) //将scss编译成css
		.pipe(px2rem({ 'width_design': dw, 'valid_num': valid_num, 'pieces': pieces }))
		.pipe(
			// 添加前缀
			autoprefixer({
				cascade: false,
			}),
		)
		.pipe(minifyCss()) //压缩css
		.pipe(renameCss('index-rem.min.css')) //重命名压缩后的css
		.pipe(gulp.dest('./')); //压缩后的css存放位置
});


// gulp创建任务,去前缀
gulp.task('build-nopre', function () {
	return gulp
		.src('./src/index.scss') // 编写的scss文件路径
		.pipe(sass().on('error', sass.logError)) //将scss编译成css
		.pipe(replace(/(?!\.r-\d)(\.r-)/g, '.'))
		// .pipe(replace(/\.r-/g, '.'))
		.pipe(
			// 添加前缀
			autoprefixer({
				cascade: false,
			}),
		)
		.pipe(minifyCss()) //压缩css
		.pipe(renameCss('index-nopre.min.css')) //重命名压缩后的css
		.pipe(gulp.dest('./')); //压缩后的css存放位置
});


// 监听文件变化
gulp.task('sass:watch', function () {
	gulp.watch('./src/sass/*.scss', gulp.series('sass'));
});

// 默认
gulp.task('default', gulp.series('sass:watch'));

// 打包
gulp.task('build', gulp.series('sass'));
// 打包
gulp.task('build-min', gulp.series('sass-min'));
