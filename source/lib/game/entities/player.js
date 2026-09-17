
ig.baked=true;ig.module('game.entities.player').requires('impact.entity','impact.entity-pool').defines(function(){
	EntityPlayer=ig.Entity.extend({name:"player",size:{x:30,y:20},offset:{x:28,y:0},friction:{x:0,y:0},storeVel:{x:0,y:0},maxVel:{x:200,y:1000},maxVelStore:{x:200,y:1000},
		maxX:200,maxY:200,accelWalk:120,accelRun:200,accelAir:200,jump:340,jumpCount:0,loud:false,maxJumps:1,bounciness:0,
		health:1,gravityFactor:1,theGravityFactor:1,_wmDrawBox:true,_wmBoxColor:'rgba(245, 66, 212, 1)',type:ig.Entity.TYPE.A,checkAgainst:ig.Entity.TYPE.NONE,collides:ig.Entity.COLLIDES.PASSIVE,
		pause:false,flip:false,zIndex:10,landed:false,alive:true,dying:false,attacking:false,readyToAttack:false,attackResetTime:2,
		victory:false,invin:true,invinTime:2,readyBro:true,deathMode:null,dieUpTime:1,dieUp:false,spring:false,goNow:false,attackSound:new ig.Sound('media/sounds/attack.*'),chargeSound:new ig.Sound('media/sounds/charge.*'),jumpSound:new ig.Sound('media/sounds/jump.*'),animSheets:{player:new ig.AnimationSheet('media/player-01.png',70,30),attack:new ig.AnimationSheet('media/player-02.png',70,82),playerDeath:new ig.AnimationSheet('media/player-death.png',70,40),playerWin:new ig.AnimationSheet('media/player-victory.png',54,30),},unpauseTimers:function(){this.invincibleTimer.unpause();this.loudTimer.unpause();this.attackTimer.unpause();this.dieUpTimer.unpause();ig.game.bonusTimer.unpause();if(ig.game.flashingMessage){ig.game.flashingMessageTimer.unpause();ig.game.flashingMessageIntravelTimer.unpause();}},pauseTimers:function(){this.invincibleTimer.pause();this.loudTimer.pause();this.attackTimer.pause();this.dieUpTimer.pause();ig.game.bonusTimer.pause();if(ig.game.flashingMessage){ig.game.flashingMessageTimer.pause();ig.game.flashingMessageIntravelTimer.pause();}},offSets:function(){if(this.victoryDance){this.offset.x=11;this.offset.y=7;this.size.x=30;}
else if(this.attacking){this.offset.x=29;this.offset.y=48;this.size.x=34;}
else{this.offset.x=11;this.offset.y=10;this.size.x=30;}},init:function(x,y,settings){this.parent(x,y,settings);this.invincibleTimer=new ig.Timer(2);this.loudTimer=new ig.Timer(0);this.attackTimer=new ig.Timer(0);this.victoryTimer=new ig.Timer(0);this.deathTimer=new ig.Timer(0);this.dieUpTimer=new ig.Timer(0);this.readyToAttackTimer=new ig.Timer(0);this.waitToStartTimer=new ig.Timer(.25);this.anims.walk=new ig.Animation(this.animSheets.player,0.075,[0,1,2,3,4,5,6,7,8]);this.anims.run=new ig.Animation(this.animSheets.player,0.05,[0,1,2,3,4,5,6,7,8]);this.anims.jump=new ig.Animation(this.animSheets.player,1,[4]);this.anims.attack=new ig.Animation(this.animSheets.attack,0.05,[0,1,2,3,4,5,6,6,7,7,8,8,9,9,10,11,12,13,14,15],true);this.anims.fall=new ig.Animation(this.animSheets.player,1,[8]);this.anims.win=new ig.Animation(this.animSheets.playerWin,.1,[0,0,1,2,3,4,5,6,7,8,9,9,10,11,12,4],true);this.anims.dying=new ig.Animation(this.animSheets.playerDeath,.05,[0,1,2,3,4,5,6]);this.currentAnim=this.anims.fall;if(!ig.global.wm){ig.game.processTokens('reset');ig.game.syncNow=false;}
if(!ig.global.wm){ig.game.spawnButtons();}},
	reset:function(x,y,settings){this.parent(x,y,settings);this.invincibleTimer.set(2);this.dying=false;this.dead=false;this.pause=false;this.victoryDance=false;this.landed=false;this.deathMode=null;this.dieUp=false;this.goNow=false;this.currentAnim=this.anims.fall;ig.game.clearingLevel=false;ig.game.syncNow=false;if(!ig.global.wm){ig.game.processTokens('reset');ig.game.spawnButtons();ig.game.showBonus=false;}},paused:function(){this.storeVel.x=this.vel.x?this.vel.x:0;this.storeVel.y=this.vel.y?this.vel.y:0;this.vel.x=0;this.vel.y=0;this.maxVelStore.x=this.maxVel.x;this.maxVelStore.y=this.maxVel.y;this.maxVel.x=0;this.maxVel.y=0;this.theGravityFactor=this.gravityFactor;this.gravityFactor=0;this.pauseFrame=this.currentAnim?this.currentAnim.frame:2;this.pause=true;this.pauseTimers();this.chargeSound.stop();ig.game.pause=true;},unpaused:function(){this.maxVel.x=this.maxVelStore.x;this.maxVel.y=this.maxVelStore.y;this.vel.x=this.storeVel.x;this.vel.y=this.storeVel.y;this.gravityFactor=this.theGravityFactor;this.unpauseTimers();this.pause=false;},beLoud:function(why){this.loud=true;this.loudTimer.set(.35);},
	invincible:function(time){
		this.invin=true;
		this.invincibleTimer.set(time);
	},
	checkForSlopes:function(){this.clearCheckTileValues();if(this.cT5&&this.cT8){this.sloping=true;}
else{this.sloping=false;}},clearCheckTileValues:function(){this.cT1=null;this.cT2=null;this.cT3=null;this.cT4=null;this.cT5=null;this.cT6=null;this.cT7=null;this.cT8=null;},checkTiles:function(){var tMX=7;var tMY=7;var clMar=1;if(!ig.game.collisionMap.getTile(this.pos.x-tMX,this.pos.y-tMY)){this.cT1=false;}
else{this.cT1=true;}
if(!ig.game.collisionMap.getTile(this.pos.x+this.size.x/2,this.pos.y-tMY)){this.cT2=false;}
else{this.cT2=true;}
if(!ig.game.collisionMap.getTile(this.pos.x+this.size.x+tMX,this.pos.y-tMY)){this.cT3=false;}
else{this.cT3=true;}
if(!ig.game.collisionMap.getTile(this.pos.x-tMX,this.pos.y+this.size.y/2)){this.cT4=false;}
else{this.cT4=true;}
if(!ig.game.collisionMap.getTile(this.pos.x+this.size.x+tMX,this.pos.y+this.size.y/2)){this.cT5=false;}
else{this.cT5=true;}
if(!ig.game.collisionMap.getTile(this.pos.x-tMX,this.pos.y+this.size.y+tMY)){this.cT6=false;}
else{this.cT6=true;}
if(!ig.game.collisionMap.getTile(this.pos.x+this.size.x/2,this.pos.y+this.size.y+tMY)){this.cT7=false;}
else{this.cT7=true;}
if(!ig.game.collisionMap.getTile(this.pos.x+this.size.x+tMX,this.pos.y+this.size.y+tMY)){this.cT8=false;}
else{this.cT8=true;}},checkForUnpause:function(){if(ig.game.playerDead&&!this.dying&&ig.game.deathScreenTimer.delta()>0){if(ig.input.released('attack')||ig.input.released('click')){ig.game.playerDead=false;ig.game.managingPlayerDeath=false;ig.game.dying=false;ig.game.pause=false;ig.game.checkForMessages();}}},myAttack:function(){ig.game.rainbowKillCount=0;this.attacking=true;this.anims.attack.rewind();this.attackTimer.set(1);if(!ig.game.muteGame){this.attackSound.volume=.1;this.attackSound.play();}},upDateMaxVel:function(){if(this.mySpeed=="run"){this.maxVel.x=200;this.maxVel.y=1000;this.maxVelStore.x=200;this.maxVelStore.y=1000;if(this.attacking){this.maxVel.x=300;this.maxVelStore.x=300;}}
else{this.maxVel.x=120;this.maxVel.y=1000;this.maxVelStore.x=120;this.maxVelStore.y=1000;if(this.attacking){this.maxVel.x=240;this.maxVelStore.x=240;}}},movements:function(){var accelAir=this.accelAir;var accel=this.accelWalk;if(this.mySpeed=="run"){accel=this.accelRun;}
if(this.attacking){accel+=500;}
if(!this.dying&&!this.dead&&!this.victoryDance&&!ig.game.deathScreen){this.upDateMaxVel();}
this.amReady=true;if(ig.input.pressed('action')&&!this.attacking&&this.readyToAttack){this.myAttack();}
if(this.dying||this.dead||this.victoryDance||ig.game.deathScreen){this.amReady=false;this.vel.x=0;this.maxVel.x=0;this.accel.x=0;}
else if(this.spring){this.spring=false;this.vel.y=-300;}
else if(this.attacking){if(this.standing){if(this.mySpeed=="walk"){this.vel.y=-this.vel.x-15;}
else{this.vel.y=-this.vel.x-5;}}
else if(ig.input.pressed('jump')){this.vel.y=-70;}
else if(ig.input.state('jump')){this.vel.y=-35;}
else if(ig.input.pressed('down')){this.vel.y=70;}
else if(ig.input.state('down')){this.vel.y=35;}
else{this.vel.y=-15;}
if(ig.input.state('left')){this.mySpeed="walk";if(this.vel.x>155){this.vel.x=155;}}
else if(ig.input.state('right')){this.mySpeed="run";this.vel.y=this.vel.y*1.1;this.beLoud('running in attack');}
else{this.mySpeed="walk";}}
else if(ig.input.pressed('jump')&&this.jumpCount<this.maxJumps&&!this.attacking){if(this.standing){this.vel.y=-this.jump*.75;}
else{this.vel.y=-this.jump;}
if(!ig.game.muteGame){this.jumpSound.volume=.02;this.jumpSound.play();}
this.jumpCount++;}
else if(ig.input.state('left')){this.mySpeed="walk";}
else if(ig.input.state('right')){this.mySpeed="run";this.beLoud('running');}
else{this.mySpeed="walk";}
this.accel.x=accel;if(this.dying||this.dead){this.deathMovements();}},deathMovements(){this.vel.y=this.dieUpTimer.delta()*(this.jump*.15);if(!this.dieUp){this.vel.y=this.dieUpTimer.delta()*(this.jump*3.3);}
this.vel.x=0;this.accel.x=0;this.maxVel.x=0;this.maxVel.y=1000;if(ig.game.syncNow){ig.game.syncNow=false;}},animMe:function(){this.offSets();if(this.dying){this.currentAnim=this.anims.dying;}
else if(this.victoryDance){this.currentAnim=this.anims.win;}
else if(this.pause){if(this.currentAnim){this.currentAnim.gotoFrame(this.pauseFrame);}}
else if(this.attacking){this.currentAnim=this.anims.attack}
else if(this.vel.y<0&&!this.standing){this.currentAnim=this.anims.jump;}
else if(this.vel.y>0&&!this.sloping&&!this.resSlopeDet){this.currentAnim=this.anims.fall;}
else if(this.mySpeed=="run"){this.currentAnim=this.anims.run;}
else if(this.mySpeed=="walk"){this.currentAnim=this.anims.walk;}
else{this.currentAnim=this.anims.walk;}
if(this.currentAnim){this.currentAnim.flip.x=this.flip;}},
	endAttack:function(){
		this.readyToAttackTimer.set(this.attackResetTime);
		this.readyToAttack=false;
		this.attacking=false;
		this.beLoud('end attack');
		ig.game.rainbowKillCount=0;
		this.anims.walk.gotoFrame(2);
		this.anims.run.gotoFrame(2);
		if(!ig.game.muteGame){this.chargeSound.volume=.065;this.chargeSound.play();}
	},
	checkConditions:function(){if(this.victoryDance&&this.victoryTimer.delta()>0){if(ig.game.gameWon&&!ig.game.transition){ig.game.endingScreen=true;ig.game.fadeOut(-.93,ig.game.color1);}
else if(!ig.game.transition&&!ig.game.gameWon){ig.game.levelCleared=true;ig.game.slideRightIn("","",3);}
ig.game.showBonus=false;}
if(this.victoryDance&&ig.game.readyToLoad){ig.game.pData.lvl++;ig.game.clearingLevel=true;ig.game.saveGame();ig.game.LoadLevelBro(ig.game.pData.lvl);}
if(this.dying&&this.deathTimer.delta()>0&&!this.dead){ig.game.processTokens('rewind');ig.game.pData.deaths++;ig.game.saveGame();this.dead=true;ig.game.playerDead=true;ig.game.fadeOut(0,ig.game.colorWrong);}
if(this.health<=0&&!this.dying){this.initDeathSeq("fallThrough");}
var maxX=ig.game.collisionMap.width*ig.game.collisionMap.tilesize;var maxY=ig.game.collisionMap.height*ig.game.collisionMap.tilesize;if(this.pos.y<0&&!this.dying||this.pos.x<0&&!this.dying||this.pos.y>maxY&&!this.dying||this.pos.x>maxX&&!this.dying){this.initDeathSeq();}
if(this.loud&&this.loudTimer.delta()>0){this.loud=false;}
if(this.invin&&this.invincibleTimer.delta()>0){this.invin=false;}
if(this.attacking&&this.attackTimer.delta()>0||this.attacking&&this.victoryDance){this.endAttack();}
if(!this.readyToAttack&&this.readyToAttackTimer.delta()>0){this.readyToAttack=true;}
if(this.dieUp&&this.dieUpTimer.delta()>0){this.dieUp=false;}
if(ig.game.flashingMessage&&ig.game.flashingMessageTimer.delta()>0){ig.game.flashingMessage=false;}},
playMusicBro:function(){},update:function(){if(!this.musicPlaying&&!ig.game.cutScreen&&!ig.game.titleScreen&&!ig.game.fadeToRed&&!ig.game.endingScreen){this.musicPlaying=true;}
if(this.pause||ig.game.playerDead){this.checkForUnpause();}
if(ig.game.pause&&!this.pause){this.readyBro=false;this.paused();}
else if(this.pause&&!ig.game.pause){this.readyBro=true;this.unpaused();}
if(this.readyBro){this.checkForSlopes();this.movements();}
else if(this.dying){this.collides=ig.Entity.COLLIDES.NEVER;this.type=ig.Entity.TYPE.NONE;if(this.deathMode=="fallThrough"){}}
this.checkConditions();this.animMe();this.parent();},initDeathSeq:function(deathMode){if(deathMode){this.deathMode=deathMode;}
this.deathAnim=true;this.anims.dying.rewind();this.dying=true;this.dieUpTimer.set(this.dieUpTime);this.dieUp=true;ig.game.dying=true;this.deathTimer.set(2);if(!ig.game.muteGame){ig.game.deadSound.volume=.25;ig.game.deadSound.play();}
ig.game.lastTokens=ig.game.pData.tokensLT;},kill:function(){this.parent();},handleMovementTrace:function(res){if(this.deathMode=="fallThrough"&&this.dying){this.pos.x+=this.vel.x*ig.system.tick;this.pos.y+=this.vel.y*ig.system.tick;}
else{var accel=this.standing?this.accelGround:this.accelAir;if(res.collision.y||res.collision.slope){this.vel.y=0;if(this.jumpCount>0){this.beLoud(' landing from jump');}
this.jumpCount=0;if(this.mySpeed=="run"&&this.vel.x<160){this.vel.x=160;}
else if(this.vel.x<120){this.vel.x=120;}
if(!this.landed){this.landed=true;ig.game.readyToScore=true;ig.game.syncNow=true;ig.game.transition=false;ig.game.readyToLoad=false;ig.game.setBonusValues();this.vel.x=120;ig.game.playMusicBro();ig.game.cutCleared=false;}}
if(this.standing){this.vel.y-=100;this.currentAnim.angle=5.5;}
else{this.currentAnim.angle=0;}
this.parent(res);}}});ig.EntityPool.enableFor(EntityPlayer);});

