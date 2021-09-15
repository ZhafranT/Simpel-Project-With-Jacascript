const sliderContainer = document.querySelector('.slider-container');
const sliderRight = document.querySelector('.right-slider');
const sliderLeft = document.querySelector('.left-slider');
const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');
const slidesLength = sliderRight.querySelectorAll('div').length;

let activeSliderIndex = 0;

sliderLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

upButton.addEventListener('click', () => changeSlide('up'));
downButton.addEventListener('click', () => changeSlide('down'));

const changeSlide = (direction) => {
  const sliderHeight = sliderContainer.clientHeight;
  if (direction === 'up') {
    activeSliderIndex++;
    if (activeSliderIndex > slidesLength - 1) {
      activeSliderIndex = 0;
    }
  } else if (direction === 'down') {
    activeSliderIndex--;
    if (activeSliderIndex < 0) {
      activeSliderIndex = slidesLength - 1;
    }
  }

  sliderRight.style.transform = `translateY(-${activeSliderIndex * sliderHeight}px)`;
  sliderLeft.style.transform = `translateY(${activeSliderIndex * sliderHeight}px)`;
};
