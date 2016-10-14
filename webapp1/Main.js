var img = document.getElementById('img1');

images = ["Zach_flat_iron.jpg", "J+Z_flat_iron_kiss.jpg", "Canoes&fallLeaves_PortageStore_summer2014.jpg"];

x = 0;

id = setInterval(function(){
  if (x == images.length) {
    x = 0;
  }
  img.src=images[x];
  //document.images[x].style.height="400px".width="auto".margin="auto";
  x+=1;
}, 2000);
