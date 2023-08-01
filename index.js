const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

const createTimerAnimator = () => {
	return (seconds) => {
		let amount = seconds

		const updateTimer = () => {
			const hours = Math.floor(amount / 3600 % 24).toString()
			const minutes = Math.floor(amount / 60 % 60).toString()
			const sec = Math.floor(amount % 60).toString()
			timerEl.innerText = (hours.length === 1 ? `0${hours}` : hours) + ':' +
				(minutes.length === 1 ? `0${minutes}` : minutes) + ':' +
				(sec.length === 1 ? `0${sec}` : sec)

		}
		updateTimer()

		const intervalId = setInterval(() => {
			amount--
			updateTimer()
		}, 1000)

		setTimeout(() => clearInterval(intervalId), seconds * 1000)
	};
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
	const str = inputEl.value
	const oldStr = str.slice(0, str.length - 1)
	const lastChar = str.at(-1)

	inputEl.value = !isNaN(Number(lastChar)) ? oldStr + lastChar : oldStr
});

buttonEl.addEventListener('click', () => {
	const seconds = Number(inputEl.value);

	animateTimer(seconds);

	inputEl.value = '';
});
