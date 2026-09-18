extends AnimatedSprite2D

@export var value = 0
func _ready() -> void:
	if sprite_frames.has_animation(str(value)):
		play(str(value))
		await animation_finished
	queue_free()
