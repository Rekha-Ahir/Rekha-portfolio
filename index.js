
const side = document.getElementById('side');
const nav = document.getElementById('nav');
console.log(nav[1])
let toggle = document.getElementsByClassName('toggle');

// Add a function to handle screen size changes
function handleResize() {
  if (window.innerWidth < 500) {
    if (nav.style.display === 'none' || nav.style.display === '') {
      nav.style.display = 'flex';
      toggle[0].style.height = '200px';
    } else {
      nav.style.display = 'none';
      toggle[0].style.height = '50px';
    }
  }
}

side.addEventListener('click', handleResize);

// Add an event listener for screen size changes
window.addEventListener('resize', handleResize);