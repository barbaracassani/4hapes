define(['jquery', 'accessories'], function($, helpers) {

    var BaseShape = function(parent){
        this.parent = parent;
        helpers.makeObservable(this);
        this.inDom = false;
        this.$el = null;
        this.render();
    };

    BaseShape.prototype.move = function(mainDirection) {
        var _self = this,
            start = 0;

        if (this.inDom) {
            this.interval = function() {

                if (_self.checkBoundaries()) {
                    _self.$el.remove();
                    _self.publish('outOfBoundaries');
                    return;
                }
                _self.$el.attr("transform", "translate(" + start +",0)");
                start++;
                window.requestAnimationFrame(_self.interval);
            };
            this.interval();
        }
    };

    BaseShape.prototype.checkBoundaries = function(mainDirection) {
        return false;
    };

    BaseShape.prototype.render = function() {
        this.$el = this.parent.append("svg:rect").
            attr("x", 100).
            attr("y", 100).
            attr("height", 20).
            attr("width", 20).
            attr("fill", "red");
        this.inDom = true;
    };


    return BaseShape;
});