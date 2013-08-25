define(['baseShape', 'accessories', 'jquery', 'd3'], function(BS, helpers, $, d3) {
    var Game = function(){
        this.init();
        this.frequency = 30000;
        this.points = 0;
        this.currentLevel = 0;
        this.currentLoop = null;
        this.currentShapes = {};
        this.fieldElement = '#gamefield';
        this.field = d3.select(this.fieldElement);
    };

    Game.prototype.init = function() {
        this.render();
        this.startLevel();
    };

    Game.prototype.render = function() {

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
        var uuid = helpers.uuid();
        this.currentShapes[uuid] = new BS(this.field);
        this.currentShape = this.currentShapes[uuid];
        this.currentShape.move();
    };

    return Game;
});