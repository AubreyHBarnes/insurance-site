let menuBtn = document.querySelector('#mobile-menu-container');
let classes = document.querySelector('#mobile-menu').classList;

let modal = document.querySelector('#toggle-modal');
let modalBackdrop = document.querySelector('#toggle-backdrop');
let applyBtn = document.querySelector('#applyBtn');

// console.log(menuBtn);

menuBtn.addEventListener('click', (event) => {
    classes.toggle('hidden');
    classes.toggle('block');
    console.log(classes);

})

applyBtn.addEventListener('click', (event) => {
    // event.preventDefault();
    modal.classList.toggle('hidden');
})

modalBackdrop.addEventListener('click', (event) => {
    // event.preventDefault();
    modal.classList.toggle('hidden');
})