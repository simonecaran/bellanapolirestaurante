let images;
setTimeout(()=>{
images = document.querySelectorAll('.menu-img')
images.forEach(el=>{
    el.onclick = function(evt){
        modal.style.display = "block"
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
        document.querySelector('body').style.overflow = "hidden"
    }})
},1000)
// create references to the modal...
let modal = document.getElementById('myModal');
// to all images -- note I'm using a class!
// let images = document.querySelectorAll('.menu-img');
// the image in the modal
let modalImg = document.getElementById("img01");
// and the caption in the modal
let captionText = document.getElementById("caption");
// Go through all of the images with our custom class
// for (let i = 0; i < images.length; i++) {
//   let img = images[i];
//   console.log(img);
//   // and attach our click listener for this image.
//   img.onclick = function(evt) {
//     modal.style.display = "block";
//     modalImg.src = this.src;
//     captionText.innerHTML = this.alt;
//   }
// }


let span = document.getElementsByClassName("close")[0];

modal.onclick = function(){
    modal.style.display = "none"
    document.querySelector('body').style.overflow = "auto"
}