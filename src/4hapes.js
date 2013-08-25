define(['baseShape', 'accessories', 'jquery', 'raphael'], function(BS, helpers, $, Raphael) {
    var Game = function(){
        this.init();
        this.frequency = 10000;
        this.points = 0;
        this.currentLevel = 0;
        this.currentLoop = null;
        this.currentShapes = {};
        this.field = null;
        this.fieldElement = document.getElementById('gamefield');
    };

    Game.prototype.init = function() {
        this.render();
        this.startLevel();
    };

    Game.prototype.render = function() {
        this.field = Raphael(0, 0, 500, 500);
    };

    Game.prototype.startLevel = function() {
        this.advanceLevel();
        this.startTimeLoop();
    };

    Game.prototype.advanceLevel = function() {
        return this.currentLevel++;
    };

    Game.prototype.startTimeLoop = function() {
        var _self = this;
        this.currentLoop = window.setTimeout(function(){
            _self.executeTimeLoop();
            _self.startTimeLoop();
        }, this.frequency);
    };

    Game.prototype.stopTimeLoop = function() {
        window.clearTimeout(this.currentLoop);
    };

    Game.prototype.executeTimeLoop = function() {
        this.currentShapes[helpers.uuid()] = new BS();
    };

    return Game;
});