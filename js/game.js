(function() {
    var Game = (window.Game = function() {
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d'); //画布上下文
        this.load(); //图片加载
        this.score = 0; //分数
        this.timer = null; //定时器
        this.vita = 373; //生命
    });
    Game.prototype.reset = function() {
        this.score = 0; //分数
        this.timer = null; //定时器
        this.vita = 373; //生命
    };

    Game.prototype.load = function() {
        //图片管理器
        this.R = {
            land: 'images/land.png',
            mice: 'images/mice.png',
            hammer: 'images/hammer.png',
            mice: 'images/mice.png',
            hammer: 'images/hammer.png',
            timer: 'images/timer.png',
            no1: 'images/no1.png',
            tutorial: 'images/tutorial.png',
            start: 'images/start.png',
            gameover: 'images/gameover.png',
            restart: 'images/restart.png',
        };
        var a = 0; //用来存图片加载完成个数
        var b = Object.keys(this.R).length; //对象K的个数
        var self = this;
        for (k in this.R) {
            var src = this.R[k];
            this.R[k] = new Image();
            this.R[k].src = src;
            this.R[k].onload = function() {
                a++;
                if (a == b) {
                    self.start(); //游戏启动
                }
            };
        }
    };
    Game.prototype.cls = function() {
        //清屏
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    };
    Game.prototype.start = function() {
        //图片加载完的异步语句
        this.backgroundM = new BackgroundM(); //背景管理
        this.frame = 0; //帧数
        var self = this;
        self.land = new Land(); //背景地
        self.mice = new Mice(); //老鼠
        self.hammer = new Hammer(); //锤子
        self.hour = new Hour(); //时间条子
        self.a = 0; //用来存多少过了多少秒的
        this.timer = setInterval(function() {
            self.backgroundM.render(); //背景管理类一直调用渲染方法
        }, 20);
    };
    Game.prototype.bindEvent = function() {
        var self = this;
        this.canvas.onclick = function(e) {
            self.hammer.update(e.offsetX, e.offsetY); //锤子位置更新方法调用
            self.mice.goDie(); //调用老鼠死的方法
            self.hammer.render(); //渲染出锤子（锤子在最后不能被覆盖）
        };
    };
})();
