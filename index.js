//   let bottom_line=document.querySelectorAll('.hy')
//   let hov=document.getElementsByClassName('hov')
//   let hovchild=document.getElementsByClassName('hov')[0].children[1]

// console.log(hov[0])
// for(let i=0;i<=hov.length; i++){
// hov[i].onmouseover=function(){
//     console.log("hover")
//     console.log(bottom_line[i])
//     for(let j=0;j<=bottom_line.length; j++){
//   bottom_line[j].style.display='block'}

//   }}
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