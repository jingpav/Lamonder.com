
document.querySelector(".container").addEventListener("mouseover",()=>
{

    console.log("Hello world");
   
})

document.addEventListener('DOMContentLoaded', () => {
    const boxIteam = document.querySelector('.box-iteam');
    const upButton = document.querySelector('.wrap-btn .up');
    const downButton = document.querySelector('.wrap-btn .down');

    // Scroll up function
    function scrollUp() {
        // Adjust the scroll amount as needed
        boxIteam.scrollBy({ top: -100, behavior: 'smooth' });
    }

    // Scroll down function
    function scrollDown() {
        // Adjust the scroll amount as needed
        boxIteam.scrollBy({ top: 100, behavior: 'smooth' });
    }

    // Add event listeners to the buttons
    upButton.addEventListener('click', scrollUp);
    downButton.addEventListener('click', scrollDown);
});



/*
document.addEventListener("DOMContentLoaded",()=>{
    const upbtn=document.querySelector(".class");
    const  downbtn=document.querySelector(".class down");
    const  wrapper=document.querySelector(".map scroll");


  function scrollUp(){
    wrapper.scrollBy({
        top:100,behavior:'smooth',
    })
  }

  function scrollDown(){
    wrapper.scrollBy({
        top:-100,behavior:"smooth",
    })
}


upbtn.addEventListener("click",scrollUp);
downbtn.addEventListener("click",scrollDown);

   
})*/
/*document.addEventListener("DOMContentloaded",()=>{
    const UpBtn=document.querySelector(".class");
    const DowBtn=document.querySelector(".Class");

    const Wraper =document.querySelector(". Place that your want to doing");

    function upscroll(){
        Wraper.scrollBy({
              top:100,behavior:"smooth",
        })
    }


    function DownBtn(){
        Wraper.scrollBy({
            top:-100,behavior:"smooth",
        })
    }

    UpBtn.addEventListener("click",upscroll);
    DowBtn.addEventListener("click",DownBtn);


    
    
})*/
document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector(".container");
    const img = [
        'auto/bg10.png',
        'auto/bg11.png',
        'auto/bg12.png',
        'auto/bg13.png',
        'auto/bg9.png',
    ];

    let currentIndex = 0;

    function changeBackground() {
        currentIndex = (currentIndex + 1) % img.length;
        container.style.backgroundImage = `url(${img[currentIndex]})`;
    }

    img.forEach(src => {
        const preloadedImg = new Image();
        preloadedImg.src = src;
    });

    setInterval(changeBackground, 5000);
});
