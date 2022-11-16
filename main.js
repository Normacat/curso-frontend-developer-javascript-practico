const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside= document.querySelector('.product-detail');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const cardsContainer = document.querySelector('.cards-container');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click',toggleCarritoAside);

function toggleDesktopMenu () {
    const isCarritoAsideClosed = aside.classList.contains('inactive');

    if (!isCarritoAsideClosed) {
        aside.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu () {
    const isCarritoAsideClosed = aside.classList.contains('inactive');

    if (!isCarritoAsideClosed) {
        aside.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}


function toggleCarritoAside () {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }
    aside.classList.toggle('inactive');

}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120.00,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'TV',
    price: 990.00,
    image:'https://images.pexels.com/photos/5202925/pexels-photo-5202925.jpeg?auto=compress&cs=tinysrgb&w=600',
});
productList.push({
    name: 'Car',
    price: 5700.00,
    image:'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=600',
});
productList.push({
    name: 'Computer',
    price: 1600.00,
    image:'https://images.pexels.com/photos/459653/pexels-photo-459653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
    name: 'Table',
    price: 360.00,
    image:'https://images.pexels.com/photos/890669/pexels-photo-890669.jpeg?auto=compress&cs=tinysrgb&w=600',
});
productList.push({
    name: 'Chair',
    price: 209.00,
    image:'https://images.pexels.com/photos/3705539/pexels-photo-3705539.jpeg?cs=srgb&dl=pexels-alexander-zvir-3705539.jpg&fm=jpg&_gl=1*1ln8q7u*_ga*MTUyNzA3OTk5OS4xNjUxMDM5NTgw*_ga_8JE65Q40S6*MTY2ODU3MDc1Ny4xNy4xLjE2Njg1NzE2MDcuMC4wLjA.',
});
productList.push({
    name: 'Airpods',
    price: 349.00,
    image:'https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&w=600',
});
productList.push({
    name: 'Watch',
    price: 115.00,
    image:'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg?auto=compress&cs=tinysrgb&w=600',
});
productList.push({
    name: 'Skate board',
    price: 198.00,
    image:'https://images.pexels.com/photos/1018484/pexels-photo-1018484.jpeg?auto=compress&cs=tinysrgb&w=600',
});
productList.push({
    name: 'Sun glasses',
    price: 62.00,
    image:'https://images.pexels.com/photos/147641/pexels-photo-147641.jpeg?auto=compress&cs=tinysrgb&w=600',
});
productList.push({
    name: 'Camera',
    price: 789.00,
    image:'https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=600',
});

/* <div class="product-card">
<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
<div class="product-info">
    <div>
        <p>$120,00</p>
        <p>Bike</p>
    </div>
  <figure>
    <img src="./icons/bt_add_to_cart.svg" alt="">
  </figure>
</div> */

function renderProducts(arr) {
    for (product of productList) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
     
        // product = {name, price, image} -> product.image
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
     
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
     
        const productInfoDiv = document.createElement('div');
     
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
     
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
     
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
     
        productInfoFigure.appendChild(productImgCart);
     
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
     
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
     
        cardsContainer.appendChild(productCard);
     }
}

renderProducts(productList);