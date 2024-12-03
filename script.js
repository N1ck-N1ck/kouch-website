
window.addEventListener('beforeunload', function() {
    localStorage.setItem('scrollPosition', window.scrollY);
  });

document.addEventListener('DOMContentLoaded', () => {
    const specificies = document.querySelector('.our-specificies');
    const specificiesItems = document.querySelectorAll('.specificies-item');
    const dots = document.querySelectorAll('.dot');
    let currentIndex = 0;
    const totalItems = specificiesItems.length;
    const itemWidth = specificiesItems[0].offsetWidth;

    function updateActiveDot(index) {
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    function showItem(index) {
        const offset = -index * itemWidth;
        specificies.style.transform = `translateX(${offset}px)`;
        updateActiveDot(index);
    }

    function moveItemToEnd() {
        specificies.appendChild(specificies.firstElementChild);
        specificies.style.transition = 'none';
        specificies.style.transform = `translateX(${-itemWidth}px)`;
        setTimeout(() => {
            specificies.style.transition = 'transform 1s ease-in-out';
            specificies.style.transform = `translateX(0px)`;
        }, );
    }

    specificies.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalItems;
        showItem(currentIndex);
        if (currentIndex === 0) {
            moveItemToEnd();
        }
    });

    showItem(currentIndex);
});

document.addEventListener("DOMContentLoaded", function() {
    let items = document.querySelectorAll(".accordion-item");
 
    animateAccordion();

    function animateAccordion() {
        items[0].style.width = items[0].style.width === '160px' ? '365px' : '160px';
        items[1].style.width = items[1].style.width === '242px' ? '365px' : '242px';
        items[2].style.width = items[2].style.width === '365px' ? '242px' : '365px';
        items[3].style.width = items[3].style.width === '365px' ? '160px' : '365px';
    }

    setInterval(animateAccordion, 10000); // Увеличиваем интервал для более плавной анимации
});

let currentReviewSlide = 0;

function showReviewSlide(index) {
    const reviewSlides = document.querySelectorAll('.review-main .review-slide');
    const totalReviewSlides = reviewSlides.length;

    if (index >= totalReviewSlides) {
        currentReviewSlide = 0;
    } else if (index < 0) {
        currentReviewSlide = totalReviewSlides - 1;
    } else {
        currentReviewSlide = index;
    }

    const offset = -currentReviewSlide * 100;
    reviewSlides.forEach(slide => {
        slide.style.transform = `translateX(${offset}%)`;
    });
}

function nextReviewSlide() {
    showReviewSlide(currentReviewSlide + 1);
}

function prevReviewSlide() {
    showReviewSlide(currentReviewSlide - 1);
}

document.querySelectorAll('#review-page .arrow-back').forEach(button => {
    button.addEventListener('click', prevReviewSlide);
});
document.querySelectorAll('#review-page .arrow-next').forEach(button => {
    button.addEventListener('click', nextReviewSlide);
});