(function() {
    var Hour = (window.Hour = function() {
        this.w = 373;
        this.h = 200;
        this.length = this.w; //时间进度条
    });
    Hour.prototype.render = function() {
        //渲染出时间进度条
        game.ctx.drawImage(game.R['timer'], 0, 0, this.w, 80, 0, 20, this.w / 1.7, 80 / 1.7);
        game.ctx.drawImage(game.R['timer'], 0, 80, this.w, 80, 0, 23.3, this.w / 1.7, 80 / 1.7);
        game.ctx.drawImage(game.R['timer'], 0, 80 * 2, this.length, 80, 0, 43, this.length / 1.7, 80 / 1.7);
    };
})();
