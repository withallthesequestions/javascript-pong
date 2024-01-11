let ball = document.getElementById("ball");
let onePaddle = document.getElementById("1UserPaddle");
let twoPaddle = document.getElementById("2UserPaddle");
let pauseVariable = 0;

let velocityX = 1;
let velocityY = 1.25;

addEventListener("click", function (event) {
	velocityX = velocityX * -1;
	velocityY = velocityY * -1;
});

function moveBall(velocityX, velocityY) {
	ball.style.left =
		String(Number(ball.style.left.replace("%", "")) + velocityX) + "%";
	ball.style.top =
		String(Number(ball.style.top.replace("%", "")) + velocityY) + "%";
	// }
}

function checkEdgeCollision() {
	if (
		Number(ball.style.left.replace("%", "")) >= 98.5 ||
		Number(ball.style.left.replace("%", "")) <= 1.5
	) {
		velocityX = velocityX * -1;
	}
	if (
		Number(ball.style.top.replace("%", "")) >= 98.5 ||
		Number(ball.style.top.replace("%", "")) <= 1.5
	) {
		velocityY = velocityY * -1;
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

function checkPaddleCollision() {
	if (
		ball.style.left === "10%" &&
		Number(onePaddle.style.top.replace("%", "")) + 5 >=
			Number(ball.style.top.replace("%", "")) &&
		Number(ball.style.top.replace("%", "")) >=
			Number(onePaddle.style.top.replace("%", "")) - 5
	) {
		velocityX = velocityX * -1;
	}
	if (
		ball.style.left === "90%" &&
		Number(twoPaddle.style.top.replace("%", "")) + 5 >=
			Number(ball.style.top.replace("%", "")) &&
		Number(ball.style.top.replace("%", "")) >=
			Number(twoPaddle.style.top.replace("%", "")) - 5
	) {
		velocityX = velocityX * -1;
	}
}

setInterval(function () {
	if (pauseVariable === 0) {
		moveBall(velocityX, velocityY);
		checkEdgeCollision();
		checkPaddleCollision();
	}
}, 200);

addEventListener("keydown", function (event) {
	if ((event.key === " ") && pauseVariable === 0) {
		pauseVariable = 1;
	} else {
		pauseVariable = 0;
	}
});
