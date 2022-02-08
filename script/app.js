
let thumbnailClick = document.querySelectorAll('.thumb-active');
let secondaryImage = document.querySelector('.mobile-picture-container');
let mainImage = document.querySelector('.big-image-container');
let bigImage = document.querySelector('.big-image-container img');
console.log(thumbnailClick);


thumbnailClick.forEach(a => {
    a.addEventListener('click', (e)=>{
        thumbnailClick.forEach(thumbnail => thumbnail.classList.remove('active'));
        a.classList.add('active');

        let arrImage = ['./images/image-product-1.jpg', './images/image-product-2.jpg', './images/image-product-3.jpg', './images/image-product-4.jpg'];
        if(e.target.id.includes('t1')){
            bigImage.src = arrImage[0];
        }
        else if(e.target.id.includes('t2')){
            bigImage.src = arrImage[1];
        }
        else if(e.target.id.includes('t3')){
            bigImage.src = arrImage[2];
        }
        else if(e.target.id.includes('t4')){
            bigImage.src = arrImage[3];
        }
    })
})


// secondary image
let closeButton = document.querySelector('#close');
closeButton.addEventListener('click', closeImage);

function closeImage(){
    // secondaryImage.style.display = 'none'; 
    secondaryImage.classList.remove('main-image-event');
}

// main image click
mainImage.addEventListener('click', openImage);
function openImage(){
    // secondaryImage.style.display = 'grid';
    secondaryImage.classList.add('main-image-event');
}

// cart nav logo click
let cartLogoClick = document.querySelector('.cart-profile .cart');
let insideCart = document.querySelector('.inside-cart');
console.log(insideCart)
cartLogoClick.addEventListener('click', clickCart);
function clickCart(){
    insideCart.classList.toggle('toggle-cart');
}

// hamburger menu button
let menuButton = document.querySelector('.hamburger-button');
let closebtn = document.querySelector('.close-menu');
let menu = document.querySelector('.nav-links');
let background = document.querySelector('.background-mobile');

menuButton.addEventListener('click', openMenu);
function openMenu(){
    background.style.display = 'block';
    menu.style.left = '0%';
}
closebtn.addEventListener('click', closeMenu);
function closeMenu(){
    background.style.display = 'none';
    menu.style.left = '-60%'
}

// ------------------------------------------------------------------

let decrementBtn = document.querySelector('.decrement');
let incrementBtn = document.querySelector('.increment');
let outputNumber = document.querySelector('.number');
let count = 0;


incrementBtn.addEventListener('click', incrementItem);
decrementBtn.addEventListener('click', decrementItem);

function incrementItem(){
   count++;
   console.log(count);
   outputNumber.innerHTML = count;
}
function decrementItem(){   
    if(count < 0){
       outputNumber.innerHTML = count = count + 1; //count + 1
    }
    else if(count > 0){
        outputNumber.innerHTML = count = count - 1;
    }
    else{
        outputNumber.innerHTML = count = 0;
    }
}


// add to cart button
const cartBtn = document.querySelector('.add-cart-button button');
let Cart = document.querySelector('.inside-cart .inside');
let emptyCart = document.querySelector('.empty-cart');
let totalNumberCart = document.querySelector('.cart-profile .all-item-cart');

cartBtn.addEventListener('click', addToCart);

function addToCart(){
    let numberItemInCart = document.querySelector('span.number-item');
    let totalItemInCart = document.querySelector('span.total-items');

    if(count === 0){
        Cart.style.display = 'none';
        totalNumberCart.style.display = 'none';
        emptyCart.style.display = 'flex';
    }
    else{
        Cart.style.display = 'flex';
        numberItemInCart.innerHTML = count;
        totalItemInCart.innerHTML = '$' + count * 125.00 + '.00';
        totalNumberCart.style.display = 'block';
        totalNumberCart.innerHTML = count;
        emptyCart.style.display = 'none';
        // outputNumber.innerHTML = count = 1 - 1;
    }
    
    
}

// remove cart
let removeButton = document.querySelector('.inside-cart .del-btn');
console.log(removeButton);

removeButton.addEventListener('click', removeCart);

function removeCart(){
    Cart.style.display = 'none';
    emptyCart.style.display = 'flex';
    totalNumberCart.style.display = 'none';
    outputNumber.innerHTML = count = 0;
}


// image slide
let imageContainer = document.querySelector('#image-slide');
let img = document.querySelectorAll('#image-slide img');
let nextBtn = document.querySelector('#nextBtn');
let prevBtn = document.querySelector('#prevBtn');
console.log(img);

let counterImage = 0;

nextBtn.addEventListener('click', ()=>{
    counterImage === img.length - 1 ? (counterImage = 0) : counterImage++;
    imageContainer.style.transition = 'all 0.2s ease-in-out';
    imageContainer.style.transform = `translate(${-100 * counterImage}%)`;
});
prevBtn.addEventListener('click', ()=>{
    counterImage === 0 ? (counterImage = img.length - 1) : counterImage--;
    imageContainer.style.transition = 'all 0.2s ease-in-out';
    imageContainer.style.transform = `translate(${-100 * counterImage}%)`;
})