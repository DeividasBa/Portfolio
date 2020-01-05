/////////////Header/////////////

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
    setTimeout(loopTyping, 300);
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
