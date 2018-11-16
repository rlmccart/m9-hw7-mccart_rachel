var button = document.getElementsByTagName('button'); 
var menu = document.getElementsByClassName('menu');

function changeColor() {
    this.classList.toggle('change-color');
};

for (i=0; i < button.length; i++) {
    button[i].addEventListener('mouseenter', changeColor);
    button[i].addEventListener('mouseleave', changeColor);
}; 
                         
var menu = document.getElementById('menu show-div');
var locationButton = document.getElementById('location-button');

var showMenu = function() {
    menu.classList.toggle('hide-div');
};

locationButton.onclick = showMenu;

var grid = document.getElementsByClassName('col-md-4');

var hoverOpacity = function() {
    this.classList.toggle('opacity'); 
}; 

for (i=0; i < grid.length; i++) {
    grid[i].addEventListener('mouseenter', hoverOpacity);
    grid[i].addEventListener('mouseleave', hoverOpacity); 
}; 