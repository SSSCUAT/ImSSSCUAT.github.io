var pics = [
    "images.Diego/IMG_3631.jpg", //0
    "images.Diego/IMG_1236.jpg", //1
    "images.Diego/IMG_3926.jpg", //2
    "images.Diego/IMG_3927.jpg", //3
    "images.Diego/IMG_5029.jpg" //4
]
var btn = document.querySelector("button")
var img = document.querySelector("img");
var counter = 1;

btn.addEventListener("click", function(){
    if(counter === 5 ){
        counter = 0;
    }
    img.src = pics[counter]
    counter = counter + 1
});