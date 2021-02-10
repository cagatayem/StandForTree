var mySwiper = new Swiper('.swiper-container', {
   
 
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    
});

   // LEAVES COLOR
let counter =0  
const allLeaf = document.querySelectorAll("img.images__leaf");
const buttonNext = document.querySelector(".swiper-button-next").addEventListener("click", () =>{
    counter+= 1;
    ClickNext();
})

const buttonPrev = document.querySelector(".swiper-button-prev").addEventListener("click", () =>{
    counter-=1;
    ClickPrev();
})

const ClickNext = () => {
    console.log(counter)
    for(let i = 0; i < allLeaf.length ;i++){
        if(counter === 1 ){
            allLeaf[i].src= "images/leaf-second.png"
        }
        if(counter ===2){
            allLeaf[i].src= "images/leaf-third.png"
        }
    }
}

const ClickPrev = () => {
    console.log(counter)
    for(let i = 0; i < allLeaf.length ;i++){
        if(counter === 1 ){
            allLeaf[i].src= "images/leaf-second.png"
        }
        if(counter === 0){
            allLeaf[i].src= "images/leaf.png"
        }
    }
}


 // ANSWER DISPLAY


const answer = document.querySelectorAll(".answer")

const questions = document.querySelectorAll(".question")

for(let i=0; i<questions.length; i++){
    questions[i].addEventListener("mouseover", ()=>{
        for(let k=0; k<answer.length; k++){
            answer[i].style.display="block"
        }
      
    })
    questions[i].addEventListener("mouseout", ()=>{
        for(let k=0; k<answer.length; k++){
            answer[i].style.display="none"
        }
    })
}


