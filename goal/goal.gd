extends Node2D

@onready var player = get_parent().get_node("Player")
var won: bool = false
var balloons: bool = false
@onready var effect = preload("res://stars/stars.tscn")
var elapsed := 0.0
var speed := 150.0
func _ready() -> void:
	$Fountain.play("default")
func _process(delta: float) -> void:
	if balloons:
		elapsed += delta
		$BalloonLeft.position += Vector2(-speed / 2.0, -speed) * elapsed * delta
		$BalloonRight.position += Vector2(speed / 2.0, -speed) * elapsed * delta
		return
	if won: return
	if player.position.x > (position.x + 32.0):
		get_parent().get_node("Music").stop()
		$Music.play()
		$Timer.start()
		won = true
		player.win()
		


func _on_timer_timeout() -> void:
	$BalloonLeft.play("left")
	$BalloonRight.play("right")
	$BalloonLeft.show()
	$BalloonRight.show()
	balloons = true
	var effect_instance = effect.instantiate()
	effect_instance.global_position = global_position
	effect_instance.position.y -= 64.0
	add_sibling(effect_instance)
