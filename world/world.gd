@tool
extends Node2D

var packed_entities = {
	"EntitySpiketile": ("res://blocks/spike/spike.tscn"),
	"EntityToken": ("res://token/token.tscn"),
	"EntityGoal": ("res://goal/goal.tscn"),
	"EntitySwordknight": ("res://sword_knight/sword_knight.tscn"),
	"EntityGlassbrick": ("res://blocks/glass_block/glass.tscn"),
	"EntityGlassbrickSpike": ("res://blocks/glass_block/glass_spike.tscn")
}

@onready var level: JSON = preload("res://world/levels/l3.json")
#@export var layer: int = 0
@export_tool_button("load") var testt = test
func test() -> void:
	for i in range(6):
		var lay: Parallax2D = $BG.get_child(i)
		var bg_tmap = lay.get_node("TileMapLayer")
		bg_tmap.clear()
		
		var bg_data = level.data.layer[i]
		var bg_tiledata = bg_data.data
		lay.repeat_size.x = bg_data.width * 32.0
		for y in range(bg_data.height):
			for x in range(bg_data.width):
				var tile = bg_tiledata[y][x] - 1
				if tile == -1: continue
				
				
				bg_tmap.set_cell(
					Vector2i(x, y), i,
					Vector2i(int(tile) % 8, int(tile / 8))
				)
	var i = 6
	var tmap = get_node("TileMapLayer")
	tmap.clear()
	var tilel = level.data.layer[i]
	var tiledata = tilel.data
	for y in range(tilel.height):
		for x in range(tilel.width):
			var tile = tiledata[y][x] - 1
			if tile == -1: continue
			
			
			tmap.set_cell(
				Vector2i(x, y), 0,
				Vector2i(int(tile) % 8, int(tile / 8))
			)
	
	for c in $Instances.get_children(): c.queue_free()
	for entity in level.data.entities:
		if !packed_entities.has(entity.type): continue
		if entity.type == "EntityGlassbrick" and entity.settings.hollow == "false":
			entity.type = "EntityGlassbrickSpike"
		var packed: PackedScene = load(packed_entities[entity.type])
		var inst: Node2D = packed.instantiate()
		if entity.type == "EntityToken":
			inst.type = entity.settings.type - 1
		if entity.type == "EntitySwordknight":
			inst.delay = entity.settings.delay
		inst.global_position = Vector2(entity.x, entity.y)
		$Instances.add_child(inst)
		inst.owner = get_tree().edited_scene_root
		
	
