const [ radiiSlider, sizeSlider ] = document.querySelectorAll('.control input[type=range]');
const [ colorPicker1, colorPicker2 ] = document.querySelectorAll('.control input[type=color]');
const [ radii, size ] = document.querySelectorAll('.control p');
const button = document.querySelector('button');

const updateControls = (control, unit = 'px') => {
  const name = control.previousElementSibling.innerText.toLowerCase();
  const currentValue = control.nextElementSibling;

  button.style.setProperty(`--${name}`, control.value + `${unit}`);
  currentValue.innerText = control.value + ` ${unit}`;
}

const updateColor = control => {
  const number = control.previousElementSibling.innerText.split('').pop();
  const currentValue = control.nextElementSibling;
  
  button.style.setProperty(`--btn-bg-${number}`, control.value);
  currentValue.innerText = control.value;
}

radiiSlider.addEventListener('change', ({ target }) => updateControls(target))
sizeSlider.addEventListener('change', ({ target }) => updateControls(target, 'rem'))
colorPicker1.addEventListener('change', ({ target }) => updateColor(target))
colorPicker2.addEventListener('change', ({ target }) => updateColor(target))