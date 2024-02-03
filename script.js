const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");

noBtn.addEventListener("touchstart", handleNo);
noBtn.addEventListener("click", handleNo);
noBtn.addEventListener("mouseover", runAway);
yesBtn.addEventListener("click", handleYes);

function runAway(e) {
	const randomX = Math.random() * window.innerWidth;
	const randomY = Math.random() * window.innerHeight;

	noBtn.style = `position: fixed; left: ${Math.abs(
		e.x - randomX
	)}px; top: ${Math.abs(e.y - randomY)}px`;
}

function handleNo() {
	const noMsg = [
		"not an option",
		"not a valid answer",
		"no",
		"sorry try again",
		"nope try again",
		"you're really trying huhh",
		"get the hint yet",
		"NOOO",
		"sorry not a choice",
		"uhhh no",
		"NOO",
		"wow really",
		"im disappointed",
		"really?",
		"no",
		"try again",
		"NOPE",
		"wrong answer",
		"pick again",
		"NO",
		"that wasn't a choice",
		"wow try again!",
	];
	const noImg = [
		"https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExeTF6Y2ZrYzRzOTE1NTgxNnNud2Q4d3NlYXFiZW8ydjQ3eDVsYnNsMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/6qqfYC0LyAvWYKd8iW/giphy.gif",
		"https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXgwY3c5Y3gzcHEybjB1bnE0dXdxazNhZ2FjbXN3OXNwdHgzNjFreSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/kFkYZn2vrgDpnkPhkt/giphy.gif",
		"https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHM3aWFpcG1ld2J3NXN0dHk1bmg1NG90cjJ0aWt5YzVta2pneG1oNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/28lD6wNNFricYDJUiu/giphy.gif",
		"https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbWE0dTZ2a2Z2ajQ0bjJiNDF2dzAwdjV0MWxwMjlkMG5ldTRzcDdnYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/ef9fcamITx5Obu3hgU/giphy.gif",
		"https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExYWQ2OXVianpwZWY5c2F1bG95N2pydmJxM2JwdWczOXJ6MDFkcGxpcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/5gYjI23yAz7xeCRGo5/giphy.gif",
		"https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMmZ1dHMyb240NnNoc2NhNnlrb2xyMndjcnM5N2hmc3o0b3VuOXZ6ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/ign98IFTHUtUAx1GxE/giphy.gif",
	];
	const randNumForNoMsg = Math.floor(Math.random() * noMsg.length);
	noBtn.innerText = noMsg[randNumForNoMsg];

	const giphy = document.getElementById("giphy");
	const randNumForNoImg = Math.floor(Math.random() * noImg.length);
	giphy.src = noImg[randNumForNoImg];
}

function handleYes() {
	const giphy = document.getElementById("giphy");
	const msg = document.getElementById("msg");
	const btnContainer = document.getElementById("button-container");

	giphy.src =
		"https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmZuZHF2YWtnbmd3bGRvZ3ZkbXBjOGo5ZjRqZHprNHFzZ2EydHUxbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/3q2PV2UDy0VYKUvZSk/giphy.gif";
	msg.innerText = "Yayyyy!!! I'm excited!! :P";
	btnContainer.innerHTML = "";
}
