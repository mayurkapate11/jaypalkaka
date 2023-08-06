// Questions that will be asked
const Questions = [{
	q: "Who is the jaypalkaka girlfriend ?",
	a: [{ text: "kayti", isCorrect: false },
	{ text: "atyabai", isCorrect: false },
	{ text: "a kaku", isCorrect: true },
	{ text: "jamun", isCorrect: false }
	]

},
{
	q: "Who is the baba-bakchod?",
	a: [{ text: "mahesh", isCorrect: false, isSelected: false },
	{ text: "saurav", isCorrect: false },
	{ text: "rahul", isCorrect: false },
	{ text: "nishant", isCorrect: true }
	]

},
{
     q: "who is the leader of chadar gang?",
	 a: [{ text: "saurav sarap", isCorrect: false, isSelected: false },
 	{ text: "darshan rathod", isCorrect: false },
	{ text: "baba bakchod", isCorrect: false },
	{ text: "kastkar", isCorrect: true }
	]

},
{
	q: "whos father name is vitthal",
	a: [{ text: "kaka", isCorrect: false },
	{ text: "bakchod", isCorrect: false },
	{ text: "sarap", isCorrect: true },
	{ text: "ladlya", isCorrect: false }
	]

}

]

let currQuestion = 0
let score = 0

function loadQues() {
	const question = document.getElementById("ques")
	const opt = document.getElementById("opt")

	question.textContent = Questions[currQuestion].q;
	opt.innerHTML = ""

	for (let i = 0; i < Questions[currQuestion].a.length; i++) {
		const choicesdiv = document.createElement("div");
		const choice = document.createElement("input");
		const choiceLabel = document.createElement("label");

		choice.type = "radio";
		choice.name = "answer";
		choice.value = i;

		choiceLabel.textContent = Questions[currQuestion].a[i].text;

		choicesdiv.appendChild(choice);
		choicesdiv.appendChild(choiceLabel);
		opt.appendChild(choicesdiv);
	}
}

loadQues();

function loadScore() {
	const totalScore = document.getElementById("score")
	totalScore.textContent = `You scored ${score} out of ${Questions.length}`
}


function nextQuestion() {
	if (currQuestion < Questions.length - 1) {
		currQuestion++;
		loadQues();
	} else {
		document.getElementById("opt").remove()
		document.getElementById("ques").remove()
		document.getElementById("btn").remove()
		loadScore();
	}
}

function checkAns() {
	const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);

	if (Questions[currQuestion].a[selectedAns].isCorrect) {
		score++;
		console.log("Correct")
		nextQuestion();
	} else {
		nextQuestion();
	}
}
