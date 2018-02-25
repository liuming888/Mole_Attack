(function(){
    var BackgroundM=window.BackgroundM=function(){
        this.page=0;//初始页面

        //因为每个大背景宽高一样
        this.w=750;
        this.h=550;

        //配乐
        this.music0=document.getElementById("music0");
        this.music1=document.getElementById("music1");
        this.beijin=document.getElementById("beijin");
        this.gameover=document.getElementById("over");
    }
    BackgroundM.prototype.render=function(){
        var self=this;
        switch(this.page){
            case 0://进来画面
                this.music0.play();//播放配乐
                game.ctx.drawImage(game.R["no1"],0,0,this.w,this.h);
                game.canvas.onclick=function(e){
                   if(e.offsetX>=352&&e.offsetY<=426&&e.offsetY>=182&&e.offsetY<=253){//点击中锤子头部分
                        self.music0.pause();//暂停配乐
                        self.music1.play();//播放配乐
                       self.page++;//换到下一个背景
                   }
                }
                break;
            case 1://玩法介绍画面
                this.music0.play();//播放配乐
                //大背景
                game.ctx.drawImage(game.R["tutorial"],0,0,this.w,this.h);

                //开启按钮的宽高
                var w=182;
                var h=54;
                game.ctx.drawImage(game.R["start"],280,460,w,h);// 画出按钮
                game.canvas.onclick=function(e){
                   if(e.offsetX>=294&&e.offsetX<=454&&e.offsetY>=457&&e.offsetY<=515){
                       self.music0.pause();//暂停配乐
                       self.music1.load();
                        self.music1.play();//播放配乐
                       self.page++;
                   }
                }
                break;
            case 2://游戏画面
                    this.beijin.play();
                    game.bindEvent();//先执行这个方法   
                    game.frame++;
                if(game.frame%50==0){//每一秒 1000毫秒
                        game.a++;
                        game.cls();//清屏
                        game.land.render();//渲染背景地
                        game.mice.render();//渲染老鼠
                        game.hour.render();//时间条
                        game.hour.length=game.hour.w*(1-0.016666*game.a);//时间进度条
                        game.ctx.font="bold 16px 宋体";
                        game.ctx.fillStyle="gold";
                        game.ctx.fillText("你的得分："+parseInt(game.score),0,100);
                        game.ctx.fillText("生命：",515,75);
                        game.ctx.drawImage(game.R["timer"],0,80*2,game.vita,80,508,60,game.vita/1.5,80/1.5);//生命条
                        if(game.vita<=50||game.hour.length<=50){
             //因为图片进度条有误差，所以当生命少于或时间小于
                            self.page=3;
                            self.gameover.play();//播放配乐
                        }
                    }
                break;
            case 3://游戏结束画面
                 this.beijin.pause();
                 game.land.render();//渲染背景地
                 game.ctx.drawImage(game.R["gameover"],200,300);
                 game.ctx.drawImage(game.R["restart"],320,420);
                 game.canvas.onclick=function(e){
                    if(e.offsetX>322&&e.offsetX<409&&e.offsetY>420&&e.offsetY<515){//点击重新开始按钮时
                        self.page=2;//回到游戏页面

                        //别忘了重置时间和生命以及分数
                        game.a=0;//用来辅助时间改变的
                        game.vita=373;//生命
                        game.score=0;//分数

                    }
                 }
                break;
    }
    }
})()