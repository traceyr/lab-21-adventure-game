'use strict';

require('!!file?name=[name].[ext]!./html/index.html');
// require('./scss/base.scss');

const angular = require('angular');
angular.module('lab21', []);

require('./controller/game-controller.js');
