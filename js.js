var img,
    timer,
    imgArr,
    current = 0;
img = document.getElementById('imge');
//img.src = './SlideShow/2.jpg';
imgArr = new Array();
for (var i = 0; i < 6; i++) {
    imgArr[i] = (i + 1) + '.jpg';

}
console.log(imgArr);

function slideshowFun() {
    current++;
    if (current == 6) {
        current = 0;
    }
    img.src = './SlideShow/' + imgArr[current];
    timer = setTimeout(slideshowFun, 1000);



}
function stopFun() {
    clearTimeout(timer);

}
function nextFun() {
    current++;
    if (current == 6) {
        current = 0;
    }
    img.src = './SlideShow/' + imgArr[current];

}
function previousFun() {
    current--;
    console.log(current);
    if (current < 0) {
        current = 5;
    }
    img.src = './SlideShow/' + imgArr[current];

}