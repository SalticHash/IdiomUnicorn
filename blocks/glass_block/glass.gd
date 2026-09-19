extends StaticBody2D

@export var spike: bool = false
func _ready() -> void:
	if spike: $SpikeCollision.monitoring = true
	$Sprite.play("default_spike" if spike else "default")
	


func _on_spike_collision_body_entered(body: Node2D) -> void:
	if body.invulnerable > 0.0: return
	body.kill()
	body.velocity.y = -400
	$SpikeSound.play()

var breaking: bool = false
func _on_break_body_entered(_body: Node2D) -> void:
	if breaking: return
	breaking = true
	$Sprite.play("break_spike" if spike else "break")


func _on_sprite_animation_finished() -> void:
	if !breaking: return
	$Collision.set_deferred("disabled", true)
	$Break.play()


func _on_sprite_frame_changed() -> void:
	if !breaking: return
	if $Sprite.frame == 1: $Shards.restart()
	$Crack.play()
