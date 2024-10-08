const getColor = () => {
  // hex code
  const randomNum = Math.floor(Math.random() * 16777215);
  const randomCode = "#" + randomNum.toString(16);
  document.body.style.backgroundColor = randomCode;
  document.getElementById("colorCode").innerHTML = randomCode;
  // color code er color change
  colorCode.style.color = randomCode;
  // btn color change
  btn.style.backgroundColor = randomCode;
  //color code copy korara jonno
  navigator.clipboard.writeText(randomCode);
}

// event call
document.getElementById("btn").addEventListener(
  "click",
  getColor
)
getColor();

// btn.addEventListener('click', () => {
//  let randNum = Math.floor(Math.random() * 16777215);
//  let ranColor = randNum.toString(16);
//  document.body.style.backgroundColor = '#' + ranColor;
//  colorCode.innerHTML = '#' + ranColor;
// })