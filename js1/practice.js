const INNInput = document.querySelector(".phoneInput");
const INNClick = document.getElementsByClassName("phoneClick");
const INNResult = document.querySelector(".phoneResult"); 

const INNValidate = /1|2\d{13}/;
const phoneValidate = /\+996 \d{3} \d{2}-\d{2}-\d{2}/;

INNClick[0].addEventListener("click", () => {
	if(INNValidate.test(INNInput.value)) {
		INNResult.innerText = "ok";
		INNResult.style.color = "green";
		INNInput.style.border.color = "green";
	} else {
		INNResult.innerText = "not ok";
		INNResult.style.color = "red";
		INNResult.style.backgroundColor = "#c3c3c3";
		INNResult.style.marginTop = "10px";
	}
}); 

function hide() {
	document.getElementById('myDiv').style.display = 'none';
}
function show() {
	document.getElementById('openDiv').style.display = 'block';
}