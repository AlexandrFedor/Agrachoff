function myDropdown() {
    document.querySelector("#myDropdown").classList.toggle("show");
    document.querySelector(".dropdown__close-img").classList.toggle("show");
  }

  document
    .querySelector("#dropdown__btn")
    .addEventListener("click", myDropdown);
  document
    .querySelector(".dropdown__close-img")
    .addEventListener("click", myDropdown);

 const squareSlider = document.querySelector('.square__slider')
 const tagValue = document.querySelector('.square__value')
  squareSlider.addEventListener('input', () => {
    let sliderValue =  squareSlider.value
    tagValue.innerHTML = sliderValue + 'м<sup>2</sup>'
  })