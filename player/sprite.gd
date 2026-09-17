extends AnimatedSprite2D

@onready var player: Player = get_parent()

func _process(_delta: float) -> void:
	if player.is_on_floor() && player.get_floor_normal() != Vector2.UP:
		var tween = create_tween().set_parallel(true)
		tween.tween_property(self, "rotation",-PI/4.0, 0.1)
		tween.tween_property(self, "position",Vector2(4.0, -1.0), 0.1)
	else:
		var tween = create_tween().set_parallel(true)
		tween.tween_property(self, "rotation",0.0, 0.1)
		tween.tween_property(self, "position",Vector2(0.0, -5.0), 0.1)
	if player.attacking: speed_scale = 1.11
	elif !player.is_on_floor(): speed_scale = 1.0
	elif player.running: speed_scale = 1.67 # Frame length = 0.05
	else: speed_scale = 1.11 # Frame length = 0.075


func _on_animation_changed() -> void:
	if animation == "dash":
		offset = Vector2(-17.0, -13.0)
	else:
		offset = Vector2.ZERO
