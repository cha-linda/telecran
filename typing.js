document.addEventListener('DOMContentLoaded', function () {
  let text = ['Draw stuffs with ◁ ▷ △ ▽ and loose it as soon you shake the board using Spacebar.']
  // count gives the function the lenght of the item in the array.
  let count = 0;
  // index allows the function to jump to and type next letter.
  let index = 0;
  let currentText = "";
  let letter = "";

  (function type() {
    if (count === text.length) {
      count = 0;
    }
    // the function browses the item in the array ....
    currentText = text[count];
    letter = currentText.slice(0, ++index);
    // ... and type each character in the HTML class.
    document.querySelector('.typing').textContent = letter;
    if (letter.length === currentText.length) {
      count++;
      // allow the function to begin to type the next item in the array
      // index = 0;
    }
    setTimeout(type, 150);

  }());
});