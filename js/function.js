////////////Loading/////////////
window.addEventListener("load", function(){
  const preload = document.querySelector(".preload");
  preload.classList.add("finished");
});
///////////Loading End//////////

/////////////Header/////////////
//navigation bar scroll down background color animation///
let scrollPos = 100;
const containerHeader = document.querySelector('.containerHeader');

function checkIfScrolled() {
  let vertical = window.scrollY;
  if (vertical > scrollPos) {
    containerHeader.classList.add('navBackColor');
  } else {
    containerHeader.classList.remove('navBackColor');
  }
}
window.addEventListener('scroll', checkIfScrolled);

/////////////Header End/////////

/////////////Hero/////////////

function animation() {
  let i = 0;

function typingEffect() {
  let letters = heroAnimationWords[i].split("");
  function loopTyping() {    
    if (letters.length > 0) {
      document.querySelector(".heroParagraph").innerHTML += letters.shift();
    } else {
      deletingEffect();
      return false;
    }
    setTimeout(loopTyping, 200);
  };
  loopTyping();
}

function deletingEffect() {
  let word = heroAnimationWords[i].split("");
  function loopDeleting() {
    if (word.length > 0) {
      word.pop();
      document.querySelector(".heroParagraph").innerHTML = word.join("");
    } else {
      if (heroAnimationWords.length > i + 1) {
        i++;
      } else {
        i = 0;
      }
      typingEffect();
      return false;
    }
    setTimeout(loopDeleting, 150);
    
  };
  loopDeleting();
}

typingEffect(); //start all function again
}

animation();
/////////////Hero End/////////////

/////////////Contacts/////////////

var mybutton = document.getElementById("top");

// When scrolls down from the top of the document, show the button
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}