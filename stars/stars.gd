extends Node2D

func _ready() -> void:
	$Sparkle1.position += Vector2(randi_range(-7,7), randi_range(-7, 7))
	$Sparkle2.position += Vector2(randi_range(-7,7), randi_range(-7, 7))
	$Sparkle3.position += Vector2(randi_range(-7,7), randi_range(-7, 7))

var star_velocities := [
	Vector2(0, -75),
	Vector2(75, -75),
	Vector2(-75, -37.5),
	Vector2(-75, 0),
	Vector2(75, 37.5),
	Vector2(75, 75),
	Vector2(37.5, 0),
	Vector2(-37.5, 37.5)
]
func emit_star(idx: int):
	$Stars.emit_particle(
		Transform2D(), star_velocities[idx],
		Color.WHITE, Color.WHITE,
		GPUParticles2D.EmitFlags.EMIT_FLAG_VELOCITY
	)

var i = 0
func _on_timer_timeout() -> void:
	match i:
		0:
			emit_star(i); $Sparkle1.play("sparkle")
		1: emit_star(i)
		2: emit_star(i)
		3: emit_star(i)
		4:
			emit_star(i); $Sparkle2.play("sparkle")
		5: emit_star(i)
		6: emit_star(i)
		7:
			emit_star(i); $Sparkle3.play("sparkle")
	i += 1
	if i >= 8:
		$Timer.stop()
