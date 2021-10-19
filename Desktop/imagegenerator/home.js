var b = document.getElementById("bt");
var i = document.getElementById("pic");
var j=0;
let arr=["img/1.jpg","img/2.jpg","img/3.jpg","img/4.jpg","img/5.jpg","img/library.png","img/london.png","img/user1.jpg","img/user2.jpg" ];
function ShowPic(arr)
{
    
    i.src=arr[j];
    j++;
    if(j==arr.length){j=0;};
}