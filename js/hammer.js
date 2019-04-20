(function() {
    var Hammer = (window.Hammer = function() {
        //锤子的宽高
        this.w = 98;
        this.h = 77;

        //锤子的起始位置在屏幕外
        this.x = game.width;
        this.y = game.height;
    });
    Hammer.prototype.render = function() {
        game.ctx.drawImage(game.R['hammer'], this.x, this.y, 98, 77);
    };
    Hammer.prototype.update = function(x, y) {
        //鼠标点击时改变锤子的位置
        //中心点在锤子头中间
        this.x = x - 20;
        this.y = y - 20;
    };
})();
