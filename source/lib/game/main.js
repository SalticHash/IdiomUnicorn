
ig.baked=true;ig.module('game.main').requires('impact.game','impact.font','plugins.camera','plugins.dynamic-fonts','plugins.quizbox','plugins.touch-button','game.entities.answer','game.entities.axeknight','game.entities.bowknight','game.entities.button','game.entities.glassbrick','game.entities.goal','game.entities.token','game.entities.swordknight','game.entities.mutebutton','game.entities.player','game.entities.spiketile','game.entities.shieldknight','game.entities.shieldknighttwo','game.entities.spearknight','game.entities.swordknight','game.entities.wizard','game.entities.wiztrigger','game.levels.l1','game.levels.l2','game.levels.l3','game.levels.l4','game.levels.l5','game.levels.l6','game.levels.l7','game.levels.l8','game.levels.l9','game.levels.l10','game.levels.l11','game.levels.l12','game.levels.l13','game.levels.l14','game.levels.l15','game.levels.l16','game.levels.l17','game.levels.l18','game.levels.l19','game.levels.l20','game.levels.l21','game.levels.l22','game.levels.l23','game.levels.l24','game.levels.l25','game.levels.l26','game.levels.l27','game.levels.l28','game.levels.l29','game.levels.l30','game.levels.l31','game.levels.l32','game.levels.l33','game.levels.l34','game.levels.l35','game.levels.l36','game.levels.l37','game.levels.l38','game.levels.l39','game.levels.l40','game.levels.l41','game.levels.l42','game.levels.l43','game.levels.l44','game.levels.l45','game.levels.l46','game.levels.l47','game.levels.l48','game.levels.l49','game.levels.l50').defines(function(){MyGame=ig.Game.extend({totalLevels:50,currentHighScore:0,lastScore:null,transitionReady:false,gravity:750,bonusValue:-250,font:new ig.Font('media/04b03.font.png'),
frozeScreenCheck: false,																																																																																																																																																																																																																																																																																																																																																																																																																											color1:"#69FFB4",
color2:"#ffe4e1",
color3:"#b000ff",
color4:"#69FFB4",color5:"#ffff00 ",color6:"#ffe4e1",color7:"#000000",colorRight:"#69FFB4",colorWrong:"#FF69B4 ",defaultStatTextColor:"#000000",displayHelp:true,displayHelpAttack:true,displayHelpJump:true,displayHelpRun:true,buttonLeft:new ig.Image('media/buttons-and-logos/button-left.png'),buttonRight:new ig.Image('media/buttons-and-logos/button-right.png'),buttonJump:new ig.Image('media/buttons-and-logos/button-jump.png'),buttonA:new ig.Image('media/buttons-and-logos/button-a.png'),buttonLeftSmall:new ig.Image('media/buttons-and-logos/button-left-small.png'),buttonRightSmall:new ig.Image('media/buttons-and-logos/button-right-small.png'),buttonJumpSmall:new ig.Image('media/buttons-and-logos/button-jump-small.png'),buttonASmall:new ig.Image('media/buttons-and-logos/button-a-small.png'),buttonLeftSmaller:new ig.Image('media/buttons-and-logos/button-left-smaller.png'),buttonRightSmaller:new ig.Image('media/buttons-and-logos/button-right-smaller.png'),buttonJumpSmaller:new ig.Image('media/buttons-and-logos/button-jump-smaller.png'),buttonASmaller:new ig.Image('media/buttons-and-logos/button-a-smaller.png'),buttonMute:new ig.Image('media/buttons-and-logos/button-mute.png'),buttonMuted:new ig.Image('media/buttons-and-logos/button-muted.png'),buttonMuteSmall:new ig.Image('media/buttons-and-logos/button-mute-small.png'),buttonMutedSmall:new ig.Image('media/buttons-and-logos/button-muted-small.png'),muteGame:false,musicLevel:1,songs:{l1:new ig.Sound('media/music/01-the-witch.*',false),l2:new ig.Sound('media/music/02-the-quest.*',false),l3:new ig.Sound('media/music/03-spaghetti.*',false),l4:new ig.Sound('media/music/04-melt.*',false),l5:new ig.Sound('media/music/05-moon-02.*',false),},rightSound:new ig.Sound('media/sounds/right.*'),wrongSound:new ig.Sound('media/sounds/wrong.*'),deadSound:new ig.Sound('media/music/death-song.*'),victorySound:new ig.Sound('media/music/victory-track.*'),youWinSound:new ig.Sound('media/sounds/you-win.*'),clapSoundOne:new ig.Sound('media/sounds/clap-01.*'),clapSoundTwo:new ig.Sound('media/sounds/clap-02.*'),clapSoundThree:new ig.Sound('media/sounds/clap-03.*'),clapSoundFour:new ig.Sound('media/sounds/clap-04.*'),clapSoundFive:new ig.Sound('media/sounds/clap-05.*'),newHighScore:new ig.Sound('media/sounds/new-high-score.*'),hit1:new ig.Sound('media/sounds/hit-01.*'),hit2:new ig.Sound('media/sounds/hit-02.*'),hit3:new ig.Sound('media/sounds/hit-03.*'),hit4:new ig.Sound('media/sounds/hit-04.*'),hit5:new ig.Sound('media/sounds/hit-05.*'),hit6:new ig.Sound('media/sounds/hit-06.*'),hit7:new ig.Sound('media/sounds/hit-07.*'),tokenHud:new ig.Image('media/hud-token.png'),tokenHudBig:new ig.Image('media/hud-token-big.png'),enemyRecoveryTime:.66,fadeColor:this.color3,slideColor:this.color3,titleScreen:true,deathScreen:false,endingScreen:false,transition:false,transitionType:null,flashScreen:false,flashScreenColor:null,flashMsgOnTime:.85,flashMsgOffTime:.15,flashMsg:true,rainbowKillCount:0,spike:false,quiz:false,questionText:null,invincibleTime:1.1,maxHeaderHeightRatio:0.15,maxHeaderHeight:null,maxHeaderLines:2,maxHeaderLinesPortrait:3,maxQuestionHeightRatio:0.5,maxQuestionHeight:null,maxQuestionLines:3,maxQuestionLinesPortrait:3,maxCorrectionHeightRatio:0.15,maxCorrectionHeight:null,maxCorrectionLines:2,maxCorrectionLinesPortrait:3,maxTinyQuestionHeightRatio:0.15,maxTinyQuestionHeight:null,maxTinyQuestionLines:3,maxTinyQuestionLinesPortrait:4,maxButtonLineHeight:1,maxButtonLineHeightPortrait:1,bonusTime:60,qBoardColor:"#f4fcf7",qBoardInnerFrameColor:"#fcf4f9",qBoardOuterFrameColor:"#855b5b",rightColor:"#69FFB4",wrongColor:"#FF69B4 ",qBoardHeight:.45,answerChoices:3,answerColumns:1,ca:null,ac1:null,ac2:null,ac3:null,ac4:null,ac5:null,ac6:null,flickerColor:false,flickerCount:0,flickerTotalCount:0,flickerFreq:1,maxFlickers:50,init:function(){ig.input.bind(ig.KEY.MOUSE1,'click');ig.input.bind(ig.KEY.LEFT_ARROW,'left');ig.input.bind(ig.KEY.RIGHT_ARROW,'right');ig.input.bind(ig.KEY.UP_ARROW,'jump');ig.input.bind(ig.KEY.DOWN_ARROW,'down');ig.input.bind(ig.KEY.SPACE,'action');
																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																										this.transitionTimer=new ig.Timer(0);
this.flashScreenTimer=new ig.Timer(0);
this.flashMessageTimer=new ig.Timer(0);
this.questionClearTimer=new ig.Timer(0);
this.deathScreenTimer=new ig.Timer(0);
this.frozeScreenTimer=new ig.Timer(0);
this.bonusTimer=new ig.Timer(this.bonusTime);
																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																													this.loadTSImages();this.dFonts=new DynamicFonts();this.loadGame();this.LoadLevelBro(this.pData.lvl);this.quizbox=new Quizbox();ig.game.spawnEntity(EntityButton,0,0,{name:"start"});if(this.savedGame){ig.game.spawnEntity(EntityButton,0,0,{name:"continue"});}
this.setupCamera();ig.game.setButtons();if(ig.ua.mobile){this.amImobile=true;}
else{this.amImobile=false;}
ig.music.add(this.songs.l1,01,["l1"]);ig.music.add(this.songs.l2,02,["l2"]);ig.music.add(this.songs.l3,03,["l3"]);ig.music.add(this.songs.l4,04,["l4"]);ig.music.add(this.songs.l5,05,["l5"]);ig.music.loop=true;ig.music.volume=this.musicLevel;if(!ig.game.muteGame){}},rainbowKillCounter:function(whoAmI){if(ig.game.getEntityByName('player')){var player=ig.game.getEntityByName('player')
if(player.attacking){ig.game.rainbowKillCount++;}
else{ig.game.rainbowKillCount=1;}
var myValue=ig.game.rainbowKillCount*100;if(whoAmI=="bowKnight"&&myValue<200){myValue=200;}
if(whoAmI=="shieldKnight"&&myValue<300){myValue=300;}
if(whoAmI=="shieldKnightTwo"&&myValue<500){myValue=500;}
if(whoAmI=="axeKnight"&&myValue<500){myValue=500;}
if(whoAmI=="groundWizard"&&myValue<500){myValue=500;}
if(whoAmI=="airWizard"&&myValue<900){myValue=900;}
if(myValue>=1000){myValue=5000;}
if(myValue==600){myValue=1000;}
if(myValue==700){myValue=2000;}
if(myValue==800){myValue=3000;}
if(myValue==900){myValue=4000;}
if(!ig.game.muteGame&&player.attacking){if(ig.game.rainbowKillCount==1){ig.game.hit1.volume=.03;ig.game.hit1.play();}
else if(ig.game.rainbowKillCount==2){ig.game.hit2.volume=.03;ig.game.hit2.play();ig.game.clapSoundOne.volume=.1;ig.game.clapSoundOne.play();}
else if(ig.game.rainbowKillCount==3){ig.game.hit3.volume=.03;ig.game.hit3.play();ig.game.clapSoundOne.stop();ig.game.clapSoundTwo.volume=.1;ig.game.clapSoundTwo.play();}
else if(ig.game.rainbowKillCount==4){ig.game.hit4.volume=.03;ig.game.hit4.play();ig.game.clapSoundThree.volume=.125;ig.game.clapSoundThree.play();ig.game.clapSoundOne.stop();ig.game.clapSoundTwo.stop();}
else if(ig.game.rainbowKillCount==5){ig.game.hit5.volume=.03;ig.game.hit5.play();ig.game.clapSoundFour.volume=.15;ig.game.clapSoundFour.play();ig.game.clapSoundOne.stop();ig.game.clapSoundTwo.stop();ig.game.clapSoundThree.stop();}
else if(ig.game.rainbowKillCount>5){if(ig.game.rainbowKillCount==6){ig.game.hit6.volume=.03;ig.game.hit6.play();ig.game.clapSoundFive.volume=.175;ig.game.clapSoundFive.play();ig.game.clapSoundOne.stop();ig.game.clapSoundTwo.stop();ig.game.clapSoundThree.stop();ig.game.clapSoundFour.stop();}
else if(ig.game.rainbowKillCount==7){ig.game.hit7.volume=.03;ig.game.hit7.play();}}}}
if(isNaN(myValue)){myValue=100;}
ig.game.pData.tokensLT+=myValue;ig.game.highScoreCheck();return myValue;},



update:function(){this.parent();if(this.quiz||this.transition||this.titleScreen||this.deathScreen||this.levelCleared||this.endingScreen){ig.game.pause=true;}
else{ig.game.pause=false;}
	if(this.quiz&&this.correctionOn&&this.questionClearTimer.delta()>0&&ig.input.released('click')||this.quiz&&this.correctionOn&&this.questionClearTimer.delta()>0&&ig.input.released('jump')||this.quiz&&this.correctionOn&&this.questionClearTimer.delta()>0&&ig.input.released('action')||this.quiz&&this.correctionOn&&this.questionClearTimer.delta()>0&&ig.input.pressed('right')||this.quiz&&this.correctionOn&&this.questionClearTimer.delta()>0&&ig.input.pressed('left')){if(!ig.game.wasItRight){
		if (ig.game.restorePlayer){
			ig.game.restorePlayer = false;
			if(ig.game.getEntityByName('player')){
				var player=ig.game.getEntityByName('player');
				player.readyToAttackTimer.set(0);
				player.readyToAttack = false;
				player.invincible(5);
			}
			ig.game.playMusicBro();
		}
		else{
			this.punishPlayer();
		}
	}
else if(ig.game.spike){ig.game.spike=false;if(ig.game.getEntityByName('player')){var player=ig.game.getEntityByName('player');player.spring=true;}}
this.clearTheQuestion();}
if(!this.endingScreen&&!this.cutCleared&&this.transitionReady&&ig.input.released('click')&&!this.deathScreen||!this.endingScreen&&!this.cutCleared&&this.transitionReady&&ig.input.released('action')&&!this.deathScreen||!this.endingScreen&&!this.cutCleared&&this.transitionReady&&ig.input.released('jump')&&!this.deathScreen||!this.endingScreen&&!this.cutCleared&&this.transitionReady&&ig.input.pressed('right')&&!this.deathScreen){
	ig.game.sortEntitiesDeferred();
	this.cutCleared=true;
	ig.game.slideRightOut("","",3);
	if(ig.game.getEntityByName('player')){
		var player=ig.game.getEntityByName('player');
		player.vel.x=120;
	}
}
else if(ig.input.released('action') && !this.frozeScreenCheck && ig.game.levelCleared || ig.input.released('click') && !this.frozeScreenCheck && ig.game.levelCleared){
	this.frozeScreenCheck = true;
	this.frozeScreenTimer.set(4);
}

if (ig.input.released('action') && this.frozeScreenCheck && this.frozeScreenTimer.delta() > 0  || ig.input.released('click') && this.frozeScreenCheck && this.frozeScreenTimer.delta() > 0 ){
	this.frozeScreenCheck  = false;
	if (ig.game.levelCleared){
		console.log('unfreeze screen');
		ig.game.sortEntitiesDeferred();
		this.cutCleared=true;
		ig.game.slideRightOut("","",3);
		if(ig.game.getEntityByName('player')){
			var player=ig.game.getEntityByName('player');
			player.vel.x=120;
		}
	}
}

if(this.deathScreen&&this.deathScreenTimer.delta()>0&&ig.input.released('click')||this.deathScreen&&this.deathScreenTimer.delta()>0&&ig.input.released('jump')||this.deathScreen&&this.deathScreenTimer.delta()>0&&ig.input.released('action')||this.deathScreen&&this.deathScreenTimer.delta()>0&&ig.input.pressed('right')){ig.game.sortEntitiesDeferred();ig.game.sortEntitiesDeferred();this.deathScreen=false;ig.game.levelCleared = false; this.cutCleared=true;ig.game.pause=true;if(ig.game.getEntityByName('player')){var player=ig.game.getEntityByName('player');player.vel.x=120;}}
if(this.endingScreen&&!this.cutCleared&&ig.game.flickerTotalCount>=this.maxFlickers&&ig.input.released('click')&&this.transitionReady&&!ig.game.transition){ig.game.sortEntitiesDeferred();this.cutCleared=true;ig.game.fadeIn(0,this.colorRight);}
if(ig.game.getEntityByName('player')){var player=ig.game.getEntityByName('player');this.cameraHeightFactorY=ig.ua.mobile?1:1;if(!this.quiz){this.camera.follow(this.player);}}},

draw:function(){this.parent();if(ig.game.displayHelp){this.displayHelpMessages();}
if(this.buttonSet&&!this.quiz){this.buttonSet.draw();}
if(!this.quiz&&!ig.game.levelCleared||!this.quiz&&this.cutCleared){this.drawMuteButton();this.drawHUD();this.drawChargeBar();}
if(ig.game.showBonus){this.drawBonus();}
if(this.titleScreen){this.drawTitleScreen();}
if(this.transition){this.drawTransition();}
else if(this.deathScreen){this.drawABox(0,ig.system.width,0,ig.system.height,0,this.colorWrong,true,this.colorWrong);}
if(this.playerDead){this.setCutScreenText("Aw, Shucks!","Click to continue",this.color2,this.color3,this.color4);this.drawCutScreenText();}
else if(ig.game.endingScreen){this.setCutScreenText("You Are Winner!","Click to Play Again!",this.color3,this.color2,this.color4);}
else if(ig.game.levelCleared){this.setCutScreenText("Yippee Skippy!","Click to continue",this.colorRight,this.color2,this.color4);this.drawCutScreenText();}
if(this.quiz){this.drawBoard(this.qBoardHeight,this.qBoardColor,this.qBoardInnerFrameColor,this.qBoardOuterFrameColor);this.drawButtons(this.answerChoices,this.answerColumns);this.writeOnTheBoard();}
this.flashScreenCheck();if(this.endingScreen==true){this.drawEndingScreen();this.drawCutScreenText();}},makeRightSound:function(){if(!ig.game.muteGame){this.rightSound.volume=.2;this.rightSound.play();}},displayHelpMessages:function(){var ctx=ig.system.context;if(ig.system.width<=500){this.dFonts.setTxtSizeHUD(ctx,1);}
else{this.dFonts.setTxtSizeHUD(ctx,.75);}
var runHelpMsg="Press the Arrow Key Right to Run!";var jumpHelpMsg="Press the Arrow Key UP to Jump!";var attackHelpMsg="Press the Space Bar to Attack!";var msgHeight=ig.system.height*.9;if(ig.ua.mobile){runHelpMsg="Press the Right Arrow to Run!";jumpHelpMsg="Press the Up Arrow to Jump!";attackHelpMsg="Press the A Button to Attack!";msgHeight=ig.system.height*.75;var height=ig.system.height;var width=ig.system.width;if(height<width){msgHeight=ig.system.height*.33;}}
if(ig.game.displayHelpRun){ig.system.context.fillStyle=this.color2;ctx.fillText(runHelpMsg,ig.system.width*.025,msgHeight);}
else if(ig.game.displayHelpJump){ig.system.context.fillStyle=this.color4;ctx.fillText(jumpHelpMsg,ig.system.width*.025,msgHeight);}
else if(ig.game.displayHelpAttack){ig.system.context.fillStyle=this.color2;ctx.fillText(attackHelpMsg,ig.system.width*.025,msgHeight);}
if(!this.titleScreen&&!this.transition){if(ig.game.displayHelpRun&&ig.input.pressed('right')){this.makeRightSound();ig.game.displayHelpRun=false;}
else if(ig.game.displayHelpJump&&!ig.game.displayHelpRun&&ig.input.pressed('jump')){this.makeRightSound();ig.game.displayHelpJump=false;}
else if(ig.game.displayHelpAttack&&!ig.game.displayHelpJump&&ig.input.pressed('action')){this.makeRightSound();ig.game.displayHelpAttack=false;ig.game.displayHelp=false;}}},drawBonus:function(){var ctx=ig.system.context;if(ig.game.pData.lvl>10&&ig.game.pData.lvl<=20){ig.system.context.fillStyle='#b000ff';}
else if(ig.game.pData.lvl>30&&ig.game.pData.lvl<=40){ig.system.context.fillStyle='#000000';}
else{ig.system.context.fillStyle='#ffffff';}
if(ig.system.width<=500){this.dFonts.setTxtSizeHUD(ctx,1);}
else{this.dFonts.setTxtSizeHUD(ctx,.75);}
ctx.fillText("Time Bonus: "+ig.game.bonus,ig.system.width*.025,ig.system.height*.9);if(ig.system.width<=500){this.dFonts.setTxtSizeHUD(ctx,.75);}
else{this.dFonts.setTxtSizeHUD(ctx,.5);}},drawChargeBar:function(){theWidth=ig.system.width;theHeight=ig.system.height;var ctx=ig.system.context;var player=ig.game.getEntityByName('player');cBarPosX=theWidth*.7;cBarPosY=theHeight*.05;cBarBorder=theWidth*.0025;cBarFill=theWidth*.68;if(theWidth>theHeight){cBarWidth=theWidth*.15;cBarHeight=theHeight*.05;}
else{cBarWidth=theWidth*.2;cBarHeight=theHeight*.025;}
cBarPosX=10;cBarPosY=theHeight*.05;cBarBorder=theWidth*.0025;cBarFill=theWidth*.68;this.cBarRightX=cBarPosX+cBarWidth;this.cBarBottomY=cBarPosY+(cBarHeight*2)+(cBarBorder*2);this.cBarTopY=cBarPosY+cBarHeight;ig.system.context.globalAlpha=0.5;if(!player.attacking&&player.readyToAttack){ig.system.context.fillStyle="#FFFFFF";}
else{if(player.chargeFlash==true){ig.system.context.fillStyle="#FFFFFF";}
else{ig.system.context.fillStyle="#FF0000";}}
ig.system.context.fillRect(cBarPosX,cBarPosY,cBarWidth,cBarHeight);ig.system.context.fillStyle="#ffffff";ig.system.context.fillRect(cBarPosX+cBarBorder,cBarPosY+cBarBorder,cBarWidth-(cBarBorder*2),cBarHeight-(cBarBorder*2));var maxWidthOfCharge=cBarWidth-(cBarBorder*2);var widthOfCharge=null;ig.system.context.fillStyle="#009900";widthOfCharge=maxWidthOfCharge;if(!player.attacking&&player.readyToAttack){ig.system.context.fillStyle="#FA339A";ig.system.context.fillRect(cBarPosX+cBarBorder,cBarPosY+cBarBorder,widthOfCharge,cBarHeight-(cBarBorder*2));}
else if(player.attacking){ig.system.context.fillStyle="#ffe71a";moreToCharge=maxWidthOfCharge*(-player.attackTimer.delta());widthOfCharge=moreToCharge;ig.system.context.fillRect(cBarPosX+cBarBorder,cBarPosY+cBarBorder,widthOfCharge,cBarHeight-(cBarBorder*2));}
else if(!player.readyToAttack){if(player.readyToAttackTimer.delta()>-.3){ig.system.context.fillStyle="#fc7cbe";}
else{ig.system.context.fillStyle="#fed8ec";}
moreToCharge=maxWidthOfCharge*(player.readyToAttackTimer.delta()/2);widthOfCharge=maxWidthOfCharge+moreToCharge;ig.system.context.fillRect(cBarPosX+cBarBorder,cBarPosY+cBarBorder,widthOfCharge,cBarHeight-(cBarBorder*2));}
ig.system.context.globalAlpha=1;},LoadLevelBro:function(currentLvlNum){this.handleScore(currentLvlNum-1);if(currentLvlNum<=this.totalLevels){ig.game.pause=true;ig.game.pData.tokensLT=0;var whichLvl=parseInt(currentLvlNum);var lvlStr=eval("LevelL"+whichLvl);ig.game.muteButtonAlive=false;this.loadLevel(lvlStr);this.setupCamera();this.readyToLoad=false;this.spawnButtons();}
else{ig.game.victorySound.stop();if(!ig.game.muteGame){ig.game.youWinSound.play();}
ig.game.pData.timesPassed++;window.localStorage.setItem("timesPassed",ig.game.pData.timesPassed);ig.game.pData.lvl=1;this.saveGame();ig.game.endingScreen=true;ig.game.muteButtonAlive=false;this.LoadLevelBro(1);this.setupCamera();this.readyToLoad=false;this.spawnButtons();}
this.getHighScore(ig.game.pData.lvl);},spawnButtons:function(){if(!ig.game.muteButtonAlive){ig.game.spawnEntity(EntityMutebutton,0,0);}},setupCamera:function(){this.camera=new Camera(ig.system.width/4,ig.system.height/2.25,5);this.camera.trap.size.x=ig.system.width/10;this.camera.trap.size.y=ig.system.height/5;this.camera.lookAhead.x=0;this.camera.max.x=this.collisionMap.pxWidth-ig.system.width;this.camera.max.y=this.collisionMap.pxHeight-ig.system.height;if(ig.game.getEntityByName('fish')){var player=ig.game.getEntityByName('fish');this.camera.set(player);}},lastTokens:null,pData:{"tokens":0,"tokensLT":0,"tokensGT":0,"lvl":1,"deaths":0,"qRight":0,"qWrong":0,"timesPassed":0,},getHighScore:function(lvl){var fLvl="hs"+lvl;if(window.localStorage.getItem(fLvl)){this.currentHighScore=JSON.parse(window.localStorage.getItem(fLvl));if(!this.currentHighScore){this.currentHighScore=0;}}
else{this.currentHighScore=0;}
this.hasHighScore=this.currentHighScore>0?true:false;},handleScore:function(lvl){var fLvl="hs"+lvl;if(this.lastScore>=this.currentHighScore&&!isNaN(this.lastScore)&&ig.game.readyToScore){window.localStorage.setItem(fLvl,this.lastScore);ig.game.readyToScore=false;}},setBonusValues:function(){if(ig.game.pData.lvl<=10){ig.game.bonusTime=60;}
else if(ig.game.pData.lvl<=20){ig.game.bonusTime=70;}
else if(ig.game.pData.lvl<=40){ig.game.bonusTime=80;}
else if(ig.game.pData.lvl<=50){ig.game.bonusTime=100;}
ig.game.bonusValue=-250;ig.game.bonusTimer.set(ig.game.bonusTime);},highScoreCheck:function(){if(this.currentHighScore<=ig.game.pData.tokensLT){this.currentHighScore=ig.game.pData.tokensLT;}},processTokens:function(dir){if(dir=="reset"){ig.game.pData.tokensLT=0;this.oldLastScore=this.lastScore;this.lastScore=null;ig.game.startingTokens=ig.game.pData.tokens;}
if(dir=="rewind"){ig.game.pData.tokens=ig.game.startingTokens;}
if(dir=="bank"){this.lastScore=ig.game.pData.tokensLT+ig.game.bonusNum;ig.game.pData.tokensGT+=ig.game.pData.tokensLT+ig.game.bonusNum;}},round5:function(x){return Math.ceil(x/5)*5;},
	playMusicBro:function(){ig.game.deadSound.stop();ig.game.victorySound.stop();if(ig.game.pData.lvl<=10){ig.game.musicLevel=.2;ig.music.play(01);}
else if(ig.game.pData.lvl<=20){ig.game.musicLevel=.2;ig.music.play(02);}
else if(ig.game.pData.lvl<=30){ig.game.musicLevel=.2;ig.music.play(03);}
else if(ig.game.pData.lvl<=40){ig.game.musicLevel=.2;ig.music.play(04);}
else if(ig.game.pData.lvl>40){ig.game.musicLevel=.2;ig.music.play(05);}

if(!ig.game.muteGame){ig.music.volume=ig.game.musicLevel;}
else{ig.music.volume=0;}},drawHUD:function(){var ctx=ig.system.context;var tokenY=this.cBarBottomY;if(ig.system.width<=400){this.tokenHud.draw(20,tokenY);}
else{this.tokenHudBig.draw(14,tokenY-12);}
this.setFontSizeHUD();ig.system.context.fillStyle='#ffffff';var currentScoreTD=this.showBonus?ig.game.pData.tokensLT+ig.game.bonus:ig.game.pData.tokensLT;ctx.fillText(currentScoreTD,20+this.tokenHud.width*1.5,tokenY+this.tokenHud.height);if(ig.system.width<=500){this.dFonts.setTxtSizeHUD(ctx,.75);}
else{this.dFonts.setTxtSizeHUD(ctx,.5);}
var hsPosX=this.cBarRightX+5;var hsPosY=this.cBarTopY;if(this.hasHighScore){ctx.fillText("High Score "+this.currentHighScore,hsPosX,hsPosY);}},setFontSizeHUD:function(){var ctx=ig.system.context;if(ig.system.width<=500){this.dFonts.setTxtSizeHUD(ctx,1.2);}
else{this.dFonts.setTxtSizeHUD(ctx,.75);}},drawCutScreenText:function(headline,bottomline,headerColor,statColor,CTAColor){var ctx=ig.system.context;ig.game.storedBaseline=ctx.textBaseline;ctx.textBaseline="hanging";var height=ig.system.height;var width=ig.system.width;var xMargin=width*.05;var yMargin=height*.05;var writableAreaX=width-(xMargin*2);var addToX=0;var addToY=0;if(this.transition){if(this.transitionType=="fadeIn"){var curOpacity=0;if(this.transitionTimer.delta()<0){curOpacity=this.transitionTimer.delta()*-1;}
ctx.globalAlpha=curOpacity;}
else if(this.transitionType=="fadeOut"){var curOpacity=1;if(this.transitionTimer.delta()<1){curOpacity=this.transitionTimer.delta();}
ctx.globalAlpha=curOpacity;}
else if(this.transitionType=="slideDownOut"||this.transitionType=="slideUpOut"||this.transitionType=="slideDownIn"||this.transitionType=="slideUpIn"){addToY=this.slideAddToY;}
else if(this.transitionType=="slideRightIn"||this.transitionType=="slideRightOut"){addToX=this.slideAddToX;}}
var statLines=this.calculateStatLines()+3;var statsToDisplay=this.calculateStatLines();var yMarginCount=statLines+2;var yMarginTotalSize=yMarginCount*yMargin;this.dFonts.changeFont(ctx,5);if(height>width){this.dFonts.changeFont(ctx,7);}
if(headerColor){ctx.fillStyle=headerColor;}
else if(this.csHdrClr){ctx.fillStyle=this.csHdrClr;}
else{ctx.fillStyle=this.defaultStatTextColor;}
var header="Enter a headline.";if(headline){header=headline;}
else if(this.csHdrTxt){header=this.csHdrTxt}
var xPos=xMargin;var yPos=yMargin;this.dFonts.wrapTheText(ctx,header,xPos+addToX,yPos+addToY,writableAreaX,this.dFonts.style5LineHeight);yPos=this.dFonts.cursorPosYNewLine+yMargin;this.dFonts.changeFont(ctx,3);if(height>width){this.dFonts.changeFont(ctx,5);}
if(statColor){ctx.fillStyle=statColor;}
else if(this.csTxtClr){ctx.fillStyle=this.csTxtClr;}
else{ctx.fillStyle=this.defaultStatTextColor;}
var remainingY=height-yPos;var slotSizeY=remainingY/statLines;var ctaYmultiplier=4;if(ig.game.endingScreen){this.dFonts.wrapTheText(ctx,"You beat all "+this.totalLevels+" levels!",xPos+addToX,yPos+addToY,writableAreaX,this.dFonts.style3LineHeight);}
else{var msg="You beat level "+(ig.game.pData.lvl-1)+"."
if(ig.game.pData.lvl==1&&this.playerDead){msg="Nice try.";}
else if(this.playerDead){msg="You made it to level "+(ig.game.pData.lvl)+"."}
this.dFonts.wrapTheText(ctx,msg,xPos+addToX,yPos+addToY,writableAreaX,this.dFonts.style3LineHeight);}
var ols=0;if(this.oldLastScore>0){ols=this.oldLastScore}
else if(this.lastScore>0){ols=this.lastScore;}
this.dFonts.wrapTheText(ctx,"Level Points: "+ols,xPos+addToX,yPos+addToY+slotSizeY,writableAreaX,this.dFonts.style3LineHeight);this.dFonts.wrapTheText(ctx,"Total Points: "+ig.game.pData.tokensGT,xPos+addToX,yPos+addToY+slotSizeY*2,writableAreaX,this.dFonts.style3LineHeight);this.dFonts.wrapTheText(ctx,"Questions Right: "+ig.game.pData.qRight,xPos+addToX,yPos+addToY+slotSizeY*3,writableAreaX,this.dFonts.style3LineHeight);this.dFonts.wrapTheText(ctx,"Questions Wrong: "+ig.game.pData.qWrong,xPos+addToX,yPos+addToY+slotSizeY*4,writableAreaX,this.dFonts.style3LineHeight);if(statsToDisplay>5){}
ctaYmultiplier+=1.5;if(CTAColor){ctx.fillStyle=CTAColor;}
else if(this.csCtaClr){ctx.fillStyle=this.csCtaClr;}
else{ctx.fillStyle=this.defaultStatTextColor;}
var bottomlineTxt="Click anywhere to continue."
if(bottomline){bottomlineTxt=bottomline;}
else if(this.csCtaTxt){if(this.endingScreen&&ig.game.flickerTotalCount<this.maxFlickers){bottomlineTxt="";}
else{bottomlineTxt=this.csCtaTxt;}}
if(this.flashMsg){this.dFonts.wrapTheText(ctx,bottomlineTxt,xPos+addToX,yPos+addToY+slotSizeY*ctaYmultiplier,writableAreaX,this.dFonts.style3LineHeight);if(this.flashMessageTimer.delta()>0){this.flashMsg=false;this.flashMessageTimer.set(this.flashMsgOffTime);}}
else{if(this.flashMessageTimer.delta()>0){this.flashMsg=true;this.flashMessageTimer.set(this.flashMsgOnTime);}}
ctx.globalAlpha=1;ctx.textBaseline=ig.game.storedBaseline;},calculateStatLines:function(){var statLines=0;statLines++;statLines++;statLines++;statLines++;statLines++;if(ig.game.pData.timesPassed){}
return statLines;},drawABox:function(lx,rx,ty,by,lineWidth,lineColor,fill,fillcolor){var ctx=ig.system.context;ctx.beginPath();ctx.moveTo(lx,ty);ctx.lineTo(rx,ty);ctx.lineTo(rx,by);ctx.lineTo(lx,by);ctx.lineTo(lx,ty);ctx.closePath();if(lineWidth){ctx.lineWidth=lineWidth;}
if(lineColor){ctx.strokeStyle=lineColor;}
ctx.stroke();if(fillcolor){ig.system.context.fillStyle=fillcolor;}
if(fill==true){ctx.fill();}},drawTitleScreen:function(){var ctx=ig.system.context;this.drawABox(0,ig.system.width,0,ig.system.height,0,this.color1,true,this.color1);var logoWidth=ig.system.width*.8;var logoMargin=ig.system.width*.1;var logoHeight=logoWidth/10;var imageWidth=ig.system.height*.4;var imageHeight=imageWidth;var imageX=ig.system.width/2-(imageWidth/2);var imageY=ig.system.height*.35;var butWidth=0;var butHeight=0;var imageY=ig.system.height*.025;var buffer=ig.system.height*.025;if(ig.system.height>ig.system.width){imageY=ig.system.height*.05;logoWidth=ig.system.width*.7;logoHeight=logoWidth;butWidth=ig.system.width*.425;butHeight=butWidth/4;this.ngbX=(ig.system.width/2)-(butWidth/1.75);this.ngbY=imageY+logoHeight+buffer;this.ctbX=this.ngbX;if(ig.system.height>ig.system.width*1.75){this.ctbY=this.ngbY+butHeight+(buffer*4)}
else{this.ctbY=this.ngbY+butHeight+(buffer*2);}}
else{logoWidth=ig.system.height*.7;logoHeight=logoWidth;butWidth=ig.system.height*.45;butHeight=butWidth/4;if(butWidth){this.ctbX=(ig.system.width/2)-(butWidth+buffer);this.ngbY=buffer+logoHeight+buffer;this.ngbX=(ig.system.width/2)+buffer*3;if(!this.savedGame){if(ig.system.width<this.logoWidthThresh){this.ngbX=(ig.system.width/2)-(butWidth/1.75);}
else{this.ngbX=(ig.system.width/2)-(butWidth/2.1);}}
this.ctbY=this.ngbY}
else{this.ngbX=(ig.system.width/2)-(butWidth/2);this.ngbY=buffer+logoHeight+buffer;this.ctbX=this.ngbX;this.ctbY=this.ctbY}}
this.tsButtonWidth=butWidth;this.tsButtonHeight=butHeight;imageX=(ig.system.width/2)-(logoWidth/2);ctx.drawImage(this.tsImage,imageX,imageY,logoWidth,logoHeight);ctx.drawImage(this.newGameButton,this.ngbX,this.ngbY,butWidth,butHeight);if(this.savedGame){ctx.drawImage(this.continueButton,this.ctbX,this.ctbY,butWidth,butHeight);}
ctx.fillStyle=this.color2;},checkForMessages:function(){if(ig.game.pData.lvl==1){}},flashThisText:function(txt,dur,color,size){var ctx=ig.system.context;this.flashingMessage=true;color?this.flashMsgColor=color:this.flashMsgColor=this.color6;size?this.flashMsgSize=size:this.flashMsgSize=3;txt?this.flashingText=txt:this.flashingText="You did not enter any text, Donzo.";dur?this.flashingMessageTimer.set(dur):this.flashingMessageTimer.set(3);this.flMsgDispSwitch=true;this.flashingMessageIntravelTimer.set(this.flMsgOnInt);},setCutScreenText(hdrTxt,ctaTxt,hdrClr,txtClr,ctaClr){this.csHdrTxt=hdrTxt;this.csCtaTxt=ctaTxt;if(hdrClr){this.csHdrClr=hdrClr;}
if(txtClr){this.csTxtClr=txtClr;}
if(ctaClr){this.csCtaClr=ctaClr;}},managePlayerDeath:function(){ig.game.LoadLevelBro(ig.game.pData.lvl);this.managingPlayerDeath=true;this.deathScreen=true;this.deathScreenTimer.set(.25);this.flashMessageTimer.set(this.flashMsgOnTime/2);},manageTransitionVariables:function(dir){if(this.endingScreen&&ig.game.endingOver){this.endingScreen=false;this.flickerTotalCount=0;this.flickerCount=0;this.flickerFreq=1;ig.game.endingOver=false;ig.game.gameWon=false;this.levelCleared=false;}
if(ig.game.playerDead&&!this.managingPlayerDeath){this.managePlayerDeath();}
if(this.levelCleared){this.levelCleared=false;}},drawTransition:function(){var ctx=ig.system.context;if(this.transitionType=="fadeIn"){var curOpacity=0;if(this.transitionTimer.delta()<0){curOpacity=this.transitionTimer.delta()*-1;}
if(this.transitionTimer.delta()>0){this.transition=false;this.transitionReady=false;ig.game.pause=false;this.manageTransitionVariables();}
ctx.globalAlpha=curOpacity;this.drawABox(0,ig.system.width,0,ig.system.height,0,this.slideColor,true,this.fadeColor);}
if(this.transitionType=="fadeOut"){var curOpacity=1;if(this.transitionTimer.delta()<1){curOpacity=this.transitionTimer.delta();}
if(this.transitionTimer.delta()>1){this.readyToLoad=true;this.manageTransitionVariables();}
if(this.transitionTimer.delta()>2){this.transitionReady=true;this.transition=false;}
ctx.globalAlpha=curOpacity;this.drawABox(0,ig.system.width,0,ig.system.height,0,this.slideColor,true,this.fadeColor);}
if(this.transitionType=="slideDownIn"){this.slideAddToY=0;if(this.transitionTimer.delta()<0){this.slideAddToY=this.transitionTimer.delta()*ig.system.height;}
if(this.transitionTimer.delta()>0){this.readyToLoad=true;if(ig.Timer.timeScale!=1){ig.Timer.timeScale=1;}}
if(this.transitionTimer.delta()>1){this.transitionReady=true;}
this.drawABox(0,ig.system.width,0,ig.system.height+this.slideAddToY,0,this.slideColor,true,this.slideColor);}
if(this.transitionType=="slideUpIn"){this.slideAddToY=0;if(this.transitionTimer.delta()<0){this.slideAddToY=(this.transitionTimer.delta()*-1)*ig.system.height;}
if(this.transitionTimer.delta()>0){this.readyToLoad=true;if(ig.Timer.timeScale!=1){ig.Timer.timeScale=1;}}
if(this.transitionTimer.delta()>1){this.transitionReady=true;}
this.drawABox(0,ig.system.width,this.slideAddToY,ig.system.height+this.slideAddToY,0,this.slideColor,true,this.slideColor);}
if(this.transitionType=="slideUpOut"){this.slideAddToY=ig.system.height;if(this.transitionTimer.delta()<1){this.slideAddToY=this.transitionTimer.delta()*ig.system.height;}
else if(this.transitionTimer.delta()<0){this.slideAddToY=0;}
if(this.transitionTimer.delta()>1){if(ig.Timer.timeScale!=1){ig.Timer.timeScale=1;}
this.transition=false;this.transitionReady=false;ig.game.pause=false;this.manageTransitionVariables();}
this.drawABox(0,ig.system.width,0,ig.system.height-this.slideAddToY,0,this.slideColor,true,this.slideColor);}
if(this.transitionType=="slideDownOut"){this.slideAddToY=ig.system.height;if(this.transitionTimer.delta()<1){this.slideAddToY=(this.transitionTimer.delta())*ig.system.height;}
else if(this.transitionTimer.delta()<0){this.slideAddToY=ig.system.height;}
if(this.transitionTimer.delta()>1){if(ig.Timer.timeScale!=1){ig.Timer.timeScale=1;}
this.transition=false;this.transitionReady=false;ig.game.pause=false;this.manageTransitionVariables();}
this.drawABox(0,ig.system.width,0+this.slideAddToY,ig.system.height,0,this.slideColor,true,this.slideColor);}
if(this.transitionType=="slideRightIn"){this.slideAddToX=0;if(this.transitionTimer.delta()<0){this.slideAddToX=this.transitionTimer.delta()*ig.system.width;}
if(this.transitionTimer.delta()>0){this.readyToLoad=true;if(ig.Timer.timeScale!=1){ig.Timer.timeScale=1;}}
if(this.transitionTimer.delta()>1){this.transitionReady=true;}
this.drawABox(0,ig.system.width+this.slideAddToX,0,ig.system.height,0,this.slideColor,true,this.slideColor);}
if(this.transitionType=="slideRightOut"){this.slideAddToX=ig.system.width;if(this.transitionTimer.delta()<1){this.slideAddToX=(this.transitionTimer.delta())*ig.system.width;}
else if(this.transitionTimer.delta()>1){this.slideAddToX=ig.system.width;}
if(this.transitionTimer.delta()>1){if(ig.Timer.timeScale!=1){ig.Timer.timeScale=1;}
this.transition=false;this.transitionReady=false;ig.game.pause=false;this.manageTransitionVariables();}
this.drawABox(0+this.slideAddToX,ig.system.width,0,ig.system.height,0,this.slideColor,true,this.slideColor);}
ctx.globalAlpha=1;},fadeIn:function(delay,color){if(!delay){ig.game.transitionTimer.set(1);}
else{ig.game.transitionTimer.set(delay);}
ig.game.transitionType="fadeIn";ig.game.transition=true;if(color){ig.game.fadeColor=color;}
else{ig.game.fadeColor=this.color3;}},fadeOut:function(delay,color){if(!delay){ig.game.transitionTimer.set(0);}
else{ig.game.transitionTimer.set(delay);}
ig.game.transitionType="fadeOut";ig.game.transition=true;if(color){ig.game.fadeColor=color;}
else{ig.game.fadeColor=this.color3;}},slideDownIn:function(delay,color,speed){if(!delay){ig.game.transitionTimer.set(1);}
else{ig.game.transitionTimer.set(delay);}
if(color){this.slideColor=color;}
else{this.slideColor=this.color3;}
if(speed){if(ig.Timer.timeScale!=speed){ig.Timer.timeScale=speed;}}
else{if(ig.Timer.timeScale!=3){ig.Timer.timeScale=3;}}
ig.game.transitionType="slideDownIn";ig.game.transition=true;},slideUpIn:function(delay,color,speed){if(!delay){ig.game.transitionTimer.set(1);}
else{ig.game.transitionTimer.set(delay);}
if(color){this.slideColor=color;}
else{this.slideColor=this.color3;}
if(speed){if(ig.Timer.timeScale!=speed){ig.Timer.timeScale=speed;}}
else{if(ig.Timer.timeScale!=3){ig.Timer.timeScale=3;}}
ig.game.transitionType="slideUpIn";ig.game.transition=true;},slideDownOut:function(delay,color,speed){if(!delay){ig.game.transitionTimer.set(1);}
else{ig.game.transitionTimer.set(delay);}
if(color){this.slideColor=color;}
else{this.slideColor=this.color3;}
if(speed){if(ig.Timer.timeScale!=speed){ig.Timer.timeScale=speed;}}
else{if(ig.Timer.timeScale!=3){ig.Timer.timeScale=3;}}
ig.game.transitionType="slideDownOut";ig.game.transition=true;},slideUpOut:function(delay,color,speed){if(!delay){ig.game.transitionTimer.set(0);}
else{ig.game.transitionTimer.set(delay);}
if(color){this.slideColor=color;}
else{this.slideColor=this.color3;}
if(speed){if(ig.Timer.timeScale!=speed){ig.Timer.timeScale=speed;}}
else{if(ig.Timer.timeScale!=3){ig.Timer.timeScale=3;}}
ig.game.transitionType="slideUpOut";ig.game.transition=true;},slideRightIn:function(delay,color,speed){if(!delay){ig.game.transitionTimer.set(1);}
else{ig.game.transitionTimer.set(delay);}
if(color){this.slideColor=color;}
else{this.slideColor=this.color3;}
if(speed){if(ig.Timer.timeScale!=speed){ig.Timer.timeScale=speed;}}
else{if(ig.Timer.timeScale!=3){ig.Timer.timeScale=3;}}
ig.game.transitionType="slideRightIn";ig.game.transition=true;},slideRightOut:function(delay,color,speed){if(!delay){ig.game.transitionTimer.set(0);}
else{ig.game.transitionTimer.set(delay);}
if(color){this.slideColor=color;}
else{this.slideColor=this.color3;}
if(speed){if(ig.Timer.timeScale!=speed){ig.Timer.timeScale=speed;}}
else{if(ig.Timer.timeScale!=3){ig.Timer.timeScale=3;}}
ig.game.transitionType="slideRightOut";ig.game.transition=true;},setButtons:function(){if(ig.ua.mobile){var buttonSizeY=null;var buttonPosY=null;var butRightX=null;var buttonRight=null;
if(window.innerWidth>550){butRightX=ig.system.width-106;buttonRight=ig.system.width;this.buttonSet=new ig.TouchButtonCollection([new ig.TouchButton('left',{left:10,bottom:10},96,96,this.buttonLeft,0),new ig.TouchButton('right',{left:120,bottom:10},96,96,this.buttonRight,0),new ig.TouchButton('jump',{left:butRightX,bottom:10},96,96,this.buttonJump,0),new ig.TouchButton('action',{left:butRightX-106,bottom:10},96,96,this.buttonA,0),]);}
else if(window.innerWidth>440){butRightX=ig.system.width-90;buttonRight=ig.system.width;this.buttonSet=new ig.TouchButtonCollection([new ig.TouchButton('left',{left:10,bottom:10},80,80,this.buttonLeftSmall,0),new ig.TouchButton('right',{left:100,bottom:10},80,80,this.buttonRightSmall,0),new ig.TouchButton('jump',{left:butRightX,bottom:10},80,80,this.buttonJumpSmall,0),new ig.TouchButton('action',{left:butRightX-90,bottom:10},80,80,this.buttonASmall,0),]);}
else{butRightX=ig.system.width-70;buttonRight=ig.system.width;this.buttonSet=new ig.TouchButtonCollection([new ig.TouchButton('left',{left:10,bottom:10},60,60,this.buttonLeftSmaller,0),new ig.TouchButton('right',{left:80,bottom:10},60,60,this.buttonRightSmaller,0),new ig.TouchButton('jump',{left:butRightX,bottom:10},60,60,this.buttonJumpSmaller,0),new ig.TouchButton('action',{left:butRightX-70,bottom:10},60,60,this.buttonASmaller,0),]);}
this.buttonSet.align();}},writeOnTheBoard:function(){var xMarginWidth=this.boardWidth*.025;var totalMarginSpace=.1;var yMarginCount=2;if(ig.game.qHead){yMarginCount++;}
if(ig.game.correctionOn){yMarginCount++;}
var yMarginHeight=(this.boardHeight*totalMarginSpace)/yMarginCount;this.yMarginHeight=yMarginHeight;this.writableAreaBoardX=this.boardWidth-yMarginHeight;this.writableAreaBoardY=this.boardHeight-xMarginWidth*2;if(ig.game.qHead){this.writeTheQuestionHeading(this.boardPosX+xMarginWidth,this.boardPosY+yMarginHeight);}
var marginMultiplier=1;if(ig.system.width<ig.system.height){marginMultiplier=4.5;}
this.writeTheQuestion(this.boardPosX+xMarginWidth,this.questionY+(yMarginHeight*marginMultiplier));if(this.correctionOn){this.writeTheCorrection();}
this.writeAnswerChoice(1);this.writeAnswerChoice(2);if(ig.game.ansNum>=3){this.writeAnswerChoice(3);}
if(ig.game.ansNum>=4){this.writeAnswerChoice(4);}
if(ig.game.ansNum>=5){this.writeAnswerChoice(5);}
if(ig.game.ansNum>=6){this.writeAnswerChoice(6);}},writeAnswerChoice:function(whichButton){var ctx=ig.system.context;var xMarginWidth=this.buttonWidth*.03;var yMarginWidth=-this.buttonHeight*.025;if(ig.system.width<ig.system.height){yMarginWidth=-this.buttonHeight*.1;}
var buttonTotalMarginX=xMarginWidth*2;var buttonMarginX=buttonTotalMarginX/2;this.buttonWritableY=(this.buttonHeight-yMarginWidth*10);ctx.fillStyle=this.color7;if(whichButton==1){if(this.dFonts.buttonOneSizeKnown!=true){if(ig.system.width<ig.system.height){this.dFonts.calcLineSize(ctx,ig.game.ac1,this.ac1X+buttonMarginX,this.ac1Y-yMarginWidth,this.buttonWidth-buttonTotalMarginX,this.maxButtonLineHeightPortrait);}
else{this.dFonts.calcLineSize(ctx,ig.game.ac1,this.ac1X+buttonMarginX,this.ac1Y-yMarginWidth,this.buttonWidth-buttonTotalMarginX,this.maxButtonLineHeight);}}
ctx.font=this.dFonts.dynamicFontSizeButtonOne;this.dFonts.wrapTheText(ctx,ig.game.ac1,this.ac1X+buttonMarginX,this.ac1Y-yMarginWidth+this.dFonts.dynamicLineHeightButtonOne,this.buttonWidth-buttonTotalMarginX,this.dFonts.dynamicLineHeightButtonOne);}
if(whichButton==2){if(this.dFonts.buttonTwoSizeKnown!=true){if(ig.system.width<ig.system.height){this.dFonts.calcLineSize(ctx,ig.game.ac2,this.ac2X+buttonMarginX,this.ac2Y+yMarginWidth,this.buttonWidth-buttonTotalMarginX,this.maxButtonLineHeightPortrait);}
else{this.dFonts.calcLineSize(ctx,ig.game.ac2,this.ac2X+buttonMarginX,this.ac2Y+yMarginWidth,this.buttonWidth-buttonTotalMarginX,this.maxButtonLineHeight);}}
ctx.font=this.dFonts.dynamicFontSizeButtonTwo;this.dFonts.wrapTheText(ctx,ig.game.ac2,this.ac2X+buttonMarginX,this.ac2Y-yMarginWidth+this.dFonts.dynamicLineHeightButtonTwo,this.buttonWidth-buttonTotalMarginX,this.dFonts.dynamicLineHeightButtonTwo);}
if(whichButton==3){if(this.dFonts.buttonThreeSizeKnown!=true){if(ig.system.width<ig.system.height){this.dFonts.calcLineSize(ctx,ig.game.ac3,this.ac3X+buttonMarginX,this.ac3Y+yMarginWidth,this.buttonWidth-buttonTotalMarginX,this.maxButtonLineHeightPortrait);}
else{this.dFonts.calcLineSize(ctx,ig.game.ac3,this.ac3X+buttonMarginX,this.ac3Y+yMarginWidth,this.buttonWidth-buttonTotalMarginX,this.maxButtonLineHeight);}}
ctx.font=this.dFonts.dynamicFontSizeButtonThree;this.dFonts.wrapTheText(ctx,ig.game.ac3,this.ac3X+buttonMarginX,this.ac3Y-yMarginWidth+this.dFonts.dynamicLineHeightButtonThree,this.buttonWidth-buttonTotalMarginX,this.dFonts.dynamicLineHeightButtonThree);}
if(whichButton==4){if(this.dFonts.buttonFourSizeKnown!=true){if(ig.system.width<ig.system.height){this.dFonts.calcLineSize(ctx,ig.game.ac4,this.ac4X+buttonMarginX,this.ac4Y+yMarginWidth,this.buttonWidth-buttonTotalMarginX,this.maxButtonLineHeightPortrait);}
else{this.dFonts.calcLineSize(ctx,ig.game.ac4,this.ac4X+buttonMarginX,this.ac4Y+yMarginWidth,this.buttonWidth-buttonTotalMarginX,this.maxButtonLineHeight);}}
ctx.font=this.dFonts.dynamicFontSizeButtonFour;this.dFonts.wrapTheText(ctx,ig.game.ac4,this.ac4X+buttonMarginX,this.ac4Y-yMarginWidth+this.dFonts.dynamicLineHeightButtonFour,this.buttonWidth-buttonTotalMarginX,this.dFonts.dynamicLineHeightButtonFour);}
if(whichButton==5){if(this.dFonts.buttonFiveSizeKnown!=true){if(ig.system.width<ig.system.height){this.dFonts.calcLineSize(ctx,ig.game.ac5,this.ac5X+buttonMarginX,this.ac5Y+yMarginWidth,this.buttonWidth-buttonTotalMarginX,this.maxButtonLineHeightPortrait);}
else{this.dFonts.calcLineSize(ctx,ig.game.ac5,this.ac5X+buttonMarginX,this.ac5Y+yMarginWidth,this.buttonWidth-buttonTotalMarginX,this.maxButtonLineHeight);}}
ctx.font=this.dFonts.dynamicFontSizeButtonFive;this.dFonts.wrapTheText(ctx,ig.game.ac5,this.ac5X+buttonMarginX,this.ac5Y-yMarginWidth+this.dFonts.dynamicLineHeightButtonFive,this.buttonWidth-buttonTotalMarginX,this.dFonts.dynamicLineHeightButtonFive);}
if(whichButton==6){if(this.dFonts.buttonSixSizeKnown!=true){if(ig.system.width<ig.system.height){this.dFonts.calcLineSize(ctx,ig.game.ac6,this.ac6X+buttonMarginX,this.ac6Y+yMarginWidth,this.buttonWidth-buttonTotalMarginX,this.maxButtonLineHeightPortrait);}
else{this.dFonts.calcLineSize(ctx,ig.game.ac6,this.ac6X+buttonMarginX,this.ac6Y+yMarginWidth,this.buttonWidth-buttonTotalMarginX,this.maxButtonLineHeight);}}
ctx.font=this.dFonts.dynamicFontSizeButtonSix;this.dFonts.wrapTheText(ctx,ig.game.ac6,this.ac6X+buttonMarginX,this.ac6Y-yMarginWidth+this.dFonts.dynamicLineHeightButtonSix,this.buttonWidth-buttonTotalMarginX,this.dFonts.dynamicLineHeightButtonSix);}},
	punishPlayer:function(){
		this.potentialDamage;
		if(ig.game.getEntityByName('player')){
			var player=ig.game.getEntityByName('player');
			player.health-=this.potentialDamage;
			if(player.attacking){player.endAttack();}
			ig.game.savedOnce = false;
		}
	},
	drawMuteButton:function(){var bRight=ig.system.width-84;var bTop=10;if(this.muteGame){if(window.scale<.7){bRight=ig.system.width-52;this.buttonMuted.draw(bRight,bTop);}
else{this.buttonMutedSmall.draw(bRight,bTop);}}
else{if(window.scale<.7){bRight=ig.system.width-52;this.buttonMute.draw(bRight,bTop);}
else{this.buttonMuteSmall.draw(bRight,bTop);}}},writeTheQuestion:function(x,y){var ctx=ig.system.context;var xMarginWidth=this.boardWidth*.025;if(this.dFonts.questionSizeKnown!=true){this.maxQuestionHeight=this.writableAreaBoardY*this.maxQuestionHeightRatio;if(ig.system.width<ig.system.height){this.dFonts.calcLineSize(ctx,this.theSentence,x,y,this.writableAreaBoardX-xMarginWidth,this.maxQuestionLinesPortrait);}
else{this.dFonts.calcLineSize(ctx,this.theSentence,x,y,this.writableAreaBoardX-xMarginWidth,this.maxQuestionLines);}}
ctx.fillStyle=this.color7;ctx.font=this.dFonts.dynamicFontSizeQuestion;if(this.shrinkWords){ctx.font=this.dFonts.dynamicFontSizeQuestionShrunk;}
if(!ig.game.correctionOn){this.dFonts.wrapTheText(ctx,this.theSentence,x,y+this.dFonts.dynamicLineHeightQuestion,this.writableAreaBoardX-xMarginWidth,this.dFonts.dynamicLineHeightQuestion);}
else{var tinyQuestionY=this.dFonts.cursorPosY;if(this.dFonts.tinyQuestionSizeKnown!=true){this.maxTinyQuestionHeight=this.writableAreaBoardY*this.maxTinyQuestionHeightRatio;if(ig.system.width<ig.system.height){this.dFonts.calcLineSize(ctx,this.theSentence,x,tinyQuestionY,this.writableAreaBoardX-xMarginWidth,this.maxTinyQuestionLinesPortrait);}
else{this.dFonts.calcLineSize(ctx,this.theSentence,x,tinyQuestionY,this.writableAreaBoardX-xMarginWidth,this.maxTinyQuestionLines);}}
ctx.fillStyle=this.color7;ctx.font=this.dFonts.finalTinyQuestionSize;this.dFonts.wrapTheText(ctx,this.theSentence,x,tinyQuestionY+(this.dFonts.dynamicLineHeightTinyQuestion+this.yMarginHeight),this.writableAreaBoardX-xMarginWidth,this.dFonts.dynamicLineHeightTinyQuestion);var yMarginForAnnounce=ig.system.height*.04;if(ig.system.width<ig.system.height){yMarginForAnnounce=ig.system.height*.02;}
var announceRightY=this.dFonts.cursorPosY+this.dFonts.style4LineHeight;this.dFonts.changeFont(ctx,4);if(ig.game.wasItRight){ctx.fillStyle=this.colorRight;this.dFonts.wrapTheText(ctx,"Correct!",x,announceRightY,this.writableAreaBoardX-xMarginWidth,this.dFonts.dynamicLineHeightQuestion);}
else{ctx.fillStyle=this.colorWrong;this.dFonts.wrapTheText(ctx,"Incorrect!",x,announceRightY,this.writableAreaBoardX-xMarginWidth,this.dFonts.dynamicLineHeightQuestion);}
var yMarginForCorrection=ig.system.height*.035;if(ig.system.width<ig.system.height){yMarginForCorrection=ig.system.height*.015;}
this.correctionY=this.dFonts.cursorPosY+(this.writableAreaBoardY*.03);}},writeTheCorrection:function(){var ctx=ig.system.context;var xMarginWidth=this.boardWidth*.025;var x=this.boardPosX+xMarginWidth;if(this.dFonts.correctionSizeKnown!=true){this.maxCorrectionHeight=this.writableAreaBoardY*this.maxCorrectionHeightRatio;if(ig.system.width<ig.system.height){this.dFonts.calcLineSize(ctx,ig.game.theCorrection,x,this.correctionY,this.writableAreaBoardX-xMarginWidth,this.maxCorrectionLinesPortrait);}
else{this.dFonts.calcLineSize(ctx,ig.game.theCorrection,x,this.correctionY,this.writableAreaBoardX-xMarginWidth,this.maxCorrectionLines);}}
ctx.fillStyle=this.color7;ctx.font=this.dFonts.dynamicFontSizeCorrection;if(this.shrinkWords){ctx.font=this.dFonts.dynamicFontSizeCorrectionShrunk;this.dFonts.wrapTheText(ctx,ig.game.theCorrection,x,this.correctionY+this.dFonts.dynamicLineHeightCorrectionShrunk,this.writableAreaBoardX-xMarginWidth,this.dFonts.dynamicLineHeightCorrectionShrunk);}
else{this.dFonts.wrapTheText(ctx,ig.game.theCorrection,x,this.correctionY+this.dFonts.dynamicLineHeightCorrection,this.writableAreaBoardX-xMarginWidth,this.dFonts.dynamicLineHeightCorrection);}
this.checkThisBoardY=this.dFonts.cursorPosYNewLine;if(!this.shrinkWords){this.checkForShrink();}},checkForShrink:function(){if(this.checkThisBoardY>this.boardPosYData){this.shrinkWords=true;}
else{this.shrinkWords=false;}},clearTheQuestion:function(){this.dFonts.finalTinyQuestionSize=null;this.dFonts.correctionSizeKnown=null;this.dFonts.headerSizeKnown=false;this.dFonts.questionSizeKnown=false;this.dFonts.tinyQuestionSizeKnown=false;this.dFonts.buttonOneSizeKnown=false;this.dFonts.buttonTwoSizeKnown=false;this.dFonts.buttonThreeSizeKnown=false;this.dFonts.buttonFourSizeKnown=false;this.dFonts.buttonFiveSizeKnown=false;this.dFonts.buttonSixSizeKnown=false;this.dFonts.correctionSizeKnown=false;this.quiz=false;this.correctionOn=false;this.questionOn=false;this.pause=false;ig.game.whichAnswer=null;this.shrinkWords=null;ig.game.wasItRight=null;ig.game.setButtons();this.maxHeaderHeight=null;this.maxQuestionHeight=null;this.maxCorrectionHeight=null;this.maxTinyQuestionHeight=null;if(ig.game.getEntityByName('player')){var player=ig.game.getEntityByName('player');if(ig.input.released('action')&&!player.attacking&&player.readyToAttack){player.invin=true;player.invincibleTimer.set(this.invincibleTime);player.myAttack();}
else{player.invin=true;player.invincibleTimer.set(this.invincibleTime);}}},writeTheQuestionHeading:function(x,y){var ctx=ig.system.context;var xMarginWidth=this.boardWidth*.025;if(this.dFonts.headerSizeKnown!=true){this.maxHeaderHeight=this.writableAreaBoardY*this.maxHeaderHeightRatio;if(ig.system.width<ig.system.height){this.dFonts.calcLineSize(ctx,ig.game.qHead,x,y,this.writableAreaBoardX-xMarginWidth,this.maxHeaderLinesPortrait);}
else{this.dFonts.calcLineSize(ctx,ig.game.qHead,x,y,this.writableAreaBoardX-xMarginWidth,this.maxHeaderLines);}}
ctx.fillStyle=this.color7;ctx.font=this.dFonts.dynamicFontSizeHeader;if(this.shrinkWords){ctx.font=this.dFonts.dynamicFontSizeTLH;}
if(this.shrinkWords){this.dFonts.wrapTheText(ctx,ig.game.qHead,x,y+this.dFonts.dynamicLineHeightHeader,this.writableAreaBoardX-xMarginWidth,this.dFonts.dynamicLineHeightHeaderTLH);}
else{this.dFonts.wrapTheText(ctx,ig.game.qHead,x,y+this.dFonts.dynamicLineHeightHeader,this.writableAreaBoardX-xMarginWidth,this.dFonts.dynamicLineHeightHeader);}
this.questionY=this.dFonts.cursorPosY;},drawButtons:function(numOfButtons,columns){var ySpaceRem=ig.system.height-this.boardPosYData;var rows=Math.ceil(numOfButtons/columns);var yMargin=ig.system.height*.025;var yMarginTotal=yMargin*(rows+1);this.qbRowHeight=Math.floor((ySpaceRem-yMarginTotal)/rows);theWidth=ig.system.width;theHeight=ig.system.height;vMargin=(theHeight*.025);hMargin=(theWidth*.025);vFrame=(theHeight*.005);hFrame=(theWidth*.005);vFrame2=(theHeight*.00525);hFrame2=(theWidth*.0025);if(columns==1){this.buttonWidth=this.boardWidth;this.buttonHeight=this.qbRowHeight;this.ac1X=this.boardPosX;this.ac1Y=this.boardPosYData+yMargin;this.ac2X=this.boardPosX;this.ac2Y=this.ac1Y+(yMargin/2)+this.qbRowHeight;if(numOfButtons>2){this.ac3X=this.boardPosX;this.ac3Y=this.ac2Y+(yMargin/2)+this.qbRowHeight;}
if(numOfButtons>3){this.ac4X=this.boardPosX;this.ac4Y=this.ac3Y+(yMargin/2)+this.qbRowHeight;}
if(numOfButtons>4){this.ac5X=this.boardPosX;this.ac5Y=this.ac4Y+(yMargin/2)+this.qbRowHeight;}
if(numOfButtons>5){this.ac6X=this.boardPosX;this.ac6Y=this.ac5Y+(yMargin/2)+this.qbRowHeight;}}
else if(columns==2){var halfMargin=yMargin/2;this.buttonWidth=(this.boardWidth/2)-(halfMargin/2);this.buttonHeight=this.qbRowHeight;this.column1X=this.boardPosX;this.column2X=this.boardPosX+this.buttonWidth+halfMargin;this.ac1X=this.column1X;this.ac1Y=this.boardPosYData+yMargin;this.ac2X=this.column2X;this.ac2Y=this.ac1Y;if(numOfButtons>2){this.ac3X=this.ac1X;this.ac3Y=this.ac1Y+(yMargin/2)+this.qbRowHeight;}
if(numOfButtons>3){this.ac4X=this.ac2X;this.ac4Y=this.ac3Y;}
if(numOfButtons>4){this.ac5X=this.ac1X;this.ac5Y=this.ac3Y+(yMargin/2)+this.qbRowHeight;}
if(numOfButtons>5){this.ac6X=this.ac2X;this.ac6Y=this.ac5Y;}}
else if(columns==3){var halfMargin=yMargin/3;this.buttonWidth=(this.boardWidth/3)-(halfMargin/3);this.buttonHeight=this.qbRowHeight;this.column1X=this.boardPosX;this.column2X=this.boardPosX+this.buttonWidth+halfMargin;this.column3X=this.column2X+this.buttonWidth+halfMargin;this.ac1X=this.column1X;this.ac1Y=this.boardPosYData+yMargin;this.ac2X=this.column2X;this.ac2Y=this.ac1Y;this.ac3X=this.column3X;this.ac3Y=this.ac1Y;if(numOfButtons>3){this.ac4X=this.ac1X;this.ac4Y=this.ac3Y+(yMargin/2)+this.qbRowHeight;}
if(numOfButtons>4){this.ac5X=this.ac2X;this.ac5Y=this.ac4Y;}
if(numOfButtons>5){this.ac6X=this.ac3X;this.ac6Y=this.ac4Y;}}
ig.system.context.fillStyle=this.outerFrameColor;ig.system.context.fillRect(this.ac1X,this.ac1Y,this.buttonWidth,this.buttonHeight);ig.system.context.fillRect(this.ac2X,this.ac2Y,this.buttonWidth,this.buttonHeight);if(numOfButtons>2){ig.system.context.fillRect(this.ac3X,this.ac3Y,this.buttonWidth,this.buttonHeight);}
if(numOfButtons>3){ig.system.context.fillRect(this.ac4X,this.ac4Y,this.buttonWidth,this.buttonHeight);}
if(numOfButtons>4){ig.system.context.fillRect(this.ac5X,this.ac5Y,this.buttonWidth,this.buttonHeight);}
if(numOfButtons>5){ig.system.context.fillRect(this.ac6X,this.ac6Y,this.buttonWidth,this.buttonHeight);}
ig.system.context.fillStyle=this.innerFrameColor;ig.system.context.fillRect(this.ac1X+hFrame,this.ac1Y+vFrame,this.buttonWidth-(hFrame*2),this.buttonHeight-(vFrame*2));ig.system.context.fillRect(this.ac2X+hFrame,this.ac2Y+vFrame,this.buttonWidth-(hFrame*2),this.buttonHeight-(vFrame*2));if(numOfButtons>2){ig.system.context.fillRect(this.ac3X+hFrame,this.ac3Y+vFrame,this.buttonWidth-(hFrame*2),this.buttonHeight-(vFrame*2));}
if(numOfButtons>3){ig.system.context.fillRect(this.ac4X+hFrame,this.ac4Y+vFrame,this.buttonWidth-(hFrame*2),this.buttonHeight-(vFrame*2));}
if(numOfButtons>4){ig.system.context.fillRect(this.ac5X+hFrame,this.ac5Y+vFrame,this.buttonWidth-(hFrame*2),this.buttonHeight-(vFrame*2));}
if(numOfButtons>5){ig.system.context.fillRect(this.ac6X+hFrame,this.ac6Y+vFrame,this.buttonWidth-(hFrame*2),this.buttonHeight-(vFrame*2));}
if(ig.game.answerChoiceBN==1&&ig.game.correctionOn==true){if(ig.game.wasItRight==true){ig.system.context.fillStyle=this.rightColor;}
else{ig.system.context.fillStyle=this.wrongColor;}}
else{ig.system.context.fillStyle=this.boardColor;}
ig.system.context.fillRect(this.ac1X+hFrame+hFrame2,this.ac1Y+vFrame+vFrame2,this.buttonWidth-(hFrame*2)-(hFrame2*2),this.buttonHeight-(vFrame*2)-(vFrame2*2));if(ig.game.answerChoiceBN==2&&ig.game.correctionOn==true){if(ig.game.wasItRight==true){ig.system.context.fillStyle=this.rightColor;}
else{ig.system.context.fillStyle=this.wrongColor;}}
else{ig.system.context.fillStyle=this.boardColor;}
ig.system.context.fillRect(this.ac2X+hFrame+hFrame2,this.ac2Y+vFrame+vFrame2,this.buttonWidth-(hFrame*2)-(hFrame2*2),this.buttonHeight-(vFrame*2)-(vFrame2*2));if(numOfButtons>2){if(ig.game.answerChoiceBN==3&&ig.game.correctionOn==true){if(ig.game.wasItRight==true){ig.system.context.fillStyle=this.rightColor;}
else{ig.system.context.fillStyle=this.wrongColor;}}
else{ig.system.context.fillStyle=this.boardColor;}
ig.system.context.fillRect(this.ac3X+hFrame+hFrame2,this.ac3Y+vFrame+vFrame2,this.buttonWidth-(hFrame*2)-(hFrame2*2),this.buttonHeight-(vFrame*2)-(vFrame2*2));}
if(numOfButtons>3){if(ig.game.answerChoiceBN==4&&ig.game.correctionOn==true){if(ig.game.wasItRight==true){ig.system.context.fillStyle=this.rightColor;}
else{ig.system.context.fillStyle=this.wrongColor;}}
else{ig.system.context.fillStyle=this.boardColor;}
ig.system.context.fillRect(this.ac4X+hFrame+hFrame2,this.ac4Y+vFrame+vFrame2,this.buttonWidth-(hFrame*2)-(hFrame2*2),this.buttonHeight-(vFrame*2)-(vFrame2*2));}
if(numOfButtons>4){if(ig.game.answerChoiceBN==5&&ig.game.correctionOn==true){if(ig.game.wasItRight==true){ig.system.context.fillStyle=this.rightColor;}
else{ig.system.context.fillStyle=this.wrongColor;}}
else{ig.system.context.fillStyle=this.boardColor;}
ig.system.context.fillRect(this.ac5X+hFrame+hFrame2,this.ac5Y+vFrame+vFrame2,this.buttonWidth-(hFrame*2)-(hFrame2*2),this.buttonHeight-(vFrame*2)-(vFrame2*2));}
if(numOfButtons>5){if(ig.game.answerChoiceBN==6&&ig.game.correctionOn==true){if(ig.game.wasItRight==true){ig.system.context.fillStyle=this.rightColor;}
else{ig.system.context.fillStyle=this.wrongColor;}}
else{ig.system.context.fillStyle=this.boardColor;}
ig.system.context.fillRect(this.ac6X+hFrame+hFrame2,this.ac6Y+vFrame+vFrame2,this.buttonWidth-(hFrame*2)-(hFrame2*2),this.buttonHeight-(vFrame*2)-(vFrame2*2));}},drawBoard:function(height,boardColor,innerFrameColor,outerFrameColor){var ctx=ig.system.context;var theWidth=ig.system.width;var theHeight=ig.system.height;var vMargin=(theHeight*.025);var hMargin=(theWidth*.025);var vFrame=(theHeight*.005);var hFrame=(theWidth*.005);var vFrame2=(theHeight*.00525);var hFrame2=(theWidth*.0025);var boardWidth=theWidth*.95;this.boardWidth=boardWidth;var boardHeight=theHeight*.6;if(height){boardHeight=theHeight*height;}
this.boardHeight=boardHeight;var boardPosX=hMargin+1;var boardPosY=vMargin+1;this.boardPosY=boardPosY;this.boardPosX=boardPosX;this.boardPosYData=boardPosY+boardHeight;if(outerFrameColor){ig.system.context.fillStyle=outerFrameColor;this.outerFrameColor=outerFrameColor;}
else{ig.system.context.fillStyle=this.color5;this.outerFrameColor=this.color5;}
ig.system.context.fillRect(boardPosX,boardPosY,boardWidth,boardHeight);if(innerFrameColor){ig.system.context.fillStyle=innerFrameColor;this.innerFrameColor=innerFrameColor;}
else{ig.system.context.fillStyle="#858585";this.innerFrameColor="#858585";}
ig.system.context.fillRect(boardPosX+hFrame,boardPosY+vFrame,boardWidth-(hFrame*2),boardHeight-(vFrame*2));if(boardColor){ig.system.context.fillStyle=boardColor;this.boardColor=boardColor;}
else{ig.system.context.fillStyle="#F0F3F1";this.boardColor="#F0F3F1";}
ig.system.context.fillRect(boardPosX+hFrame+hFrame2,boardPosY+vFrame+vFrame2,boardWidth-(hFrame*2)-(hFrame2*2),boardHeight-(vFrame*2)-(vFrame2*2));},flashScreenBro:function(color,time){this.flashScreen=true;if(time){this.flashScreenTimer.set(time);}
else{this.flashScreenTimer.set(.05);}
this.flashScreenColor=color;},flashScreenCheck:function(){if(this.flashScreen){this.drawABox(0,ig.system.width,0,ig.system.height,0,this.flashScreenColor,true,this.flashScreenColor);if(this.flashScreenTimer.delta()>0){this.flashScreen=false;}}},
	reviewTheQ:function(){
		this.questionClearTimer.set(.4);
		this.correctionOn=true;
		//Rewarded Ad Trigger
		if(HTML5Ads && !ig.game.savedOnce && adSaveReady && !ig.game.wasItRight){
			watchAdForSave();
		}
	},
	right:function(){
		ig.game.wasItRight=true;
		this.flashScreenBro(this.colorRight);
		this.pData.qRight++;
		if(!ig.game.muteGame){this.rightSound.volume=.2;this.rightSound.play();}
		this.saveTheQuestions();
		this.reviewTheQ();
	},
	wrong:function(){
		ig.game.wasItRight=false;
		this.flashScreenBro(this.colorWrong);
		this.pData.qWrong++;
		ig.music.stop();
		if(!ig.game.muteGame){this.wrongSound.volume=.4;this.wrongSound.play();}
		this.saveTheQuestions();
		this.reviewTheQ();
	},
	drawEndingScreen:function(){var ctx=ig.system.context;if(this.transition){if(this.transitionType=="fadeIn"){var curOpacity=0;if(this.transitionTimer.delta()<0){curOpacity=this.transitionTimer.delta()*-1;}
ctx.globalAlpha=curOpacity;}
else if(this.transitionType=="fadeOut"){var curOpacity=1;if(this.transitionTimer.delta()<1){curOpacity=this.transitionTimer.delta();}
ctx.globalAlpha=curOpacity;}}
if(ig.game.flickerColor){this.drawABox(0,ig.system.width,0,ig.system.height,0,"#FF69B4",true,"#FF69B4");ig.game.flickerCount++;if(ig.game.flickerCount>this.flickerFreq){ig.game.flickerCount=0;ig.game.flickerColor=false;ig.game.flickerTotalCount++;}}
else{this.drawABox(0,ig.system.width,0,ig.system.height,0,"#e0b0ff",true,"#e0b0ff");if(ig.game.flickerTotalCount<this.maxFlickers){ig.game.flickerCount++;if(ig.game.flickerCount>this.flickerFreq){ig.game.flickerCount=0;ig.game.flickerColor=true;ig.game.flickerTotalCount++;}
if(ig.game.flickerTotalCount>47){this.flickerFreq=Math.round(ig.game.flickerTotalCount);}
else if(ig.game.flickerTotalCount>44){this.flickerFreq=Math.round(ig.game.flickerTotalCount/2);}
else if(ig.game.flickerTotalCount>38){this.flickerFreq=Math.round(ig.game.flickerTotalCount/3);}
else if(ig.game.flickerTotalCount>31){this.flickerFreq=Math.round(ig.game.flickerTotalCount/6);}
else if(ig.game.flickerTotalCount>22){this.flickerFreq=Math.round(ig.game.flickerTotalCount/8);}
else if(ig.game.flickerTotalCount>10){this.flickerFreq=Math.round(ig.game.flickerTotalCount/10);}}
else if(!ig.game.endingOver){ig.game.endingOver=true;console.log('ending is over - stop flicking');}}
ctx.globalAlpha=1;},wipeData:function(){window.localStorage.setItem("deaths",0);window.localStorage.setItem("qRight",0);window.localStorage.setItem("qWrong",0);window.localStorage.setItem("lvl",1);window.localStorage.setItem("tokens",0);window.localStorage.setItem("tokensLT",0);window.localStorage.setItem("tokensGT",0);window.localStorage.setItem("timesPassed",0);if(ig.game.quiz.usedQs){ig.game.quiz.usedQs.numbers.length=0;var qsAxed=JSON.stringify(ig.game.quiz.usedQs);window.localStorage.setItem("qsAxed",qsAxed);}},saveGame:function(){window.localStorage.setItem("deaths",ig.game.pData.deaths);window.localStorage.setItem("qRight",ig.game.pData.qRight);window.localStorage.setItem("qWrong",ig.game.pData.qWrong);window.localStorage.setItem("lvl",ig.game.pData.lvl);window.localStorage.setItem("tokens",ig.game.pData.tokens);window.localStorage.setItem("tokensLT",ig.game.pData.tokensLT);window.localStorage.setItem("tokensGT",ig.game.pData.tokensGT);window.localStorage.setItem("timesPassed",ig.game.pData.timesPassed);if(ig.game.quiz.usedQs){var qsAxed=JSON.stringify(ig.game.quiz.usedQs);window.localStorage.setItem("qsAxed",qsAxed);}},loadGame:function(){if(window.localStorage.getItem("deaths")){ig.game.pData.deaths=JSON.parse(window.localStorage.getItem("deaths"));}
if(window.localStorage.getItem("qRight")){ig.game.pData.qRight=JSON.parse(window.localStorage.getItem("qRight"));}
if(window.localStorage.getItem("qWrong")){ig.game.pData.qWrong=JSON.parse(window.localStorage.getItem("qWrong"));}
if(window.localStorage.getItem("lvl")){ig.game.pData.lvl=JSON.parse(window.localStorage.getItem("lvl"));this.savedGame=true;}
if(window.localStorage.getItem("tokens")){ig.game.pData.tokens=JSON.parse(window.localStorage.getItem("tokens"));}
if(window.localStorage.getItem("tokensLT")){ig.game.pData.tokensLT=JSON.parse(window.localStorage.getItem("tokensLT"));}
if(window.localStorage.getItem("tokensGT")){ig.game.pData.tokensGT=JSON.parse(window.localStorage.getItem("tokensGT"));}
if(window.localStorage.getItem("timesPassed")){ig.game.pData.timesPassed=JSON.parse(window.localStorage.getItem("timesPassed"));}
if(window.localStorage.getItem("gameMuted")){this.muteGame=JSON.parse(window.localStorage.getItem("gameMuted"));}},saveTheQuestions:function(){window.localStorage.setItem("qRight",ig.game.pData.qRight);window.localStorage.setItem("qWrong",ig.game.pData.qWrong);if(ig.game.quizbox.usedQs){var qsAxed=JSON.stringify(ig.game.quizbox.usedQs);window.localStorage.setItem("qsAxed",qsAxed);}},loadTSImages:function(){this.tsImage=new Image();this.tsImage.src=window.tsImage.src;this.newGameButton=new Image();this.newGameButton.src=window.ngbut.src;this.continueButton=new Image();this.continueButton.src=window.conbut.src;},resizeYo:function(){var taHeight=0;var saWidth=0;var lsaWidth=0;if(document.getElementById("ad-unit")){if(document.getElementById("ad-unit").clientHeight){taHeight=document.getElementById("ad-unit").clientHeight;}}
if(document.getElementById("side-ad-unit-container")){if(document.getElementById("side-ad-unit-container").clientWidth){saWidth=document.getElementById("side-ad-unit-container").clientWidth;}}
if(document.getElementById("left-side-ad-unit-container")){if(document.getElementById("left-side-ad-unit-container").clientWidth){lsaWidth=document.getElementById("left-side-ad-unit-container").clientWidth;}}
var combinedSideColumnAdWidth=saWidth+lsaWidth;var theWidthToMeasure=window.innerWidth-combinedSideColumnAdWidth;var scale=1;if(window.innerHeight<450){scale=1;}
else if(theWidthToMeasure<400){scale=.9;}
else if(theWidthToMeasure<500){scale=.85;}
else if(theWidthToMeasure<650){scale=.625;}
else if(theWidthToMeasure<800){scale=.6;}
else if(theWidthToMeasure<1000){scale=.5;}
else if(theWidthToMeasure<1600){scale=.45;}
else if(theWidthToMeasure<2000){scale=.4;}
else if(theWidthToMeasure<2400){scale=.35;}
else if(theWidthToMeasure<2800){scale=.25;}
else if(theWidthToMeasure<3200){scale=.2;}
else if(theWidthToMeasure<3600){scale=.15;}
else{scale=.1;}
if(window.innerHeight>2000){scale=.2;}
window.scale=scale;this.cWidth=window.innerWidth-combinedSideColumnAdWidth;this.cHeight=window.innerHeight-taHeight;canvas.style.width=this.cWidth+'px';canvas.style.height=this.cHeight+'px';ig.system.resize(this.cWidth*scale,this.cHeight*scale);ig.game.dFonts.setVs();if(ig.game&&ig.game.setupCamera){ig.game.setupCamera();}
this.dFonts.headerSizeKnown=false;this.dFonts.questionSizeKnown=false;this.dFonts.tinyQuestionSizeKnown=false;this.dFonts.buttonOneSizeKnown=false;this.dFonts.buttonTwoSizeKnown=false;this.dFonts.buttonThreeSizeKnown=false;this.dFonts.buttonFourSizeKnown=false;this.dFonts.buttonFiveSizeKnown=false;this.dFonts.buttonSixSizeKnown=false;this.dFonts.correctionSizeKnown=false;ig.game.setButtons();}});var taHeight=0;var saWidth=0;var lsaWidth=0;if(document.getElementById("ad-unit")){if(document.getElementById("ad-unit").clientHeight){taHeight=document.getElementById("ad-unit").clientHeight;}}
if(document.getElementById("side-ad-unit-container")){if(document.getElementById("side-ad-unit-container").clientWidth){saWidth=document.getElementById("side-ad-unit-container").clientWidth;}}
if(document.getElementById("left-side-ad-unit-container")){if(document.getElementById("left-side-ad-unit-container").clientWidth){lsaWidth=document.getElementById("left-side-ad-unit-container").clientWidth;}}
var combinedSideColumnAdWidth=saWidth+lsaWidth;var theWidthToMeasure=window.innerWidth-combinedSideColumnAdWidth;if(window.innerHeight<450){scale=1;}
else if(theWidthToMeasure<400){scale=.9;}
else if(theWidthToMeasure<500){scale=.85;}
else if(theWidthToMeasure<650){scale=.625;}
else if(theWidthToMeasure<800){scale=.6;}
else if(theWidthToMeasure<1000){scale=.5;}
else if(theWidthToMeasure<1600){scale=.45;}
else if(theWidthToMeasure<2000){scale=.4;}
else if(theWidthToMeasure<2400){scale=.35;}
else if(theWidthToMeasure<2800){scale=.25;}
else if(theWidthToMeasure<3200){scale=.2;}
else if(theWidthToMeasure<3600){scale=.15;}
else{scale=.1;}
if(window.innerHeight>2000){scale=.2;}
window.scale=scale;if(document.getElementById("ad-unit")){if(document.getElementById("ad-unit").clientHeight){taHeight=document.getElementById("ad-unit").clientHeight;}}
if(document.getElementById("side-ad-unit-container")){if(document.getElementById("side-ad-unit-container").clientWidth){saWidth=document.getElementById("side-ad-unit-container").clientWidth;}}
if(document.getElementById("left-side-ad-unit-container")){if(document.getElementById("left-side-ad-unit-container").clientWidth){lsaWidth=document.getElementById("left-side-ad-unit-container").clientWidth;}}
window.screenHeightMinusAd=window.innerHeight-taHeight;window.screenWidthMinusAd=window.innerWidth-saWidth-lsaWidth;canvas.style.width=window.screenWidthMinusAd+'px';canvas.style.height=window.screenHeightMinusAd+'px';canvas.style.background="#e0b0ff";window.addEventListener('resize',function(){if(!ig.system){return;}
if(ig.game){ig.game.resizeYo();}},false);var width=window.screenWidthMinusAd*scale,height=window.screenHeightMinusAd*scale;ig.main('#canvas',MyGame,60,width,height,1);});