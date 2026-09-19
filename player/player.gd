extends CharacterBody2D
class_name Player 

const SPEED = 300.0
const JUMP_VELOCITY = 340.0
const ACCEL_WALK: float = 120
const ACCEL_RUN: float = 200
const ACCEL_AIR: float = 200

const ATTACK_RESET_TIME: float = 2.0
var invulnerable: float = 0.0
var rainbow_kill_count: int = 0
var kill_score: int = 0 :
	get():
		return [100, 200, 400, 600, 800, 900, 1000][min(rainbow_kill_count, 6)]

var won: bool = false
var spring: bool = false
var dead: bool = false
var dying: bool = false
var attacking: bool = false
var readyToAttack: bool = true
var amReady: bool = false
var running: bool = false
var standing: bool = false
var accel: Vector2 = Vector2.ZERO
var death_time: float = 0.0
func _ready() -> void:
	$Sprite.play("walk")

func _physics_process(delta: float) -> void:
	if won:
		velocity.x = 0
		velocity.y += 750 * delta
		move_and_slide()
		return
	if dead:
		$Camera.global_position = global_position
		death_time += delta
		if death_time > 1.0:
			velocity.y += 750 * delta
		else:
			velocity.y = -50
		position.y += velocity.y * delta
		if position.y > 288:
			get_tree().reload_current_scene()
		return
	
	if invulnerable > 0.0: invulnerable -= delta
	velocity.x = 0
	#standing = is_on_floor()
	if !attacking:
		if is_on_floor() and $Sprite.animation != "walk":
			$Sprite.play("walk")
		if !is_on_floor():
			if velocity.y > 0 and $Sprite.animation != "fall": $Sprite.play("fall")
			if velocity.y < 0 and $Sprite.animation != "jump" and $Sprite.animation != "fall": $Sprite.play("jump")
	velocity.y += 750 * delta
	velocity.x = ACCEL_WALK
	if (running): velocity.x = ACCEL_RUN
	if (attacking): velocity.x += 75
	#if (!this.dying && !this.dead && !this.victoryDance && !ig.game.deathScreen) { this.upDateMaxVel(); }
	amReady = true;
	
	if (Input.is_action_just_pressed("action") && !attacking && readyToAttack): attack()
	if (dying || dead):# || victoryDance || ig.game.deathScreen):
		amReady = false
		velocity.x = 0
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
			velocity.x = velocity.x * 1.1
			
		else: running =false

	elif (Input.is_action_just_pressed('jump') && !attacking):
		if (standing): velocity.y = -JUMP_VELOCITY * .75
		else: velocity.y = -JUMP_VELOCITY;
		$Jump.volume_linear = .02
		$Jump.play()

	elif (Input.is_action_pressed('left')):
		running = false
		velocity.x = 90
	elif (Input.is_action_pressed('right')): running = true
	else: running = false

	velocity = velocity.sign() * velocity.abs().min(Vector2(500, 1000))
	#if (this.dying || this.dead): { this.deathMovements(); }


	move_and_slide()

func attack():
	#ig.game.rainbowKillCount = 0
	rainbow_kill_count = 0
	attacking = true
	readyToAttack = false
	$Sprite.play("dash")
	$AttackTimer.start()
	#$Attack.volume_linear = .1;
	$Attack.play(); 


func _on_attack_timer_timeout() -> void:
	if won or dead: return
	if attacking:
		attacking = false
		$RefreshTimer.start()
		$Charge.play()
		$Charge.volume_linear = 0.65
		$Sprite.play("fall")
	else:
		readyToAttack = true
		
func killed() -> void:
	rainbow_kill_count += 1
	if !attacking: rainbow_kill_count = 0
	if rainbow_kill_count > 2 and rainbow_kill_count < 7:
		$Claps.get_child(max(rainbow_kill_count - 3, 0)).stop()
		$Claps.get_child(rainbow_kill_count - 2).play()
	if rainbow_kill_count <= 7:
		$Hits.get_child(rainbow_kill_count - 1).play()

func kill() -> void:
	if dead: return
	$CollisionShape2D.set_deferred("disabled", true)
	$Quizbox.show_quiz()

func _on_quizbox_correct() -> void:
	invulnerable = 1.0
	$CollisionShape2D.set_deferred("disabled", false)
	


func _on_quizbox_incorrect() -> void:
	$Sprite.play("death")
	dead = true

func win() -> void:
	$Sprite.play("victory")
	$Sprite.offset.y = 3
	attacking = false
	won = true
