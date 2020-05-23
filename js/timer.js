let countDownDate = new Date("May 31, 2020 00:00:00").getTime();
let countDownFunction = setInterval(function () {
	let now = new Date().getTime();
	let distance = countDownDate - now;
	let days = Math.floor(distance / (1000 * 60 * 60 * 24));
	let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	let seconds = Math.floor((distance % (1000 * 60)) / 1000);
	let massive = document.getElementsByClassName("lot__time");
	for (let index = 0; index < massive.length; index++) {
		massive[index].innerHTML = days + ":" + hours + ":" + minutes + ":" + seconds;
		if (distance < 0) {
			clearInterval(countDownFunction);
			massive[index].innerHTML = "Время истекло";
		}
	}
}, 1000)