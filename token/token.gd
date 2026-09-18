extends Area2D

@onready var effect = preload("res://stars/stars.tscn")
@onready var score = preload("res://score/score.tscn")
@export_enum("Berry", "Lemon Drop", "Candy Cane", "Ice Cream", "Cupcake") var type: int = 0
var values = [1000, 2000, 3000, 4000, 5000]
@onready var value = values[type]
func _ready() -> void:
	$Sprite.frame = type
	

var collected: bool = false
func collect(_body):
	if collected: return
	collected = true
	Global.score += value
	$Sprite.hide()
	$Rainbow.play("rainbow")
	$Sound.stream = $Sounds.get_resource(str(type))
	$Sound.play()
	var score_instance = score.instantiate()
	score_instance.value = value
	score_instance.global_position = global_position
	add_sibling(score_instance)
	var effect_instance = effect.instantiate()
	effect_instance.global_position = global_position
	add_sibling(effect_instance)
	if $Rainbow.is_playing(): await $Rainbow.animation_finished
	if $Sound.playing: await $Sound.finished
	queue_free()
	
