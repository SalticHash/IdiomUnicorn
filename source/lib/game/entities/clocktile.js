
ig.baked=true;ig.module('game.entities.clocktile').requires('impact.entity','impact.entity-pool').defines(function(){EntityClocktile=ig.Entity.extend({size:{x:36,y:34},offset:{x:-2,y:-2},maxVel:{x:0,y:0},_wmDrawBox:true,_wmBoxColor:'rgba(253, 63, 98, .5)',zIndex:-10,bounciness:0,landed:false,type:ig.Entity.TYPE.B,checkAgainst:ig.Entity.TYPE.BOTH,collides:ig.Entity.COLLIDES.NEVER,health:3000,name:"clocktile",active:false,hidden:false,edge:false,animSheet:new ig.AnimationSheet('media/clock-tiles.png',32,32),wakeSound:new ig.Sound('media/sounds/wakeup.*'),pause:false,pauseTimers:function(){},unpauseTimers:function(){},paused:function(){this.pauseTimers();this.pause=true;},unpaused:function(){this.unpauseTimers();this.pause=false;},init:function(x,y,settings){this.parent(x,y,settings);this.addAnim('inactive',1,[0],true);this.addAnim('active',1,[1],true);if(!ig.global.wm){this.active=false;this.edgeCheck();}},edgeCheck:function(){if(this.edge){this.size.x=34;this.size.y=32;this.offset.x=-1;this.offset.y=-2;}
else{this.size.x=36;this.size.y=34;this.offset.x=-2;this.offset.y=-2;}},reset:function(x,y,settings){if(!ig.global.wm){ig.game.sortEntitiesDeferred();}
this.active=false;this.hidden=false;this.edgeCheck();this.parent(x,y,settings);},update:function(){if(ig.game.pause&&!this.pause){this.paused();}
else if(this.pause&&!ig.game.pause){this.unpaused();}
if(this.pause==false&&ig.game.quiz==true||this.pause==false&&ig.game.cutScene==true){this.pause=true;this.paused();}
if(this.pause==true&&ig.game.quiz==false&&ig.game.cutScene==false){this.pause=false;this.unpaused();}
this.animMe();this.parent();},animMe:function(){if(this.hidden){this.currentAnim=null;}
else if(this.pause&&this.currentAnim){this.currentAnim.gotoFrame(this.pauseFrame);}
else if(this.active){this.currentAnim=this.anims.active;}
else{this.currentAnim=this.anims.inactive;}},check:function(other){if(other.name=="clocktile"&&other.active&&!this.active){this.active=true;}
if(this.active&&other.name=="bowKnight"&&other.sleeping){other.wakeup();}
if(ig.game.getEntityByName('player')){var player=ig.game.getEntityByName('player');if(other==player&&!this.active&&player.loud){if(!ig.game.muteGame){this.wakeSound.volume=.1;this.wakeSound.play();}
this.active=true;}}}});ig.EntityPool.enableFor(EntityClocktile);});

