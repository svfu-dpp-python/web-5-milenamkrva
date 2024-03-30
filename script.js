var pictures = ["parr1.jpg", "parr2.jpg", "parr3.jpg", "parr4.jpg", "parr5.jpg" ];

var img = document.getElementsByClassName("img-center");
for(let i=0; i<img.length; i++)
{
var ch = [0, 0, 0, 0, 0];
img[i].addEventListener("click", function() {
ch[i]++;
if (ch[i] == 5) ch[i]=0;
img[i].src = "images/" + pictures[ch[i]];
});

img[i].addEventListener("mouseover", function() {
img[i].style.transform = "scale(1.2)";
});


img[i].addEventListener("mouseleave", function() {
img[i].style.transform = "scale(1.0)";
});
}
