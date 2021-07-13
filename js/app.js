let menuBtn = document.querySelector('#mobile-menu-container');
let classes = document.querySelector('#mobile-menu').classList;

// console.log(menuBtn);

menuBtn.addEventListener('click', (event) => {
    classes.toggle('hidden');
    classes.toggle('block');
    console.log(classes);

})