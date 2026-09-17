
ig.baked=true;ig.module('game.entities.bowknight').requires('impact.entity','impact.entity-pool').defines(function(){EntityBowknight=ig.Entity.extend({size:{x:25,y:20},offset:{x:5,y:4},maxVel:{x:500,y:1000},storeMaxVel:{x:500,y:1000},storeVel:{x:null,y:null},friction:{x:400,y:0},zIndex:1,type:ig.Entity.TYPE.B,checkAgainst:ig.Entity.TYPE.A,collides:ig.Entity.COLLIDES.PASSIVE,health:1,speed:0,flip:false,idle:false,pause:false,kOTB:false,waitingBro:true,synced:false,delay:1,name:"bowKnight",sleeping:true,waking:false,madeWakeSound:false,_wmDrawBox:true,_wmBoxColor:'rgba(253, 73, 63, 1)',attackSound:new ig.Sound('media/sounds/bow.*'),deadSound:new ig.Sound('media/sounds/bowknight-dead.*'),hitSound:new ig.Sound('media/sounds/bowknight-hit.*'),wakeSound:new ig.Sound('media/sounds/wakeup-bow.*'),animSheets:{sheetOne:new ig.AnimationSheet('media/bow-knight-01.png',40,32),sheetTwo:new ig.AnimationSheet('media/bow-knight-02.png',48,48),},init:function(x,y,settings){this.parent(x,y,settings);var randomJumpTime=1+Math.floor(Math.random()*3);this.jumpTimer=new ig.Timer(randomJumpTime);this.idleTimer=new ig.Timer(0);this.idlingTimer=new ig.Timer(0);this.runTimer=new ig.Timer(0);this.attackTimer=new ig.Timer(0);this.dieUpTimer=new ig.Timer(0);this.delayTimer=new ig.Timer(0);this.wakeTimer=new ig.Timer(0);this.shootingTimer=new ig.Timer(0);this.anims.idle=new ig.Animation(this.animSheets.sheetOne,.1,[0,1,2,3,4,5,6]);this.anims.sleeping=new ig.Animation(this.animSheets.sheetTwo,.1,[0,1,2,3,4,5,6,7,8,9,0]);this.anims.wake=new ig.Animation(this.animSheets.sheetTwo,.05,[10,11,12,13,14,15,16,17]);this.anims.shoot=new ig.Animation(this.animSheets.sheetOne,.05,[10,11,12,13,14,15,0,1,2,3,4,5,6]);this.anims.jump=new ig.Animation(this.animSheets.sheetOne,1,[8]);this.anims.fall=new ig.Animation(this.animSheets.sheetOne,1,[9]);this.waitingBro=true;this.synced=false;},reset:function(x,y,settings){this.parent(x,y,settings);this.kOTB=false;this.waitingBro=true;this.synced=false;this.sleeping=true;this.shooting=false;this.waking=false;this.madeWakeSound=false;},wakeup:function(){this.sleeping=false;this.waking=true;this.wakeTimer.set(.4);this.anims.wake.rewind();
																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																													
																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																													   },checkCond:function(){if(ig.game.getEntityByName('player')){var player=ig.game.getEntityByName('player');if(player.dying&&this.shooting){this.shooting=false;}}
if(this.shooting&&this.shootingTimer.delta()>0&&!this.kOTB){this.shootingTimer.set(.6);var arPosX=this.pos.x-4;var arPosY=this.pos.y+8;ig.game.spawnEntity(EntityArrow,arPosX,arPosY,{flip:this.flip});if(ig.game.getEntityByName('player')){var player=ig.game.getEntityByName('player');if(!ig.game.muteGame&&player.pos.x<this.pos.x){this.attackSound.volume=.1;this.attackSound.play();}}}
if(this.waking&&this.wakeTimer.delta()>-.3&&!this.madeWakeSound){this.madeWakeSound=true;if(!ig.game.muteGame){this.wakeSound.volume=.2;this.wakeSound.play();}}
if(this.waking&&this.wakeTimer.delta()>0&&!this.kOTB){this.waking=false;this.shooting=true;this.shootingTimer.set(.2);this.anims.shoot.rewind();

}},pauseTimers:function(){this.jumpTimer.pause();this.shootingTimer.pause();this.runTimer.pause();this.idleTimer.pause();this.idlingTimer.pause();this.attackTimer.pause();this.dieUpTimer.pause();this.wakeTimer.pause();},unpauseTimers:function(){this.jumpTimer.unpause();this.wakeTimer.unpause();this.shootingTimer.unpause();this.runTimer.unpause();this.idleTimer.unpause();this.idlingTimer.unpause();this.attackTimer.unpause();this.dieUpTimer.unpause();},paused:function(){if(!this.storeVel.x){this.storeVel.x=this.vel.x;}
if(!this.storeVel.y){this.storeVel.y=this.vel.y;}
this.vel.x=0;this.vel.y=0;this.maxVel.x=0;this.maxVel.y=0;this.storedSpeed=this.speed;this.speed=0;if(this.currentAnim){this.pauseFrame=this.currentAnim.frame;}
this.pauseTimers();this.pause=true;},unpaused:function(){this.maxVel.x=this.storeMaxVel.x;this.maxVel.y=this.storeMaxVel.y;this.vel.x=this.storeVel.x;this.vel.y=this.storeVel.y;this.storeVel.x=null;this.storeVel.y=null;this.speed=this.storedSpeed;this.currentAnim.gotoFrame(this.pauseFrame);this.unpauseTimers();this.pause=false;},update:function(){if(!this.synced&&this.waitingBro&&ig.game.syncNow){this.synced=true;this.delayTimer.set(this.delay);}
else if(this.waitingBro&&ig.game.syncNow&&this.delayTimer.delta()>0){this.waitingBro=false;}
if(ig.game.pause&&!this.pause||this.waitingBro){this.paused();}
else if(this.pause&&!ig.game.pause){this.unpaused();}
if(!this.pause){this.checkCond();this.offSets();this.movements();}
this.animateMe();if(this.kOTB){this.boundaries();}
this.parent();},offSets:function(){if(this.sleeping||this.waking){this.offset.x=12;this.offset.y=20;}
else{this.offset.x=5;this.offset.y=8;}},movements:function(){if(this.kOTB){if(ig.game.getEntityByName('player')){var player=ig.game.getEntityByName('player');if(player.pos.x>this.pos.x){this.vel.x=-220;}
else{this.vel.x=220;}}
if(this.dieUpTimer.delta()<0){var bFF=this.dieUpTimer.delta()*-1;this.vel.y=-2000*bFF;}
else{var bFF=this.dieUpTimer.delta();if(bFF>1){bFF=1;}
this.vel.y=1000*bFF;}}
else{var xdir=this.flip?-1:1;this.vel.x=0;this.vel.y=0;}},kill:function(){this.parent();},animateMe:function(){if(this.pause&&this.currentAnim){this.currentAnim.gotoFrame(this.pauseFrame);}
else if(this.vel.y<0){this.currentAnim=this.anims.jump;}
else if(this.vel.y>0){this.currentAnim=this.anims.fall;}
else if(this.waking){this.currentAnim=this.anims.wake;}
else if(this.sleeping){this.currentAnim=this.anims.sleeping;}
else if(this.shooting){this.currentAnim=this.anims.shoot;}
else{this.currentAnim=this.anims.idle;}
if(this.currentAnim){this.currentAnim.flip.x=this.flip;}
if(this.kOTB&&!this.pause){this.currentAnim=this.anims.idle;this.currentAnim.angle-=Math.PI/.25*ig.system.tick;}
else{this.currentAnim.angle=0;}},handleMovementTrace:function(res){if(this.kOTB){this.pos.x+=this.vel.x*ig.system.tick;this.pos.y+=this.vel.y*ig.system.tick;}
else{this.parent(res);if(res.collision.x){this.flip=!this.flip;this.offset.x=this.flip?0:24;}}},knockMeOutTheBox:function(){this.kOTB=true;this.dieUpTimer.set(.35);if(ig.game.getEntityByName('player')){var player=ig.game.getEntityByName('player')
if(!ig.game.muteGame){this.deadSound.volume=player.attacking?.075:.125;this.deadSound.play();}}
var myValue=ig.game.rainbowKillCounter(this.name);var sPosX=this.pos.x-15;var sPosY=this.pos.y-(this.size.y/2)-22-(ig.game.rainbowKillCount*10);if(!ig.game.playerDead&&!ig.game.dying){ig.game.spawnEntity(EntityScore,sPosX,sPosY,{value:myValue});}},boundaries:function(){if(this.pos.y>ig.system.height*1.5+ig.game.screen.y){this.kill();}},check:function(other){if(ig.game.getEntityByName('player')){var player=ig.game.getEntityByName('player')
if(player.attacking&&!this.kOTB){if(!ig.game.muteGame){this.hitSound.volume=.05;this.hitSound.play();}
this.knockMeOutTheBox();}
else if(!ig.game.quiz&&this.attackTimer.delta()>0&&!this.kOTB&&!player.attacking){ig.game.quizbox.quiz(1,"bowknight");if(!ig.game.muteGame){this.hitSound.volume=.1;this.hitSound.play();}
this.attackTimer.set(ig.game.enemyRecoveryTime);}
if(!this.kOTB&&player.invin){this.knockMeOutTheBox();}}}});EntityArrow=ig.Entity.extend({size:{x:22,y:3},offset:{x:0,y:0},maxVel:{x:1000,y:0},storeMaxVel:{x:1000,y:0},storeVel:{x:null,y:null},friction:{x:400,y:0},gravityFactor:0,xPath:null,yPath:null,velWalled:false,type:ig.Entity.TYPE.B,checkAgainst:ig.Entity.TYPE.A,collides:ig.Entity.COLLIDES.NEVER,zIndex:-3,health:1,gravity:0,pause:false,kOTB:false,imHit:false,bounceDir:null,speed:250,storedSpeed:null,flip:false,name:"arrow",walled:false,animSheet:new ig.AnimationSheet('media/arrow.png',68,3),hitSound:new ig.Sound('media/sounds/spear.*'),init:function(x,y,settings){this.parent(x,y,settings);this.dieUpTimer=new ig.Timer(0);this.meltTimer=new ig.Timer(0);this.addAnim('fly',0.1,[0,1,2],true);this.addAnim('walled',1,[2],true);ig.game.sortEntitiesDeferred();},reset:function(x,y,settings){this.parent(x,y,settings);this.kOTB=false;this.walled=false;ig.game.sortEntitiesDeferred();},knockMeOutTheBox:function(){this.kOTB=true;this.dieUpTimer.set(.35);},pauseTimers:function(){this.dieUpTimer.pause();this.meltTimer.pause();},unpauseTimers:function(){this.dieUpTimer.unpause();this.meltTimer.unpause();},paused:function(){if(!this.storeVel.x){this.storeVel.x=this.vel.x;}
if(!this.storeVel.y){this.storeVel.y=this.vel.y;}
this.vel.x=0;this.vel.y=0;this.maxVel.x=0;this.maxVel.y=0;this.storedSpeed=this.speed;this.speed=0;if(this.currentAnim){this.pauseFrame=this.currentAnim.frame;}
this.pauseTimers();this.pause=true;},unpaused:function(){this.maxVel.x=this.storeMaxVel.x;this.maxVel.y=this.storeMaxVel.y;this.vel.x=this.storeVel.x;this.vel.y=this.storeVel.y;this.storeVel.x=null;this.storeVel.y=null;this.speed=this.storedSpeed;this.currentAnim.gotoFrame(this.pauseFrame);this.unpauseTimers();this.pause=false;},update:function(){if(ig.game.pause&&!this.pause||ig.game.getEntityByName('player')&&ig.game.getEntityByName('player').landed!=true){this.paused();}
else if(this.pause&&!ig.game.pause){this.unpaused();}
this.checkConditions();if(!this.pause){this.movements();}
this.animateMe();if(this.kOTB){this.boundaries();}
this.parent();},checkConditions:function(){if(ig.game.getEntityByName('player')){var player=ig.game.getEntityByName('player');if(player.victoryDance&&!this.kOTB){this.knockMeOutTheBox();}}
if(this.walled&&this.meltTimer.delta()>0){this.kill();}},movements:function(){if(this.walled){this.vel.x=0;this.vel.y=0;}
else if(this.kOTB){if(ig.game.getEntityByName('player')){var player=ig.game.getEntityByName('player');if(player.pos.x>this.pos.x){this.vel.x=-220;}
else{this.vel.x=220;}}
if(this.dieUpTimer.delta()<0){var bFF=this.dieUpTimer.delta()*-1;this.vel.y=-2000*bFF;}
else{var bFF=this.dieUpTimer.delta();if(bFF>1){bFF=1;}
this.vel.y=1000*bFF;}}
else if(this.imHit){this.vel.x=this.bounceSpeed*this.bounceDir;}
else if(this.walled){this.vel.y=400;if(!this.velWalled){this.walledX=(this.vel.x*-1)*.1;}
this.vel.x=this.walledX;}
else{this.vel.x=-600;this.vel.y=0;}},splatterMe:function(){this.splatter=true;this.meltTimer.set(3);this.anims.splatter.rewind();ig.game.snowballMissNoise();},animateMe:function(){if(this.pause&&this.currentAnim){this.currentAnim.gotoFrame(this.pauseFrame);}
else{if(!this.walled){this.currentAnim=this.anims.fly;}
else if(this.walled){this.currentAnim=this.anims.walled;}}
if(this.currentAnim){this.currentAnim.flip.x=this.flip;}},receiveDamage:function(amount,from){this.health-=amount;if(this.health<=0){this.knockMeOutTheBox();}},handleMovementTrace:function(res){this.parent(res);if(res.collision.y&&!this.splatter||res.collision.slope&&!this.splatter){}
if(res.collision.x&&!this.splatter&&!this.walled){this.walled=true;}},boundaries:function(){if(this.pos.y>ig.system.height*1.5+ig.game.screen.y){this.kill();}},check:function(other){if(ig.game.getEntityByName('player')){if(!ig.game.muteGame){}
var player=ig.game.getEntityByName('player');if(other==player&&!player.invin&&!this.walled){if(!ig.game.quiz&&!this.imHit){if(!ig.game.muteGame){this.hitSound.volume=.1;this.hitSound.play();}
ig.game.quizbox.quiz(1,this.name);this.kill();}}
else if(other==player&&!this.kOTB&&player.invin&&!this.imHit){this.kill();}}}});ig.EntityPool.enableFor(EntityBowknight);ig.EntityPool.enableFor(EntityArrow);});

