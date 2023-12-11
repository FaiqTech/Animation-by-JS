//!  Butt0nn

const createdButton = document.getElementById('createdButton');

createdButton.addEventListener('mouseover', function () {
    this.style.transform = 'scale(4)';
});

createdButton.addEventListener('mouseout', function () {
    this.style.transform = 'scale(2)';
});


//!  Color Div


const gradientDiv = document.getElementById('gradientDiv');

gradientDiv.addEventListener('click', function () {
    this.style.backgroundColor = getRandomColor();
});

function getRandomColor() {
    const colors = ['red', 'green', 'blue', 'yellow', 'violet'];
    return colors[Math.floor(Math.random() * colors.length)];
}


// //!  Moving Ball

const ball = document.querySelector('.ball');
const rightButton = document.querySelector('.rightButton');
const leftButton = document.querySelector('.leftButton');

rightButton.addEventListener('click', function () {
    ball.style.left = '83%';
});

leftButton.addEventListener('click', function () {
    ball.style.left = '0%';
});





