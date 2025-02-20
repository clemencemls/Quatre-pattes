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
