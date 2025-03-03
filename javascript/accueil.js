//  Pour HISTOIRE DE REUSSITE - façon pas du tout optimum de le faire !

function changePicture2() {
  let picture = document.getElementById("photo");
  let paragraphe = document.getElementById("texte");
  let border = document.getElementById("oscar");
  let border_supp = document.getElementById("luna");
  let border_supp2 = document.getElementById("max");
  picture.style.backgroundImage = 'url("Images/chat-papillon.jpg")';
  paragraphe.innerHTML =
    "<span>Oscar</span> <br/><br/><span>Trouvée dans la rue avec trois pattes cassées, Oscar a été soignée et à retrouver sa joie de vivre. Elle coule maintenant des jours heureux dans sa nouvelle famille.</span><br /><br /><span>Fevrier 2024</span>";
  border.style.border = "solid green 4px";
  border_supp.style.border = "none";
  border_supp2.style.border = "none";
}

function changePicture3() {
  let picture = document.getElementById("photo");
  let paragraphe = document.getElementById("texte");
  let border = document.getElementById("max");
  let border_supp = document.getElementById("oscar");
  let border_supp2 = document.getElementById("luna");
  picture.style.backgroundImage = 'url("/Images/Bulldog.jpg")';
  paragraphe.innerHTML =
    "<span>Max</span> <br/><br/><span>Trouvée dans la rue terrorisé, Max a été soignée et à retrouver sa joie de vivre. Elle coule maintenant des jours heureux dans sa nouvelle famille.</span><br /><br /><span>Fevrier 2024</span>";
  border.style.border = "solid green 4px";
  border_supp.style.border = "none";
  border_supp2.style.border = "none";
}

function changePicture1() {
  let picture = document.getElementById("photo");
  let paragraphe = document.getElementById("texte");
  let border = document.getElementById("luna");
  let border_supp = document.getElementById("oscar");
  let border_supp2 = document.getElementById("max");
  picture.style.backgroundImage = 'url("/Images/chien-noir.jpg")';
  paragraphe.innerHTML =
    "<span>Luna</span> <br/><br/><span>Trouvée dans la rue terrorisé, Luna a été soignée et à retrouver sa joie de vivre. Elle coule maintenant des jours heureux dans sa nouvelle famille.</span><br /><br /><span>Fevrier 2024</span>";
  border.style.border = "solid green 4px";
  border_supp.style.border = "none";
  border_supp2.style.border = "none";
}

//  Pour FAITES UN DON

let bloc = document.querySelectorAll(".bloc__bouton");

bloc.forEach(function (putStyle) {
  putStyle.addEventListener("mouseover", function () {
    putStyle.classList.add("stylebutton1");
  });
  putStyle.addEventListener("mouseout", function () {
    putStyle.classList.remove("stylebutton1");
  });
});

// // bloc.forEach(function (chooseBloc) {
// //   chooseBloc.addEventListener("click", function () {
// //     chooseBloc.style.backgroundColor = "var(--light-green)";
// //     chooseBloc.style.border = "solid 2px green";
// //   });
// });

function choose1() {
  let chooseStyle1 = document.getElementById("btn1");
  let chooseStyle2 = document.getElementById("btn2");
  let chooseStyle3 = document.getElementById("btn3");
  // chooseStyle.style.backgroundColor = "var(--light-green)";
  // chooseStyle.style.border = "solid 2px green";
  chooseStyle1.classList.add("stylebutton2");
  chooseStyle2.classList.remove("stylebutton2");
  chooseStyle3.classList.remove("stylebutton2");
}

function choose2() {
  let chooseStyle1 = document.getElementById("btn1");
  let chooseStyle2 = document.getElementById("btn2");
  let chooseStyle3 = document.getElementById("btn3");
  // chooseStyle1.style.backgroundColor = "var(--light-green)";
  // chooseStyle1.style.border = "solid 2px green";
  // chooseStyle2.style.backgroundColor = "var(--light-green)";
  // chooseStyle2.style.border = "solid 2px green";
  chooseStyle1.classList.remove("stylebutton2");
  chooseStyle2.classList.add("stylebutton2");
  chooseStyle3.classList.remove("stylebutton2");
}

function choose3() {
  let chooseStyle1 = document.getElementById("btn1");
  let chooseStyle2 = document.getElementById("btn2");
  let chooseStyle3 = document.getElementById("btn3");
  // chooseStyle1.style.backgroundColor = "var(--light-green)";
  // chooseStyle1.style.border = "solid 2px green";
  // chooseStyle2.style.backgroundColor = "var(--light-green)";
  // chooseStyle2.style.border = "solid 2px green";
  chooseStyle1.classList.remove("stylebutton2");
  chooseStyle2.classList.remove("stylebutton2");
  chooseStyle3.classList.add("stylebutton2");
}

let bloc2 = document.querySelectorAll(".bloc2_bouton");

bloc2.forEach(function (putStyle2) {
  putStyle2.addEventListener("mouseover", function () {
    putStyle2.style.backgroundColor = "var(--light-green)";
    putStyle2.style.border = "solid 2px green";
  });
  putStyle2.addEventListener("mouseout", function () {
    putStyle2.style.backgroundColor = "var(--light-grey)";
    putStyle2.style.border = "none";
  });
});

function choose4() {
  let chooseStyle4 = document.getElementById("btn4");
  let chooseStyle5 = document.getElementById("btn5");
  let chooseStyle6 = document.getElementById("btn6");
  chooseStyle4.classList.add("styl");
  chooseStyle5.classList.remove("styl");
  chooseStyle6.classList.remove("styl");
}

function choose5() {
  let chooseStyle4 = document.getElementById("btn4");
  let chooseStyle5 = document.getElementById("btn5");
  let chooseStyle6 = document.getElementById("btn6");
  chooseStyle4.classList.remove("styl");
  chooseStyle5.classList.add("styl");
  chooseStyle6.classList.remove("styl");
}

function choose6() {
  let chooseStyle4 = document.getElementById("btn4");
  let chooseStyle5 = document.getElementById("btn5");
  let chooseStyle6 = document.getElementById("btn6");
  chooseStyle4.classList.remove("styl");
  chooseStyle5.classList.remove("styl");
  chooseStyle6.classList.add("styl");
}
