'use strict';

const angular = require('angular');
const lab21 = angular.module('lab21');

lab21.controller('GameController', ['$log', GameController]);

function GameController($log){
  this.history = [{id: 0, text: 'Prepare yourself for the exciting adventure of Priya, the book hunter. Try and catch them all'}];

  this.directions = ['north', 'south', 'east', 'west'];
  this.books = ['Catcher and the Rye', 'Harry Potter Series', 'LOTR', 'Ready Player One', 'Alif the Unseen', 'Snow Crash', 'WWII Naval History 15 book set', 'Pride and Prejudice', 'The Fault In The Stars', 'Seconds', 'Slauterhouse Five', 'A Song of Ice and Fire series', 'Bossypants', 'Waiting for Godot'];

  this.player = {
    name: 'Priya',
    location: 'roomA',
    bookshelf: []
  };

  this.map = require('../lib/map.js');

  this.updateBookshelf = function(){
    let addBook = this.books.pop();
    this.player.bookshelf.push(addBook);
    return 'You found a book! Adding ' + addBook + ' to your bookshelf!';
  };

  this.moveDirection = function(direction){
    $log.debug('gameCrtl.moveDirection');
    if (this.map[this.player.location]){
      let currentLocation = this.map[this.player.location];
      $log.log('currentLocation', currentLocation);
      let nextRoom = currentLocation[direction];
      $log.log('nextRoom', nextRoom);
      if( nextRoom !== 'wall') {
        this.player.location = nextRoom;
        this.logHistory('you have entered '+ this.player.location + '.' + this.updateBookshelf());
        return;
      }
      this.logHistory('You hit a wall, you cant find books that way.');
    }
  };
  this.logHistory = function(info){
    this.history.push({id: this.history.length, text: `${this.player.name}, ${info}`});
  };
}
