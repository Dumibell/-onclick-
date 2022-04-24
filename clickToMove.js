const lists = document.querySelectorAll(".list")
const contents = document.querySelectorAll(".content")
const firstTop = contents[0].offsetTop
const secondTop = contents[1].offsetTop
const thirdTop = contents[2].offsetTop

lists[0].onclick = function() {
  window.scrollTo({top:firstTop, behavior: 'smooth'})
}
lists[1].onclick = function() {
  window.scrollTo({top:secondTop, behavior: 'smooth'})
}
lists[2].onclick = function() {
  window.scrollTo({top:thirdTop, behavior: 'smooth'})
}
