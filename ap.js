const imageSets = [
    {
        elementId: 'slideshow1',
        images: [
            "images.Diego/image1.jpg",
            "images.Diego/image2.jpg",
            "images.Diego/image3.jpg"
        ],
        currentIndex: 0,
        interval: 2000 // Change image every 3 seconds
    },
    {
        elementId: 'slideshow2',
        images: [
            "images.Diego/image4.jpg",
            "images.Diego/image5.jpg",
            "images.Diego/image6.jpg"
        ],
        currentIndex: 0,
        interval: 3000 // Change image every 5 seconds
    }
];

function showNextImage() {
    imageSets.forEach(set => {
        const imgElement = document.getElementById(set.elementId);
        set.currentIndex = (set.currentIndex + 1) % set.images.length;
        imgElement.src = set.images[set.currentIndex];
    });
}

// Automatically cycle through images
imageSets.forEach(set => {
    setInterval(() => {
        const imgElement = document.getElementById(set.elementId);
        set.currentIndex = (set.currentIndex + 1) % set.images.length;
        imgElement.src = set.images[set.currentIndex];
    }, set.interval);
});