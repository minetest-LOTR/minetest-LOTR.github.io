//Current copyright year script
var time = new Date();
document.getElementById('copyright').innerHTML = '&copy; Copyright ' + time.getFullYear() + ' Minetest-LOTR';

//Responsive navbar script
function showMenu() {
  var menu = document.getElementById('navbar');
  if (menu.className == 'navbar') {
    menu.className += ' responsive';
  } else {
    menu.className = 'navbar';
  }
}
