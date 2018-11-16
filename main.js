var button = document.getElementsByTagName('button'); 

function changeColor() {
    this.classList.toggle('change-color');
};

for (i=0; i < button.length; i++) {
    button[i].addEventListener('mouseenter', changeColor);
    button[i].addEventListener('mouseleave', changeColor);
}; 
                         
