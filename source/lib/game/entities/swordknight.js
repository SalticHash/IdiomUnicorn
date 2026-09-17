
ig.baked=true;ig.module('game.entities.swordknight').requires('impact.entity','impact.entity-pool').defines(function(){EntitySwordknight=ig.Entity.extend({size:{x:25,y:20},offset:{x:5,y:4},maxVel:{x:500,y:1000},storeMaxVel:{x:500,y:1000},storeVel:{x:null,y:null},friction:{x:400,y:0},zIndex:1,type:ig.Entity.TYPE.B,checkAgainst:ig.Entity.TYPE.A,collides:ig.Entity.COLLIDES.PASSIVE,health:100,speed:0,flip:false,idle:false,pause:false,kOTB:false,waitingBro:true,synced:false,delay:1,delayStore:null,jumpTime:1,waitTime:.5,jumping:false,name:"swordKnight",attackSound:new ig.Sound('media/sounds/sword.*'),deadSound:new ig.Sound('media/sounds/swordknight-dead.*'),_wmDrawBox:true,_wmBoxColor:'rgba(24, 231, 100, 1)',animSheets:{sheetOne:new ig.AnimationSheet('media/sword-knight-01.png',40,32),},init:function(x,y,settings){this.parent(x,y,settings);this.jumpTimer=new ig.Timer(this.jumpTime);this.idleTimer=new ig.Timer(0);this.idlingTimer=new ig.Timer(0);this.runTimer=new ig.Timer(0);this.waitTimer=new ig.Timer(0);this.attackTimer=new ig.Timer(0);this.dieUpTimer=new ig.Timer(0);this.delayTimer=new ig.Timer(0);this.anims.idle=new ig.Animation(this.animSheets.sheetOne,.1,[0,1,2,3,4,5,6]);this.anims.jump=new ig.Animation(this.animSheets.sheetOne,1,[8]);this.anims.fall=new ig.Animation(this.animSheets.sheetOne,1,[9]);this.waitingBro=true;this.synced=false;this.delayStore=this.delay;},reset:function(x,y,settings){this.parent(x,y,settings);this.kOTB=false;this.waitingBro=true;this.synced=false;this.delay=this.delayStore;},pauseTimers:function(){this.jumpTimer.pause();this.runTimer.pause();this.idleTimer.pause();this.idlingTimer.pause();this.attackTimer.pause();this.dieUpTimer.pause();this.waitTimer.pause();},unpauseTimers:function(){this.jumpTimer.unpause();this.runTimer.unpause();this.idleTimer.unpause();this.idlingTimer.unpause();this.attackTimer.unpause();this.dieUpTimer.unpause();this.waitTimer.unpause();},paused:function(){if(!this.storeVel.x){this.storeVel.x=this.vel.x;}
if(!this.storeVel.y){this.storeVel.y=this.vel.y;}
this.vel.x=0;this.vel.y=0;this.maxVel.x=0;this.maxVel.y=0;this.storedSpeed=this.speed;this.speed=0;if(this.currentAnim){this.pauseFrame=this.currentAnim.frame;}
this.pauseTimers();this.pause=true;},unpaused:function(){this.maxVel.x=this.storeMaxVel.x;this.maxVel.y=this.storeMaxVel.y;this.vel.x=this.storeVel.x;this.vel.y=this.storeVel.y;this.storeVel.x=null;this.storeVel.y=null;this.speed=this.storedSpeed;this.currentAnim.gotoFrame(this.pauseFrame);this.unpauseTimers();this.pause=false;},update:function(){if(!this.synced&&this.waitingBro&&ig.game.syncNow){this.synced=true;this.delayTimer.set(this.delay);}
else if(this.waitingBro&&ig.game.syncNow&&this.delayTimer.delta()>0){this.waitingBro=false;}
if(ig.game.pause&&!this.pause||this.waitingBro){this.paused();}
else if(this.pause&&!ig.game.pause){this.unpaused();}
if(!this.pause){this.checkCond();this.movements();}
this.animateMe();if(this.flip==true){this.offset.x=8;}
else{this.offset.x=6;}
if(this.kOTB){this.boundaries();}
this.parent();},checkCond:function(){if(this.waitingBro&&ig.game.syncNow&&this.delayTimer.delta()>0){this.waitingBro=false;this.jumpTimer.set(this.jumpTime);}},movements:function(){if(this.kOTB){if(ig.game.getEntityByName('player')){var player=ig.game.getEntityByName('player');if(player.pos.x>this.pos.x){this.vel.x=-220;}
else{this.vel.x=220;}}
if(this.dieUpTimer.delta()<0){var bFF=this.dieUpTimer.delta()*-1;this.vel.y=-2000*bFF;}
else{var bFF=this.dieUpTimer.delta();if(bFF>1){bFF=1;}
this.vel.y=1000*bFF;}}
else{if(this.jumpTimer.delta()>0&&!this.jumping&&this.waitTimer.delta()>0){this.vel.y=-333;this.jumping=true;}
var xdir=this.flip?-1:1;this.vel.x=0;}},animateMe:function(){if(this.pause&&this.currentAnim){this.currentAnim.gotoFrame(this.pauseFrame);}
else if(this.vel.y<0){this.currentAnim=this.anims.jump;}
else if(this.vel.y>0){this.currentAnim=this.anims.fall;}
else{this.currentAnim=this.anims.idle;}
if(this.currentAnim){this.currentAnim.flip.x=this.flip;}
if(this.kOTB&&!this.pause){this.currentAnim=this.anims.idle;this.currentAnim.angle-=Math.PI/.25*ig.system.tick;}
else{this.currentAnim.angle=0;}},kill:function(){this.parent();},handleMovementTrace:function(res){if(this.kOTB){this.pos.x+=this.vel.x*ig.system.tick;this.pos.y+=this.vel.y*ig.system.tick;}
else{this.parent(res);if(res.collision.x){this.flip=!this.flip;this.offset.x=this.flip?0:24;}
if(res.collision.y&&this.jumping||res.collision.slope&&this.jumping){this.jumping=false;this.waitTimer.set(this.waitTime);}}},knockMeOutTheBox:function(){this.kOTB=true;this.dieUpTimer.set(.35);if(ig.game.getEntityByName('player')){var player=ig.game.getEntityByName('player')
if(!ig.game.muteGame){this.deadSound.volume=player.attacking?.06:.1;this.deadSound.play();}}
var myValue=ig.game.rainbowKillCounter(this.name);var sPosX=this.pos.x-15;var sPosY=this.pos.y-(this.size.y/2)-22-(ig.game.rainbowKillCount*10);if(!ig.game.playerDead&&!ig.game.dying){ig.game.spawnEntity(EntityScore,sPosX,sPosY,{value:myValue});}},boundaries:function(){if(this.pos.y>ig.system.height*1.5+ig.game.screen.y){this.kill();}},check:function(other){if(ig.game.getEntityByName('player')){var player=ig.game.getEntityByName('player')
if(other==player){if(player.attacking&&!this.kOTB){if(!ig.game.muteGame){this.attackSound.volume=.06;this.attackSound.play();}
this.knockMeOutTheBox();}
else if(!ig.game.quiz&&this.attackTimer.delta()>0&&!this.kOTB&&!player.attacking){ig.game.quizbox.quiz(1,this.name);if(!ig.game.muteGame){this.attackSound.volume=.15;this.attackSound.play();}
this.receiveDamage(1,other);this.attackTimer.set(ig.game.enemyRecoveryTime);}
if(!this.kOTB&&player.invin){this.knockMeOutTheBox();}}}}});ig.EntityPool.enableFor(EntitySwordknight);});

