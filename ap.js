// ========== BASIC SLIDESHOWS (slideshow1, slideshow2) ==========
const imageSets = [
    {
        elementId: 'slideshow1',
        images: [
            "images.Diego/image1.jpg",
            "images.Diego/image2.jpg",
            "images.Diego/image3.jpg"
        ],
        currentIndex: 0,
        interval: 2000
    },
    {
        elementId: 'slideshow2',
        images: [
            "images.Diego/image4.jpg",
            "images.Diego/image5.jpg",
            "images.Diego/image6.jpg"
        ],
        currentIndex: 0,
        interval: 3000
    }
];

imageSets.forEach(set => {
    setInterval(() => {
        const imgElement = document.getElementById(set.elementId);
        if (imgElement) {
            set.currentIndex = (set.currentIndex + 1) % set.images.length;
            imgElement.src = set.images[set.currentIndex];
        }
    }, set.interval);
});

// ========== SCROLL FADE-IN ==========
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
});
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// ========== MANUAL CAROUSEL (DOTS + TOUCH + MOUSE DRAG) ==========
document.querySelectorAll('.carousel-container').forEach(container => {
    const images = container.querySelectorAll('.carousel-image');
    const dots = container.querySelectorAll('.dot');
    const imagesWrapper = container.querySelector('.carousel-images');
    let current = 0;

    function showSlide(index) {
        images.forEach((img, i) => {
            img.classList.toggle('active', i === index);
            dots[i].classList.toggle('active', i === index);
        });
        current = index;
    }

    // Dot click
    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => showSlide(i));
    });

    // Touch swipe
    let startX = null;

    imagesWrapper.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    });

    imagesWrapper.addEventListener('touchend', (e) => {
        if (startX === null) return;
        const endX = e.changedTouches[0].clientX;
        const diff = endX - startX;

        if (diff < -50) {
            showSlide((current + 1) % images.length);
        } else if (diff > 50) {
            showSlide((current - 1 + images.length) % images.length);
        }

        startX = null;
    });

    // Mouse/trackpad swipe
    let isDragging = false;
    let dragStartX = 0;

    imagesWrapper.addEventListener('mousedown', (e) => {
        isDragging = true;
        dragStartX = e.clientX;
    });

    imagesWrapper.addEventListener('mouseup', (e) => {
        if (!isDragging) return;
        const dragEndX = e.clientX;
        const diff = dragEndX - dragStartX;

        if (diff < -50) {
            showSlide((current + 1) % images.length);
        } else if (diff > 50) {
            showSlide((current - 1 + images.length) % images.length);
        }

        isDragging = false;
    });

    imagesWrapper.addEventListener('mouseleave', () => {
        isDragging = false;
    });

    imagesWrapper.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        e.preventDefault(); // Prevent selecting images/text
    });
});
setupCarousel("rover-images", "rover-dots");
