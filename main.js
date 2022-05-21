document.getElementById("icon").onclick = function icon() {

  let nav = document.getElementById("nav");
  let icon = document.getElementById("icon");
  

  if (nav.style.height === "0vh") {
    nav.style.height = "42vw";
    icon.style.left = "80%";
    icon.style.top = "2vh";
    icon.style.transform = "rotate(270deg)";
    icon.style.position = "absolute";
    nav.style.position = "relative";




  } else {
    nav.style.height = "0vh";
    icon.style.left = "90%";
    icon.style.top = "2.5vh";
    icon.style.transform = "rotate(0deg)";
    icon.style.position = "absolute";
    nav.style.position = "relative";

  }

};
