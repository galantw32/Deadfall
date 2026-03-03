// Step 2: Click counter
let clickCount = 0;

const clickButton = document.getElementById('clickButton');
const clickMessage = document.getElementById('clickMessage');

clickButton.addEventListener('click', function () {
  clickCount = clickCount + 1;

  if (clickCount === 1) {
    clickMessage.textContent = 'You clicked the button 1 time.';
  } else {
    clickMessage.textContent = 'You clicked the button ' + clickCount + ' times.';
  }
});
// Step 3: Random background color
const colorButton = document.getElementById('colorButton');

const colors = ['#ff9999', '#99ff99', '#9999ff', '#fff099', '#ffb3ff', '#b3ffff'];

colorButton.addEventListener('click', function () {
  const randomIndex = Math.floor(Math.random() * colors.length);
  const randomColor = colors[randomIndex];

  document.body.style.backgroundColor = randomColor;
});
