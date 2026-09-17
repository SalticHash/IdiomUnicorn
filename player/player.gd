extends CharacterBody2D
class_name Player 

const SPEED = 300.0
const JUMP_VELOCITY = 340.0
const ACCEL_WALK: float = 120
const ACCEL_RUN: float = 200
const ACCEL_AIR: float = 200

const ATTACK_RESET_TIME: float = 2.0


var spring: bool = false
var dead: bool = false
var dying: bool = false
var attacking: bool = false
var readyToAttack: bool = true
var amReady: bool = false
var running: bool = false
var standing: bool = false
var accel: Vector2 = Vector2.ZERO

func _ready() -> void:
	$Sprite.play("walk")

func _physics_process(delta: float) -> void:
	#standing = is_on_floor()
	if !attacking:
		if is_on_floor() and $Sprite.animation != "walk":
			$Sprite.play("walk")
		if !is_on_floor() and $Sprite.animation != "jump":
			$Sprite.play("jump")
	velocity.y += 750 * delta
	accel.x = ACCEL_WALK
	if (running): accel.x = ACCEL_RUN
	if (attacking): accel.x += 500
	#if (!this.dying && !this.dead && !this.victoryDance && !ig.game.deathScreen) { this.upDateMaxVel(); }
	amReady = true;
	
	if (Input.is_action_just_pressed("action") && !attacking && readyToAttack): attack()
	if (dying || dead):# || victoryDance || ig.game.deathScreen):
		amReady = false
		velocity.x = 0
		accel.x = 0
	elif (spring):
		spring = false
		velocity.y = -300
	elif (attacking):
		if (standing):
			if (!running): velocity.y = -velocity.x - 15
			else: velocity.y = -velocity.x - 5;
		
		elif (Input.is_action_just_pressed('jump')): velocity.y = -70
		elif (Input.is_action_pressed('jump')): velocity.y = -35
		elif (Input.is_action_just_pressed('down')): velocity.y = 70
		elif (Input.is_action_pressed('down')): velocity.y = 35
		else: velocity.y = -15
		
		if (Input.is_action_pressed('left')):
			running = false
			if (velocity.x > 155): velocity.x = 155;
		elif (Input.is_action_pressed('right')):
			running = true
			velocity.y = velocity.y * 1.1
			
		else: running =false

	elif (Input.is_action_just_pressed('jump') && !attacking):
		if (standing): velocity.y = -JUMP_VELOCITY * .75
		else: velocity.y = -JUMP_VELOCITY;
		$Jump.volume_linear = .02
		$Jump.play()

	elif (Input.is_action_pressed('left')): running = false
	elif (Input.is_action_pressed('right')): running = true
	else: running = false
	velocity.x = accel.x
	velocity = velocity.sign() * velocity.abs().min(Vector2(200, 1000))
	#if (this.dying || this.dead): { this.deathMovements(); }
	


	move_and_slide()

func attack():
	#ig.game.rainbowKillCount = 0
	attacking = true
	readyToAttack = false
	$Sprite.play("dash")
	$AttackTimer.start()
	$Attack.volume_linear = .1;
	$Attack.play(); 


func _on_attack_timer_timeout() -> void:
	if attacking:
		attacking = false
		$RefreshTimer.start()
		$Charge.play()
		$Charge.volume_linear = 0.65
		$Sprite.frame = 2
	else:
		readyToAttack = true
		
