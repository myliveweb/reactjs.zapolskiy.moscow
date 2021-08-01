import topMenu from "./menuList";

const scrollHandlerMenu = (e) => {
  let current = ''
  let el;
  topMenu.forEach(function(item, i, arr) {
    el = document.getElementById(item.topLink)
    if(el && el.getBoundingClientRect().top - 150 <= 0) {
      current = item.topLink
    }
  });
  const elMenu = document.querySelector('li > a[href$="' + current + '"]').parentNode
  if(elMenu) {
    document.querySelectorAll('ul.nav > li').forEach(n => n.classList.remove('active'))
    elMenu.className = 'active'
  }
}

export default scrollHandlerMenu