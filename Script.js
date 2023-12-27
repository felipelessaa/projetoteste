function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')

  // agora é pegar a tag img
  const img = document.querySelector('#profile img')
  // agora substituir a img quando tem light
  if (html.classList.contains('light')) {
    img.setAttribute('src', './assets/Avatar2.png')
  } else img.setAttribute('src', './assets/bruno.png')
}
