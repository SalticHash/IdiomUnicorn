
ig.baked=true;ig.module('game.entities.spiketile').requires('impact.entity','impact.entity-pool').defines(function(){EntitySpiketile=ig.Entity.extend({size:{x:40,y:36},offset:{x:4,y:2},maxVel:{x:0,y:0},_wmDrawBox:true,_wmBoxColor:'rgba(253, 63, 98, .5)',zIndex:-11,bounciness:0,landed:false,type:ig.Entity.TYPE.B,checkAgainst:ig.Entity.TYPE.BOTH,collides:ig.Entity.COLLIDES.STATIC,soundPlayed:false,health:3000,name:"spiketile",active:false,animSheet:new ig.AnimationSheet('media/spikeblock.png',48,40),spikeSound:new ig.Sound('media/sounds/spike.*'),init:function(x,y,settings){this.parent(x,y,settings);this.addAnim('spike',1,[0],true);},reset:function(x,y,settings){if(!ig.global.wm){ig.game.sortEntitiesDeferred();}
this.active=false;this.soundPlayed=false;this.parent(x,y,settings);},update:function(){this.animMe();this.parent();},animMe:function(){this.currentAnim=this.anims.spike;},check:function(other){if(ig.game.getEntityByName('player')){var player=ig.game.getEntityByName('player');if(other==player&&!this.active&&!player.invin){if(!ig.game.muteGame&&!this.soundPlayed){this.spikeSound.volume=.3;this.spikeSound.play();this.soundPlayed=true;}
ig.game.quizbox.quiz(1,this.name);}
else if(other.name=="arrow"||other.name=="airWizard"){}
else if(other.knockMeOutTheBox&&other.kOTB==false){other.knockMeOutTheBox();}
else if(other.name=="spell"){other.spawnSparkle();}}}});ig.EntityPool.enableFor(EntitySpiketile);});

