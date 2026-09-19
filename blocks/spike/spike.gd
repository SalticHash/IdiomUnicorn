extends Area2D



func _on_body_entered(body: Node2D) -> void:
	if body.invulnerable > 0.0: return
	body.kill()
	$Sound.play()
