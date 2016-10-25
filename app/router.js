import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('news');
  this.route('entertainment');
  this.route('fashion');
  this.route('lifestyle');
  this.route('books');
  this.route('charts');
  this.route('about');
  this.route('advertise');
  this.route('apps');
  this.route('labs');
  this.route('terms');
  this.route('privacy');
  this.route('dmca');
  this.route('contact');
});

export default Router;
