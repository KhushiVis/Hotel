document.addEventListener('DOMContentLoaded', function() {
    let currentSlide = 0;
    const slides = document.querySelector('.carousel-slides');
    const totalSlides = document.querySelectorAll('.carousel-slide').length;
    
    document.querySelector('.carousel-btn-next').addEventListener('click', function() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlidePosition();
    });
    
    document.querySelector('.carousel-btn-prev').addEventListener('click', function() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateSlidePosition();
    });
    
    function updateSlidePosition() {
        slides.style.transform = `translateX(-${currentSlide * 33.33}%)`;
    }
    
    // Auto-slide functionality
    setInterval(function() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlidePosition();
    }, 5000);  // Change slide every 5 seconds
});