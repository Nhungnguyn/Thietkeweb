let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.addEventListener('click', ()=>{
    menu.classList.toggle('fa-time');
    navbar.classList.toggle('active');
});

window.onscroll = () =>{
    menu.classList.remove('fa-time');
    navbar.classList.remove('active');
}
function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 2000);
}
document.addEventListener("DOMContentLoaded", function() {
    // Set the end time of the flash sale (in milliseconds)
    const endTime = new Date().getTime() + 7200000; // 1 hour from now

    const hoursElement = document.querySelector(".hours");
    const minutesElement = document.querySelector(".minutes");
    const secondsElement = document.querySelector(".seconds");

    // Update the countdown every second
    const countdownInterval = setInterval(updateCountdown, 1000);

    function updateCountdown() {
        const currentTime = new Date().getTime();
        const timeDifference = endTime - currentTime;

        if (timeDifference <= 0) {
            clearInterval(countdownInterval);
            hoursElement.textContent = "00";
            minutesElement.textContent = "00";
            secondsElement.textContent = "00";
        } else {
            const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

            hoursElement.textContent = padZero(hours);
            minutesElement.textContent = padZero(minutes);
            secondsElement.textContent = padZero(seconds);
        }
    }

    // Function to pad zeros to single-digit numbers
    function padZero(number) {
        return number < 10 ? "0" + number : number;
    }
});

document.getElementById('login-link').addEventListener('click', function(event) {
    event.preventDefault();
    
    var loginForm = document.getElementById('login-form');
    loginForm.style.display = (loginForm.style.display === 'none' || loginForm.style.display === '') ? 'block' : 'none';
});
function showRegisterForm() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'block';
}

function showLoginForm() {
    document.getElementById('register-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
}

function closeForm() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'none';
}
document.querySelector('.close-btn').addEventListener('click', function() {
    document.getElementById('login-form').style.display = 'none';
});
// JavaScript for "Thương hiệu" slider (scroll left)
// let currentIndexBrand = 0;
// const showNextSlideBrand = () => {
//     const sliderWrapper = document.querySelector('.product-slider-wrapper');
//     const slides = document.querySelectorAll('.product-slide');
//     const slideWidth = slides[0].clientWidth;
//     currentIndexBrand++;
//     if (currentIndexBrand >= slides.length) {
//         currentIndexBrand = 0;
//     }
//     sliderWrapper.style.transform = `translateX(${-currentIndexBrand * slideWidth}px)`;
//     sliderWrapper.style.transition = 'transform 0.5s ease-in-out';
// };

// setInterval(showNextSlideBrand, 3000);

// // JavaScript for "Bán chạy" slider (scroll right)
// let currentIndexBestSellers = 0;
// const showNextSlideBestSellers = () => {
//     const sliderWrapper = document.querySelector('.product-slider-wrapperr');
//     const slides = document.querySelectorAll('.product-slidee');
//     const slideWidth = slides[0].clientWidth;
//     currentIndexBestSellers--;
//     if (currentIndexBestSellers < 0) {
//         currentIndexBestSellers = slides.length - 1;
//     }
//     sliderWrapper.style.transform = `translateX(${-currentIndexBestSellers * slideWidth}px)`;
//     sliderWrapper.style.transition = 'transform 0.5s ease-in-out';
// };

// setInterval(showNextSlideBestSellers, 3000);


document.addEventListener('DOMContentLoaded', () => {
    const brandsLink = document.getElementById('brands-link');
    const productSlider = document.getElementById('product-slider');

    brandsLink.addEventListener('click', (event) => {
        event.preventDefault(); // Ngăn chặn hành vi mặc định của liên kết
        productSlider.scrollIntoView({ behavior: 'smooth' });
    });
});
// document.getElementById("ban-chay-link").addEventListener("click", function(event) {
//     // Ngăn chặn hành vi mặc định của thẻ a (chuyển hướng đến href)
//     event.preventDefault();
    
//     // Lấy phần tử cần cuộn đến
//     var targetElement = document.getElementById("product-listt"); // Đây là phần tử chứa danh sách sản phẩm "Bán chạy"
    
//     // Cuộn trang đến phần tử cần cuộn đến
//     targetElement.scrollIntoView({ behavior: "smooth" });
// });
document.addEventListener('DOMContentLoaded', () => {
    const banChaylink = document.getElementById('ban-chay-link');
    const productSliderr = document.getElementById('product-sliderr');

    banChaylink.addEventListener('click', (event) => {
        event.preventDefault(); // Ngăn chặn hành vi mặc định của liên kết
        productSliderr.scrollIntoView({ behavior: 'smooth' });
    });
});
function buyProduct(image, price) {
    window.location.href = `thanhtoan.html?image=${encodeURIComponent(image)}&price=${encodeURIComponent(price)}`;
}
// function addToCart() {
//     const quantity = document.getElementById('quantity').value;
//     const price = 500000; // Giá của sản phẩm, có thể thay đổi tùy vào sản phẩm cụ thể
//     const image = '/image/product1.jpg'; // Đường dẫn ảnh của sản phẩm, thay đổi tùy vào sản phẩm cụ thể
//     const url = `thanhtoan.html?image=${encodeURIComponent(image)}&price=${price}&quantity=${quantity}`;
//     window.location.href = url;
// }