extends CharacterBody2D


const JUMP_VELOCITY = -333
var death: bool = false
var applied_delay: bool = false
@export var delay: float = 0.0
@onready var score = preload("res://score/score.tscn")

func _ready() -> void:
	$JumpTimer.wait_time += delay
	print($JumpTimer.wait_time)
func _physics_process(delta: float) -> void:
	if death:
		$Sprite.rotate(TAU * delta)
	if not is_on_floor() or death:
		if velocity.y > 0 or death:
			$Sprite.play("fall")
		else:
			$Sprite.play("jump")
		velocity.y += 750 * delta
	elif $Sprite.animation != "idle": #landed
		$Sprite.play("idle")
		$JumpTimer.start()
	
	move_and_slide()

func jump():
	if death: return
	velocity.y = JUMP_VELOCITY
	$JumpTimer.wait_time = 1.0


func _on_area_body_entered(body: Node2D) -> void:
	if death: return
	if body.attacking or body.invulnerable > 0.0:
		kill(body.kill_score)
		body.killed()
		return
	body.kill()

func kill(value: int = 0):
	if death: return
	velocity.x = 200
	velocity.y = -400
	death = true
	$Die.play()
	$Collision.set_deferred("disabled", true)
	
	if value > 0:
		var score_instance = score.instantiate()
		score_instance.value = value
		score_instance.global_position = global_position + Vector2(13, 10)
		add_sibling(score_instance)

func screen_exited() -> void:
	if !death: return
	queue_free()
