// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const emptyHearts = document.querySelectorAll("span.like-glyph")
for(const heart of emptyHearts){
  heart.addEventListener("click", () => {
  fetch(mimicServerCall)
  .then(
    toggleHeart(heart)
  )
  .catch(err => {
      const modal = document.querySelector("#modal")
      modal.className = ""
      modal.innerText = err;
      setTimeout(() => {
        modal.className = "hidden"
      }, 3000)
    })
  })
}

function toggleHeart(heart) {
  if(heart.className === "like-glyph"){
    heart.textContent = FULL_HEART,
    heart.className = "activated-heart"
  } else {
    heart.textContent = EMPTY_HEART,
    heart.className = "like-glyph"
  }
}





//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
