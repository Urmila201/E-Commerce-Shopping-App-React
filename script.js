//copy menu for moblie//
  function copyMenu(){
    //copy inside .dpt-cat to .departments
    var dptCategory = document.querySelector('.dpt-cat');
    var dptPlace = document.querySelector('.departments');
    dptPlace.innerHTML = dptCategory.innerHTML;

    var mainNav = document.querySelector('.header-nav nav');
    var navPlace = document.querySelector('.off-canvas nav');
    navPlace.innerHTML = mainNav.innerHTML;

    //copy .header-top to .wrapper to thetop-nav//

    var topNav = document.querySelector('.header-top ');
    var topPlace = document.querySelector('.off-canvas .thetop-nav');
    topPlace.innerHTML = topNav.innerHTML;
  }
  copyMenu();

  const menuButton = document.querySelector('.trigger'),
        closeButton = document.querySelector('.t-close'),
        addClass = document.querySelector('.site')
menuButton.addEventListener('click', function(){
  addClass.classList.toggle('showmenu')
})
closeButton.addEventListener('click', function(){
  addClass.classList.remove('showmenu')
})


  //Show Submenu On mobile//

  // const submenu =document.querySelectorAll('.has-child .icon-small');
  // submenu.forEach((menu)=> addEventListener('click',toggle));

  // function toggle(e){
  //   e.preventDefault();
  //   submenu.forEach((item)=> item != this? item.closest('.has-child').classList.remove('expand') : null)
  //   if(this.closest('.has-child').classListc != 'expand');
  //   this.closest('.has-child').classList.toggle('expand');
  // }

  const submenu = document.querySelectorAll('.has-child .icon-small');
submenu.forEach((menu) => menu.addEventListener('click', toggle));

function toggle(e) {
  e.preventDefault();
  submenu.forEach((item) => {
    if (item !== this) {
      item.closest('.has-child').classList.remove('expand');
    }
  });
  if (this.closest('.has-child').classList.contains('expand')) {
    this.closest('.has-child').classList.remove('expand');
  } else {
    this.closest('.has-child').classList.add('expand');
  }
}

//slider//

const swiper = new Swiper('.swiper', {
  loop: true,

   pagination: {
    el: '.swiper-pagination',
  },

});