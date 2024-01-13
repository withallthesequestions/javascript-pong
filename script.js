let ball = document.getElementById("ball");
let onePaddle = document.getElementById("1UserPaddle");
let twoPaddle = document.getElementById("2UserPaddle");
let pauseSetting = 0;
let playerOneScore = document.getElementById("playerOneScore");
let playerTwoScore = document.getElementById("playerTwoScore");

let horizontalBallSpeed = 1;
let verticalBallSpeed = 1.33;

addEventListener("click", function (event) {
	horizontalBallSpeed = horizontalBallSpeed * -1;
	verticalBallSpeed = verticalBallSpeed * -1;
});

function moveBall(horizontalBallSpeed, verticalBallSpeed) {
	ball.style.left =
		String(Number(ball.style.left.replace("%", "")) + horizontalBallSpeed) +
		"%";
	ball.style.top =
		String(Number(ball.style.top.replace("%", "")) + verticalBallSpeed) + "%";
}

function checkEdgeTouch() {
	if (
		Number(ball.style.top.replace("%", "")) >= 97.5 ||
		Number(ball.style.top.replace("%", "")) <= 2.5
	) {
		verticalBallSpeed = verticalBallSpeed * -1;
	}
	if (
		Number(ball.style.left.replace("%", "")) >= 97.5 ||
		Number(ball.style.left.replace("%", "")) <= 2.5
	) {
		horizontalBallSpeed = 0;
		verticalBallSpeed = 0;
		playerOneScore.innerText = Number(playerOneScore.innerText) + 1;
		/* reposition the ball here, so it doesn't keep triggering the score. Then restart game. */
		ball.style.left = "40%";
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

function checkPaddleTouch() {
	if (
		ball.style.left === "10%" &&
		Number(onePaddle.style.top.replace("%", "")) + 5 >=
			Number(ball.style.top.replace("%", "")) &&
		Number(ball.style.top.replace("%", "")) >=
			Number(onePaddle.style.top.replace("%", "")) - 5
	) {
		horizontalBallSpeed = horizontalBallSpeed * -1;
	}
	if (
		ball.style.left === "90%" &&
		Number(twoPaddle.style.top.replace("%", "")) + 5 >=
			Number(ball.style.top.replace("%", "")) &&
		Number(ball.style.top.replace("%", "")) >=
			Number(twoPaddle.style.top.replace("%", "")) - 5
	) {
		horizontalBallSpeed = horizontalBallSpeed * -1;
	}
}

setInterval(function () {
	if (pauseSetting === 0) {
		moveBall(horizontalBallSpeed, verticalBallSpeed);
		checkEdgeTouch();
		checkPaddleTouch();
	}
}, 200);

/* Pause Functionality */
addEventListener("keydown", function (event) {
	if (event.key === " " && pauseSetting === 0) {
		pauseSetting = 1;
	} else {
		pauseSetting = 0;
	}
});
