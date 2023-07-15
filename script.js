const slides=document.querySelector(".slider").children;
const prev=document.querySelector(".prev");
const next=document.querySelector(".next");
const indicator=document.querySelector(".indicator");
let index=0;


prev.addEventListener("click",function(){
    prevSlide();
    updateCircleIndicator(); 
    resetTimer();
})

next.addEventListener("click",function(){
    nextSlide(); 
    updateCircleIndicator();
    resetTimer();     
})

// create circle indicators
function circleIndicator(){
    for(let i=0; i< slides.length; i++){
        const div=document.createElement("div");
        	    div.innerHTML=i+1;
            div.setAttribute("onclick","indicateSlide(this)")
            div.id=i;
            if(i==0){
            div.className="active";
        }
        indicator.appendChild(div);
    }
}
circleIndicator();

function indicateSlide(element){
    index=element.id;
    changeSlide();
    updateCircleIndicator();
    resetTimer();
}
     
function updateCircleIndicator(){
	for(let i=0; i<indicator.children.length; i++){
		indicator.children[i].classList.remove("active");
	}
	indicator.children[index].classList.add("active");
}

function prevSlide(){
   	 if(index==0){
   	 	index=slides.length-1;
   	 }
   	 else{
   	 	index--;
   	 }
   	 changeSlide();
}

function nextSlide(){
      if(index==slides.length-1){
      	index=0;
      }
      else{
      	index++;
      }
      changeSlide();
}

function changeSlide(){
   	       for(let i=0; i<slides.length; i++){
   	       	 slides[i].classList.remove("active");
   	       }

       slides[index].classList.add("active");
}

function resetTimer(){
   	  // when click to indicator or controls button 
   	  // stop timer 
   	  clearInterval(timer);
   	  // then started again timer
   	  timer=setInterval(autoPlay,4000);
}
 
  
function autoPlay(){
      nextSlide();
      updateCircleIndicator();
}
let timer=setInterval(autoPlay,4000);

// section 2

let valueDisplays = document.querySelectorAll(".num1, .num2");
let interval = 3000;

valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute
        ("data-val"));

        let duration = Math.floor(interval / endValue);
        let counter = setInterval(function () {
            startValue += 2;
            valueDisplay.textContent = startValue;
            if (startValue == endValue) {
                clearInterval(counter);
            }

            }, duration);
        });

        
        let valueDisplays3 = document.querySelectorAll(".num3");
        let interval3 = 3000;
        
        valueDisplays3.forEach((valueDisplay) => {
            let startValue = 0;
            let endValue = parseInt(valueDisplay.getAttribute
                ("data-val"));
        
                let duration = Math.floor(interval / endValue);
                let counter = setInterval(function () {
                    startValue += 50;
                    valueDisplay.textContent = startValue;
                    if (startValue == endValue) {
                        clearInterval(counter);
                    }
        
                    }, duration);
                });

// section 10 slider 3

var counter = 1;
setInterval(function(){
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if(counter > 2){
    counter = 1;
  }
}, 4000);