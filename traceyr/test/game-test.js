'use strict';

describe('testing the game functionailty', function(){
  beforeEach(()=>{
    angular.mock.module('lab21');
    angular.mock.inject(($controller)=>{
      this.gameCtrl = $controller('GameController');
    });
  });

  beforeEach(()=>{
    this.gameCtrl.history = [];
    this.gameCtrl.player = {
      name: 'Eleven',
      location: 'roomE',
      bookshelf: []
    };
  });

  it('the player should change rooms and get a book', ()=>{
    this.gameCtrl.moveDirection('north');
    expect(this.gameCtrl.player.location).toBe('roomC');
    expect(this.gameCtrl.player.bookshelf[0]).toContain('Waiting for Godot');
  });

  it('should hit a wall and not get a book', ()=>{
    this.gameCtrl.moveDirection('west');
    expect(this.gameCtrl.player.location).toBe('roomE');
    expect(this.gameCtrl.player.bookshelf.length).toBe(0);
    expect(this.gameCtrl.history[0]).not.toContain('bookshelf');
  });
});
