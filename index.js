

for(var i =0;i<document.querySelectorAll(".drum").length;i++){
  document.querySelectorAll("button")[i].addEventListener("click",function(){
  var k =this.innerHTML;
  clicked(k);
  animate(k);
})}


document.addEventListener("keydown", function(event){
clicked(event.key);
animate(event.key);
});

function clicked(k){
  //  alert("hello");

switch (k) {
  
case "w":
    var tom1=new Audio("sounds/tom-1.mp3");
tom1.play();
    
    break;
    case "a":
    var tom1=new Audio("sounds/tom-2.mp3");
tom1.play();
    
    break;
    case "s":
    var tom1=new Audio("sounds/tom-3.mp3");
tom1.play();
    
    break;
    case "d":
    var tom1=new Audio("sounds/crash.mp3");
tom1.play();
    
    break;
    case "j":
    var tom1=new Audio("sounds/tom-4.mp3");
tom1.play();
    
    break;
    case "k":
    var tom1=new Audio("sounds/kick-bass.mp3");
tom1.play();
    
    break;
case "l":
    var tom1=new Audio("sounds/snare.mp3");
tom1.play();
    
    break;
  default:
    break;
}
}

function animate(key){


    var k= document.querySelector("."+key);

    k.classList.add("pressed");

    setTimeout(function(){k.classList.remove("pressed")},100);
}




