define(['jquery'], function($) {

    var BaseShape = function(parent){
        this.parent = parent;
        this.inDom = false;
        this.$el = null;
        this.render();
    };


    BaseShape.prototype.render = function(parent) {
        this.$el = parent.circle(50, 40, 10);
    };


    return BaseShape;
});