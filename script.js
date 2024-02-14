const noButton = document.getElementById("no-btn");
const buttonRect = noButton.getBoundingClientRect(); // Get button's position and size
const yesButton = document.getElementById("yes-btn");
const yesgifContainer1 = document.getElementById("yes1");
const yesgifContainer2 = document.getElementById("yes2");
const yesgifContainer3 = document.getElementById("yes3");
const yesGifMain = document.getElementsByClassName("yes-gif-main");
const nogifContainer = document.getElementById("no-gif");
const finalGif = document.getElementById("final-gif");
const insta = document.getElementById("insta");
let noClickes = 0;
let yesClickes = 0;

document.body.addEventListener("mousemove", (event) => {
  const mouseX = event.clientX; // Get the horizontal coordinate of mouse pointer
  const mouseY = event.clientY; // Get the vertical coordinate of mouse pointer

  // Check if the mouse pointer is within a certain range of the button
  const isNearButton =
    mouseX >= buttonRect.left - 50 &&
    mouseX <= buttonRect.right + 50 &&
    mouseY >= buttonRect.top - 50 &&
    mouseY <= buttonRect.bottom + 50;

  if (isNearButton) {
    const randomX = (Math.random() - 0.5) * 500; // Generate random horizontal deflection
    const randomY = (Math.random() - 0.5) * 500; // Generate random vertical deflection
    noButton.style.transition = "transform 1s ease"; // Apply smooth transition
    noButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
  } else {
    noButton.style.transition = "transform 0.3s ease"; // Apply smooth transition
    noButton.style.transform = "translate(0, 0)";
  }
});

yesButton.addEventListener("click", () => {
  yesClickes += 1;
  if (yesClickes >= 1) {
    noButton.innerHTML = "Now you can't deny";
    document.getElementById("no-btn").disabled = true;
  }
  yesgifContainer1.innerHTML =
    '<iframe src="https://giphy.com/embed/WNwLx0skSQOPCgbxNL" width="280" height="280" frameBorder="0"</iframe>';
  yesgifContainer2.innerHTML =
    '<iframe src="https://giphy.com/embed/AAhngLcMTzF21zx9C4" width="280" height="280" frameBorder="0"></iframe>';
  yesgifContainer3.innerHTML =
    '<iframe src="https://giphy.com/embed/h7uTwqEHysbd2lhyDP" width="280" height="280" frameBorder="0"></iframe>';
  yesGifMain.innerHTML =
    '<iframe src="https://giphy.com/embed/3FmUiYq9CD6R4RK94M" width="280" height="280" frameBorder="0"></iframe>';
  yesButton.innerHTML = "Yayy!! I knew it";
  nogifContainer.innerHTML = "<p></p>";
  yesGifMain.innerHTML =
    '<iframe src="https://giphy.com/embed/3FmUiYq9CD6R4RK94M" width="280" height="280" frameBorder="0"></iframe>';
});

noButton.addEventListener("click", () => {
  nogifContainer.innerHTML =
    '<iframe src="https://giphy.com/embed/elzcEggaiDASgOmCfL" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>';
  // yesButton.style.height = "100px";
  // yesButton.style.width = "100px";
  noClickes += 1;
  if (noClickes == 1) {
    yesButton.innerHTML = "Ohh Please...";
    yesButton.style.fontSize = "32px";
  } else if (noClickes == 2) {
    yesButton.innerHTML = "Come onn!";
    yesButton.style.fontSize = "48px";
    nogifContainer.innerHTML =
      '<iframe src="https://giphy.com/embed/3FmUiYq9CD6R4RK94M" width="280" height="280" frameBorder="0"></iframe>';
  } else if (noClickes == 3) {
    //yesButton.innerHTML = "I will be sad :(";
    yesButton.innerHTML = "I will be sad :(<p>you can still say yes!</p>";
    yesButton.style.fontSize = "60px";
    nogifContainer.innerHTML =
      '<iframe src="https://giphy.com/embed/CT5Ye7uVJLFtu" width="480" height="163" frameBorder="0"></iframe>';
  } else if (noClickes == 4) {
    yesButton.innerHTML = "Reallyyy !!! :( <br> Is it FINAL";
    yesButton.style.fontSize = "70px";
    nogifContainer.innerHTML =
      '<iframe src="https://giphy.com/embed/yoJC2Olx0ekMy2nX7W" width="480" height="264" frameBorder="0"></iframe>';
  } else if (noClickes == 5) {
    yesButton.style.display = "none";
    noButton.style.display = "none";
    nogifContainer.innerHTML = "";
    finalGif.innerHTML =
      '<p>Ok, then Np</p><iframe src="https://giphy.com/embed/l22ysLe54hZP0wubek" width="480" height="312" frameBorder="0"></iframe>';
    insta.innerHTML =
      '<p>Wanna change your decision ? </p> <a href="https://www.instagram.com/_gaurav__v/">message me</a>';
  }
});
