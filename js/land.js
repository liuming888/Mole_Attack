(function() {
    var Land = (window.Land = function() {
        this.w = 750;
        this.h = 550;
    });
    Land.prototype.render = function() {
        //渲染出游戏页面的背景地
        game.ctx.drawImage(game.R['land'], 0, 0, game.canvas.width, game.canvas.height);
    };
})();
