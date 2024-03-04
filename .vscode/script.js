function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("ligth")
  /*if (html.classList.contains("ligth")) html.classList.remove("ligth")
  else {
    html.classList.add("ligth")
  }*/
  const img = document.querySelector("#profile img")
  if (html.classList.contains("ligth")) {
    img.setAttribute("src", "./assets/assets/ft-lucas-day.jpg")
  } else img.setAttribute("src", "./assets/assets/ft-lucas-ligth.jpg")
}
