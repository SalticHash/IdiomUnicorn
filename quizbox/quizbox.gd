extends CanvasLayer

@onready var questions: JSON = preload("res://quizbox/questions.json")
var answer: String = ""

signal correct
signal incorrect

func _ready() -> void:
	%Button1.connect("pressed", func(): pressed(%Button1))
	%Button2.connect("pressed", func(): pressed(%Button2))
	%Button3.connect("pressed", func(): pressed(%Button3))

func show_quiz() -> void:
	get_tree().paused = true
	show()
	var q = questions.data.pick_random()
	%Question.text = "What does \"%s\" mean?" % q.word
	%Sentence.text = q.sentence
	answer = q.answers[0]
	q.answers.shuffle()
	%Button1.text = q.answers[0]
	%Button2.text = q.answers[1]
	%Button3.text = q.answers[2]

func pressed(button: Button):
	var selected_answer = button.text
	if selected_answer == answer:
		$Correct.play()
		correct.emit()
	else:
		$Incorrect.play()
		incorrect.emit()
	hide()
	get_tree().paused = false
	
