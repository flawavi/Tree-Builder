
// Elements //
const formEl = document.getElementById("form")
const heightEl = document.getElementById("height")
const charEl = document.getElementById("character")
const buttonEl = document.getElementById("button")

// variables //
const space = " "

// Functions //
const buildTree = () => {
  const height = heightEl.value
  const char = charEl.value
  for(let i = 1; i <= height; i++){
    console.log(space.repeat(height - i) + char.repeat(i + (i - 1)))
  }
}

formEl.addEventListener("keypress", function (evt) {
  buildTree()
  var key = evt.keyCode;
  if (key === 13) {
  }
})

// === Listeners === //
buttonEl.addEventListener("click", buildTree)
