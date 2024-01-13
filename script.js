let ball = document.getElementById("ball");
let onePaddle = document.getElementById("1UserPaddle");
let twoPaddle = document.getElementById("2UserPaddle");
let playerOneScore = document.getElementById("playerOneScore");
let playerTwoScore = document.getElementById("playerTwoScore");

let HORIZONTALBALLSPEED = 1;
let VERTICALBALLSPEED = 1.33;
let resetBallSignal = 0;
let pauseGameSignal = 0;

setInterval(function () {
	if (pauseGameSignal === 0 && resetBallSignal === 0) {
		moveBall(HORIZONTALBALLSPEED, VERTICALBALLSPEED);
		checkEdgeTouch();
		checkPaddleTouch();
	} else if (pauseGameSignal === 0 && resetBallSignal === 1) {
		ball.style.left = "50%";
		ball.style.top = "50%";
		resetBallSignal = 0;
		moveBall(HORIZONTALBALLSPEED, VERTICALBALLSPEED);
		checkEdgeTouch();
		checkPaddleTouch();
	}
}, 200);

addEventListener("keydown", function (event) {
	if (event.key === " " && pauseGameSignal === 0) {
		pauseGameSignal = 1;
	} else {
		pauseGameSignal = 0;
	}
});

function moveBall(HORIZONTALBALLSPEED, VERTICALBALLSPEED) {
	ball.style.left =
		String(Number(ball.style.left.replace("%", "")) + HORIZONTALBALLSPEED) +
		"%";
	ball.style.top =
		String(Number(ball.style.top.replace("%", "")) + VERTICALBALLSPEED) + "%";
}

function checkEdgeTouch() {
	if (
		Number(ball.style.top.replace("%", "")) >= 97.5 ||
		Number(ball.style.top.replace("%", "")) <= 2.5
	) {
		VERTICALBALLSPEED = VERTICALBALLSPEED * -1;
	}
	if (Number(ball.style.left.replace("%", "")) <= 2.5) {
		playerTwoScore.innerText = Number(playerTwoScore.innerText) + 1;
		resetBallSignal = 1;
	}
	if (Number(ball.style.left.replace("%", "")) >= 97.5) {
		playerOneScore.innerText = Number(playerOneScore.innerText) + 1;
		resetBallSignal = 1;
	}
}

function checkPaddleTouch() {
	if (
		ball.style.left === "10%" &&
		Number(onePaddle.style.top.replace("%", "")) + 5 >=
			Number(ball.style.top.replace("%", "")) &&
		Number(ball.style.top.replace("%", "")) >=
			Number(onePaddle.style.top.replace("%", "")) - 5
	) {
		HORIZONTALBALLSPEED = HORIZONTALBALLSPEED * -1;
	}
	if (
		ball.style.left === "90%" &&
		Number(twoPaddle.style.top.replace("%", "")) + 5 >=
			Number(ball.style.top.replace("%", "")) &&
		Number(ball.style.top.replace("%", "")) >=
			Number(twoPaddle.style.top.replace("%", "")) - 5
	) {
		HORIZONTALBALLSPEED = HORIZONTALBALLSPEED * -1;
	}
}

addEventListener("keydown", function (event) {
	if (event.key === "q" && Number(onePaddle.style.top.replace("%", "")) >= 6) {
		onePaddle.style.top =
			String(Number(onePaddle.style.top.replace("%", "")) - 1) + "%";
	}
	if (event.key === "a" && Number(onePaddle.style.top.replace("%", "")) <= 94) {
		onePaddle.style.top =
			String(Number(onePaddle.style.top.replace("%", "")) + 1) + "%";
	}
});
addEventListener("keydown", function (event) {
	if (event.key === "o" && Number(twoPaddle.style.top.replace("%", "")) >= 6) {
		twoPaddle.style.top =
			String(Number(twoPaddle.style.top.replace("%", "")) - 1) + "%";
	}
	if (event.key === "l" && Number(twoPaddle.style.top.replace("%", "")) <= 94) {
		twoPaddle.style.top =
			String(Number(twoPaddle.style.top.replace("%", "")) + 1) + "%";
	}
});

addEventListener("click", function () {
	HORIZONTALBALLSPEED = HORIZONTALBALLSPEED * -1;
	VERTICALBALLSPEED = VERTICALBALLSPEED * -1;
});
