const delayPreloader = setTimeout(Preloader, 2500);

function Preloader() {
    var loader = document.querySelector('.preloader');
    loader.style.display = "none";
}
function stopPreloader() {
  clearTimeout(Preloader);
}