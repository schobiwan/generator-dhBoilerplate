import config from '../../config.json';
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import errorHandler from '../lib/errorHandler';

const $ = gulpLoadPlugins()

const templates = () => {

  <% if (projectUsage == 'Prototyping' ) { %>
  return gulp
    .src(config.src.templates+ '**/*.{html,twig,rss}')
    .pipe($.plumber())
    .pipe($.twig())
    .on('error', errorHandler)
    .pipe(gulp.dest(config.dist.markup))
    .pipe($.notify({
      onLast: true,
      message: '>>> Task: templates - done'
    }));
  <% } %>



  <% if (projectUsage == 'CraftCMS') { %>
  return gulp.src(config.src.templates + '**/*.{html,twig,rss}')
    .pipe($.changed(config.dist.markup))
    .pipe(gulp.dest(config.dist.markup))
    .pipe($.notify({
      onLast: true,
      message: '>>> Task: templates - done'
    }));
  <% } %>



  <% if (projectUsage == 'WordPress') { %>
    return gulp.src(config.src.templates + '**/*.{html,php,twig,png,css,md,rss}')
      .pipe($.changed(config.dist.markup))
      .pipe(gulp.dest(config.dist.markup))
      .pipe($.notify({
        onLast: true,
        message: '>>> Task: templates - done'
      }));
  <% } %>

}

gulp.task('templates', templates);
module.exports = { templates }
