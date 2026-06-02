/*
  Usage:
  1. npm install //To install all dev dependencies of package
  2. npm run dev //To start development and server for live preview
  3. npm run prod //To generate minifed files for live server
*/

const { src, dest, watch, series, parallel } = require("gulp");
const options = require("./config"); //paths and other options from config.js
const browserSync = require("browser-sync").create();

const sass = require("gulp-sass")(require("sass")); //For Compiling SASS files
const postcss = require("gulp-postcss"); //For Compiling tailwind utilities with tailwind config
const concat = require("gulp-concat"); //For Concatinating js,css files

const pug = require("gulp-pug");
const plumber = require("gulp-plumber");
const plumberNotifier = require("gulp-plumber-notifier");
const changed = require("gulp-changed");
const sourcemaps = require("gulp-sourcemaps");
const gulpif = require("gulp-if");
const wait = require("gulp-wait");

//Load Previews on Browser on dev
function livePreview(done) {
  browserSync.init({
    server: {
      baseDir: options.paths.dist.base,
    },
    port: options.config.port || 5000,
  });
  done();
}

// Triggers Browser reload
function previewReload(done) {
  browserSync.reload();
  done();
}

// configurations
let gulpConfig = require("./gulp.config"),
  srcs = gulpConfig.paths.srcs,
  dists = gulpConfig.paths.dists,
  lang = gulpConfig.lang;

// if singleFile = true it will work as single file converter
function html(lang, dist, singleFile) {
  return src(srcs.pug)
    .pipe(gulpif(singleFile, changed(dists.html, { extension: ".html" })))
    .pipe(plumber())
    .pipe(plumberNotifier())
    .pipe(
      pug({
        pretty: true,
        data: {
          lang: lang.name,
          langDir: lang.direction,
          baseUrl: lang.baseUrl,
        },
      }),
    )
    .pipe(dest(dist))
    .on("error", function (err) {
      console.log(err);
    });
}

function viewsAll(cb) {
  html(lang.default, dists.html);
  // check if secondary language is active
  if (lang.secondary.active)
    html(lang.secondary, dists.html + lang.secondary.name);
  cb();
}
function viewsSingle(cb) {
  html(lang.default, dists.html, true);
  // check if secondary language is active
  if (lang.secondary.active)
    html(lang.secondary, dists.html + lang.secondary.name, true);
  cb();
}

//Development Tasks
function devHTML() {
  return src(`${options.paths.src.base}/**/*.html`).pipe(
    dest(options.paths.dist.base),
  );
}

function style() {
  const tailwindcss = require("tailwindcss");
  const autoprefixer = require("autoprefixer");
  return src(srcs.scssMain)
    .pipe(wait(1))
    .pipe(sourcemaps.init())
    .pipe(plumber())
    .pipe(plumberNotifier())
    .pipe(sass().on("error", sass.logError))
    .pipe(postcss([tailwindcss(options.config.tailwindjs), autoprefixer()]))
    .pipe(sourcemaps.write("."))
    .pipe(dest(dists.css))
    .pipe(browserSync.stream());
}

exports.default = series(parallel(style, viewsAll), function () {
  browserSync.init({
    server: {
      baseDir: dists.html,
    },
  });
  watch(srcs.pug, { queue: false }, series(viewsSingle, style, previewReload));
  watch(
    srcs.pugIncludes,
    { queue: false },
    series(viewsAll, style, previewReload),
  );
  watch(srcs.scssWatch, { queue: false }, series(style));
});

exports.production = series(parallel(style, viewsAll));
