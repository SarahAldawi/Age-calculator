let userInput = document.getElementById("date");
let submitBtn = document.getElementById("calculate-btn");
let resetBtn = document.getElementById("reset-btn");

submitBtn.addEventListener("click", function () {
  calculateDate();
});
resetBtn.addEventListener("click", function(){
    console.log("clicked")
    reset();
})

function calculateDate() {
  today = new Date();
  if (new Date(userInput.value) == today) {
    showResult(0);
  } else if (new Date(userInput.value) > today) {
    alert("Invalid Date!!");
  } else if (new Date(userInput.value) < today){
    let ageInDays =
      Math.abs(today - new Date(userInput.value)) / (1000 * 60 * 60 * 24);
    const sum = (((ageInDays + Number.EPSILON) * 100) / 100).toFixed();
    showResult(sum);
  }
}

function showResult(sum) {
  let ageIS = document.getElementById("ageIs");
  let paragraph = document.createElement("p");
  paragraph.textContent = sum + " Days";
  ageIS.innerHTML = "";
  ageIS.appendChild(paragraph);
}

function reset(){
location.reload()
}
