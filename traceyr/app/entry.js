'use strict';

require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

const angular = require('angular');
const lab21 = angular.mondule('lab-21', []);

require('./controller/game-controller.js');
