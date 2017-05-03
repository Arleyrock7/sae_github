'use strict';


const gulp = require('gulp'),
      plumber = require('gulp-plumber'),
      uglify = require('gulp-uglify'),
      sass = require('gulp-sass'),
      minifycss = require('gulp-minify-css'),
      express = require('gulp-express'),
      concat = require('gulp-concat'),
      browserSync = require('browser-sync'),
      nodemon = require('gulp-nodemon'),
      rename = require('gulp-rename'),
      ejs = require('gulp-ejs');


/*gulp.task('ejs_html', function(){
  return gulp.src('vistas/*.ejs')
   .pipe(ejs({}, {ext:'.html'}))
   .pipe(gulp.dest('./dist/'))
});*/


/*
gulp.task('pug_html', function buildHTML(){
  console.log("Bienvenido a Fikphy amo Arley! A sus ordenes...");
  return gulp.src('vistas/*.pug')
  .pipe(plumber())
  .pipe(pug({
    pretty: true /*TRUE sirve para no minificar el documento html*/
  /*}))
  .pipe(gulp.dest('dist/'));
});


/*gulp.task('views', function buildHTML() {
  return gulp.src('views/*.pug')
  .pipe(pug({
    // Your options in here.
  }))
});*/


gulp.task('sass_css', function() {
  gulp.src('css/sass/*.sass')
  //.pipe(plumber())
  .on('error', console.log.bind(console))
  .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
  .pipe(minifycss())
  .pipe(gulp.dest('dist/css'));
});
gulp.task('css_minify', function(){
  return gulp.src('css/*.css')
  .on('error', console.log.bind(console))
  .pipe(minifycss())
  .pipe(gulp.dest('dist/css'));
});


gulp.task('scripts_run', function(){
  gulp.src('js/*.js')
  .on('error', console.log.bind(console))
  .pipe(uglify())
  .pipe(gulp.dest('dist/js'))
})


gulp.task('watch', function(){
  gulp.watch('./css/sass/sae_styles.sass', ['sass_css']);
  /*gulp.watch('./js/*.js', ['scripts_run']);*/
})

/*
gulp.task('browser-sync', ['nodemon'], function(){
  browserSync.init(null, {
    proxy: "http://localhost:3000",
    files: ["dist/*.*"],
    browser: "firefox",
    port: 7000,
  });
});
gulp.task('nodemon', function(sae){
  var started =  false;
  return nodemon({
    scripts: 'servidor.js'
  }).on('start', function(){
    sae();
    started = true;
  });
});*/



gulp.task('default', ['watch', 'sass_css', 'css_minify', 'scripts_run']);
