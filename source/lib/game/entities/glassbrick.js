
ig.baked=true;ig.module('game.entities.glassbrick').requires('impact.entity','impact.entity-pool').defines(function(){EntityGlassbrick=ig.Entity.extend({size:{x:32,y:32},offset:{x:0,y:0},maxVel:{x:0,y:0},_wmDrawBox:true,_wmBoxColor:'rgba(253, 63, 98, .5)',zIndex:-10,bounciness:0,landed:false,type:ig.Entity.TYPE.B,checkAgainst:ig.Entity.TYPE.BOTH,collides:ig.Entity.COLLIDES.NEVER,health:3000,name:"glassbrick",setBricks:false,breaking:false,broken:false,hollow:false,breakSound:new ig.Sound('media/sounds/glass-brick-break.*'),crackSound:new ig.Sound('media/sounds/glass-brick-crack.*'),animSheet:new ig.AnimationSheet('media/glass-and-spikes.png',32,32),pause:false,pauseTimers:function(){this.breakTimer.pause();},unpauseTimers:function(){this.breakTimer.unpause();},paused:function(){this.pauseTimers();this.pause=true;if(this.currentAnim){this.pauseFrame=this.currentAnim.frame;}},unpaused:function(){this.unpauseTimers();this.pause=false;},init:function(x,y,settings){this.parent(x,y,settings);this.breakTimer=new ig.Timer(0);this.addAnim('whole',1,[4],true);this.addAnim('broke',.05,[4,5,6,7],true);this.addAnim('brokeHollow',.05,[0,1,2,3],true);this.addAnim('wholeHollow',1,[0],true);if(!ig.global.wm){this.setBricks=false;this.breaking=false;this.broken=false;this.shards=false;}},reset:function(x,y,settings){if(!ig.global.wm){ig.game.sortEntitiesDeferred();}
this.setBricks=false;this.breaking=false;this.broken=false;this.shards=false;this.hollow=false;this.parent(x,y,settings);},spawnCollisionTiles:function(){var xTiles=0;var xPos=0;var yTiles=0;while(xTiles<4){ig.game.collisionMap.setTile(this.pos.x+xPos,this.pos.y,1);ig.game.collisionMap.setTile(this.pos.x+xPos,this.pos.y+8,1);ig.game.collisionMap.setTile(this.pos.x+xPos,this.pos.y+16,1);ig.game.collisionMap.setTile(this.pos.x+xPos,this.pos.y+24,1);ig.game.collisionMap.setTile(this.pos.x+xPos,this.pos.y+31,1);xPos+=8;xTiles++;}
this.size.y+=2;this.pos.y-=1;this.offset.y=-2;this.size.x+=2;this.pos.x-=1;this.offset.x=-2;},removeCollisionTiles:function(){var xTiles=0;var xPos=0;var yTiles=0;while(xTiles<4){ig.game.collisionMap.setTile(this.pos.x+xPos,this.pos.y,0);ig.game.collisionMap.setTile(this.pos.x+xPos,this.pos.y+8,0);ig.game.collisionMap.setTile(this.pos.x+xPos,this.pos.y+16,0);ig.game.collisionMap.setTile(this.pos.x+xPos,this.pos.y+24,0);ig.game.collisionMap.setTile(this.pos.x+xPos,this.pos.y+31,0);xPos+=8;xTiles++;}
this.size.y=16;this.pos.y+=10;this.offset.y=8;},spawnShards:function(whichRow){var yPos=0;if(whichRow==2){yPos+=6;}
else if(whichRow==3){yPos+=12;}
else if(whichRow==4){yPos+=28;}
else if(whichRow==5){yPos+=24;}
else if(whichRow==6){yPos+=32;}
ig.game.spawnEntity(EntityShard,this.pos.x,this.pos.y+yPos);ig.game.spawnEntity(EntityShard,this.pos.x+6,this.pos.y+yPos);ig.game.spawnEntity(EntityShard,this.pos.x+12,this.pos.y+yPos);ig.game.spawnEntity(EntityShard,this.pos.x+18,this.pos.y+yPos);ig.game.spawnEntity(EntityShard,this.pos.x+24,this.pos.y+yPos);ig.game.spawnEntity(EntityShard,this.pos.x+32,this.pos.y+yPos);},breakMe:function(speed){if(speed=="fast"){this.breakTimer.set(.05);}
else{this.breakTimer.set(.2);}
this.breaking=true;this.anims.broke.rewind();this.anims.brokeHollow.rewind();},update:function(){if(ig.game.pause&&!this.pause){this.paused();}
else if(this.pause&&!ig.game.pause){this.unpaused();}
if(!this.setBricks&&ig.game.collisionMap){this.setBricks=true;this.spawnCollisionTiles();}
if(this.pause==false&&ig.game.quiz==true||this.pause==false&&ig.game.cutScene==true){this.pause=true;this.paused();}
if(this.pause==true&&ig.game.quiz==false&&ig.game.cutScene==false){this.pause=false;this.unpaused();}
if(this.breaking&&!this.shards&&this.breakTimer.delta()>-.05){this.shards=true;this.spawnShards(1);this.spawnShards(3);this.spawnShards(5);if(!ig.game.muteGame&&!ig.game.levelBeat&&!ig.game.transition&&!ig.game.deathScreen&&!ig.game.dying){this.breakSound.volume=.04;this.breakSound.play();}}
if(this.breaking&&!this.broken&&this.breakTimer.delta()>0){this.removeCollisionTiles();this.broken=true;}
this.animMe();this.parent();},animMe:function(){if(this.pause&&this.currentAnim){this.currentAnim.gotoFrame(this.pauseFrame);}
else if(this.breaking||this.broken){this.currentAnim=this.hollow?this.anims.brokeHollow:this.anims.broke;}
else{this.currentAnim=this.hollow?this.anims.wholeHollow:this.anims.whole;}},check:function(other){if(ig.game.getEntityByName('player')){var player=ig.game.getEntityByName('player');if(other==player&&!this.breaking&&!this.broken){if(!ig.game.muteGame){this.crackSound.volume=.0125;this.crackSound.play();}
if(player.attacking){this.breakMe('fast');}
else{this.breakMe();}}
if(other==player&&this.broken){if(!ig.game.muteGame){}
if(!this.hollow){ig.game.spike=true;ig.game.quizbox.quiz(1,"spike");}
else{player.beLoud('broke hollow glass brick');}}
else if(this.broken&&other.knockMeOutTheBox&&other.kOTB!=true&&!this.hollow){other.knockMeOutTheBox();}}
else if(other.name=="spell"){if(!this.broken&&!this.breaking){if(!ig.game.muteGame){this.crackSound.volume=.0125;this.crackSound.play();}
this.breakMe();}
other.spawnSparkle();}}});EntityShard=ig.Entity.extend({size:{x:6,y:6},offset:{x:0,y:0},maxVel:{x:500,y:800},storeMaxVel:{x:500,y:700},storeVel:{x:null,y:null},friction:{x:400,y:0},type:ig.Entity.TYPE.NONE,checkAgainst:ig.Entity.TYPE.NONE,collides:ig.Entity.COLLIDES.NEVER,name:"shard",whichWay:null,health:3,speed:200,randomX:null,randomY:null,myAnimBro:null,moveTime:.1,pause:false,animSheet:new ig.AnimationSheet('media/glass-shards.png',16,16),paused:function(){if(!this.storeVel.x){this.storeVel.x=this.vel.x;}
if(!this.storeVel.y){this.storeVel.y=this.vel.y;}
this.vel.x=0;this.vel.y=0;this.maxVel.x=0;this.maxVel.y=0;this.storedSpeed=this.speed;this.speed=0;this.pauseTimers();if(this.currentAnim){this.pauseFrame=this.currentAnim.frame;}
this.pause=true;},unpaused:function(){this.maxVel.x=this.storeMaxVel.x;this.maxVel.y=this.storeMaxVel.y;this.vel.x=this.storeVel.x;this.vel.y=this.storeVel.y;this.storeVel.x=null;this.storeVel.y=null;this.speed=this.storedSpeed;this.unpauseTimers();this.pause=false;},pauseTimers:function(){this.dieUpTimer.pause();this.moveTimer.pause();},unpauseTimers:function(){this.dieUpTimer.unpause();this.moveTimer.unpause();},setMyAnim:function(){this.myAnimBro=1+Math.floor(Math.random()*10);var whichWay=1+Math.floor(Math.random()*1000);if(whichWay>=500){this.whichWay="left";}
else{this.whichWay="right";}
this.randomX=25+Math.floor(Math.random()*100);this.randomY=1000+Math.floor(Math.random()*1000);},init:function(x,y,settings){this.parent(x,y,settings);var dT=this.moveTime;this.dieUpTimer=new ig.Timer(dT);this.moveTimer=new ig.Timer(this.moveTime);this.setMyAnim();this.addAnim('one',1,[0],true);this.addAnim('two',1,[1],true);this.addAnim('three',1,[2],true);this.addAnim('four',1,[3],true);this.addAnim('five',1,[4],true);this.addAnim('six',1,[5],true);this.addAnim('seven',1,[6],true);this.addAnim('eight',1,[7],true);this.addAnim('nine',1,[8],true);this.addAnim('ten',1,[9],true);},reset:function(x,y,settings){this.setMyAnim();var dT=this.moveTime;this.dieUpTimer.set(dT);this.moveTimer.set(this.moveTime);this.parent(x,y,settings);},update:function(){if(ig.game.pause&&!this.pause){this.paused();}
else if(this.pause&&!ig.game.pause){this.unpaused();}
this.move();this.animMe();this.boundaries();this.parent();},move:function(){if(this.pause){this.vel.x=0;}
else if(ig.game.getEntityByName('player')&&this.moveTimer.delta()>0){var player=ig.game.getEntityByName('player');if(this.whichWay=="left"){this.vel.x=-this.randomX;}
else{this.vel.x=this.randomX;}}
if(this.moveTimer.delta()<=0||this.pause){this.vel.y=0;}
else if(this.dieUpTimer.delta()<0){var bFF=this.dieUpTimer.delta()*-1;this.vel.y=-this.randomY*bFF;}
else{var bFF=this.dieUpTimer.delta();if(bFF>1){bFF=1;}
this.vel.y=1000*bFF;}},animMe:function(){if(this.myAnimBro==1){this.currentAnim=this.anims.one;}
else if(this.myAnimBro==2){this.currentAnim=this.anims.two;}
else if(this.myAnimBro==3){this.currentAnim=this.anims.three;}
else if(this.myAnimBro==4){this.currentAnim=this.anims.four;}
else if(this.myAnimBro==5){this.currentAnim=this.anims.five;}
else if(this.myAnimBro==6){this.currentAnim=this.anims.six;}
else if(this.myAnimBro==7){this.currentAnim=this.anims.seven;}
else if(this.myAnimBro==8){this.currentAnim=this.anims.eight;}
else if(this.myAnimBro==9){this.currentAnim=this.anims.nine;}
else if(this.myAnimBro==10){this.currentAnim=this.anims.ten;}
if(!this.pause){this.currentAnim.angle-=Math.PI/.25*ig.system.tick;}},kill:function(){this.parent();},boundaries:function(){if(this.pos.y>ig.system.height*1.5+ig.game.screen.y){this.kill();}},handleMovementTrace:function(res){this.pos.x+=this.vel.x*ig.system.tick;this.pos.y+=this.vel.y*ig.system.tick;}});ig.EntityPool.enableFor(EntityGlassbrick);ig.EntityPool.enableFor(EntityShard);});

