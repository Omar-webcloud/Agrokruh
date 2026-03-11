const vegItems = document.querySelectorAll(".veg-item");
const vegImages = document.querySelectorAll(".veg-image img");

function setActive(name){

vegImages.forEach(img=>{
img.classList.remove("active");
if(img.dataset.name === name){
img.classList.add("active");
}
});

vegItems.forEach(item=>{
item.classList.remove("active");
if(item.dataset.name === name){
item.classList.add("active");
}
});

}


// Scroll detection

window.addEventListener("scroll",()=>{

vegItems.forEach(item=>{

const rect = item.getBoundingClientRect();

if(rect.top < window.innerHeight/2 && rect.bottom > window.innerHeight/2){

const name = item.dataset.name;
setActive(name);

}

});

});


// default active

setActive("Tomato");