(function(){
    var Mice=window.Mice=function(){
        this.w=138;
        this.h=117;
        this.arrxy=[{'x':125,'y':150},{'x':310,'y':150},{'x':508,'y':154},{'x':96,'y':240},{'x':310,'y':243},{'x':510,'y':243},{'x':85,'y':343},{'x':310,'y':348},{'x':530,'y':343}];//老鼠在每个洞的位置
    }
    Mice.prototype.render=function(){//一直在定时器调用；
       var idx=parseInt(Math.random()*this.arrxy.length);
       //随机出现在一个洞
       this.x=this.arrxy[idx].x;
       this.y=this.arrxy[idx].y;

       this.bx=parseInt(Math.random()*3);//老鼠没死就是这个
       this.by=parseInt(Math.random()*5);//随机背景图出一个老鼠
        game.ctx.drawImage(game.R["mice"],this.bx*this.w,this.by*this.h,this.w,this.h,this.x,this.y,this.w,this.h);
    }
    Mice.prototype.goDie=function(){//老鼠死的时候
            //配乐
            var dui=document.getElementById("dui");
            var no=document.getElementById("no");
        if(this.x<=game.hammer.x&&game.hammer.x<=this.x+this.w&&this.y<=game.hammer.y&&game.hammer.y<=this.y+this.h){
            game.ctx.clearRect(0,180,game.canvas.width,game.canvas.height-180);
           /*  game.cls();//清屏 */
            game.land.render();//渲染背景地
            game.ctx.drawImage(game.R["mice"],3*this.w,this.by*this.h,this.w,this.h,this.x,this.y,this.w,this.h);//死的时候换哭的图片
            dui.load();//重新加载配乐
            dui.play();//播放配乐
            switch(this.by){//判断是图片中哪个老鼠，对应分数(一共五种)
                case 0:
                    game.score=game.score*1.2;
                    game.ctx.fillStyle="gold";
                    game.ctx.font="bold 20px 宋体";
                    game.ctx.fillText("得分翻倍",this.x+30,this.y+15);
                    break;
                case 1:
                    game.score+=100;
                    game.ctx.fillStyle="gold";
                    game.ctx.font="bold 20px 宋体";
                    game.ctx.fillText("+"+100,this.x+50,this.y+15);
                    break;
                case 2:
                    game.score+=500;
                    game.ctx.fillStyle="gold";
                    game.ctx.font="bold 20px 宋体";
                     game.ctx.fillText("+"+500,this.x+50,this.y+15);
                    break;
                case 3:
                    game.score-=100;
                    game.ctx.fillStyle="red";
                    game.ctx.font="bold 20px 宋体";
                    game.ctx.fillText("-"+100,this.x+50,this.y+15);
                    game.vita-=36;//打错的时候，生命减少
                    break;
                case 4:
                    game.score=game.score/2;
                    game.ctx.fillStyle="red";
                    game.ctx.font="bold 20px 宋体";
                    game.ctx.fillText("得分减半",this.x+30,this.y+15);
                    game.vita-=45;//打错的时候，生命减少
                    break;
            }
        }else{
            game.vita-=30;//没打中的时候，生命减少
            no.load();//重新加载配乐
            no.play();//播放配乐
            }
        
    }
})()