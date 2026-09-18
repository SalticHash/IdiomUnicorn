extends Node2D

func _ready() -> void:
	$Stars.restart()
	$Sparkle.play("sparkle")
	await $Stars.finished
	if $Sparkle.is_playing(): await $Sparkle.animation_finished
	queue_free()
