    function initMap(){
        var element = document.getElementById("map");
        var options = {
            zoom:14,
            center:{lat:48.925567, lng: 24.712578},
            disableDefaultUI: false
        }

        var myMap = new google.maps.Map(element,options);
        AddMarker({
            coordinates:{lat: 48.925567, lng: 24.712578},
            content: "Вулиця Дністровська, 20",
           
        
        })
    
        function AddMarker(props){
            var marker = new google.maps.Marker({
                position:props.coordinates,
                map: myMap,
                tittle: "Hello"
            })
            var InfoWindow = new google.maps.InfoWindow({
                content: props.content
            })
            marker.addListener("click", function(){
                InfoWindow.open(myMap,marker);
            })
        }
       
}
window.onload = function(){
let windowWidth = document.documentElement.clientWidth;

//slider for social icons
    $('.social-programs-wrapper').slick({
        autoplay:false,
        arrows: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        responsive: [
    {
      breakpoint: 1364,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
      }
    },
    {
        breakpoint: 1164,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 965,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 790,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 559,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2
        }
      },
]
    });
    

// banner slider
$('.main-banner').slick({
    autoplay: true,
    speed:1500,
    arrows: true,
    autoplaySpeed: 2000,
    prevArrow: $('.Back-banenr'),
    nextArrow: $('.next-banner'),
});

setTimeout(function ShowImg(){
    let images = document.getElementsByClassName("main-banner-link");
    Array.from(images).forEach(x=>{
        x.style.opacity = "1"
    })
},1000)


// click on page ourpharmacies
let pharm = document.getElementsByClassName("pharm-place");
Array.from(pharm).forEach(x=>{
    x.addEventListener("click", function(x){
        let allP = document.getElementsByClassName("pharm-placeP")
        Array.from(allP).forEach(x=>{
            x.classList.remove("visible")
            let Allspan = document.getElementsByClassName("lineVertical")
            Array.from(Allspan).forEach(x=>{
             
                    x.classList.remove("offLine")
                
            })
        })   
        
//for span element for CLICK WORK ON PLUS 
        if (x.target.parentNode.classList.contains("pharm-place")){
            let p = x.target.parentNode.getElementsByClassName("pharm-placeP")
            let span = x.target.parentNode.getElementsByClassName("lineVertical")
            Array.from(span).forEach(x=>{
                if(x.classList.contains("offLine")){
                    x.classList.remove("offLine")
                }else{
                    x.classList.add("offLine")
                }
            })
            Array.from(p).forEach(x=>{
                if(x.classList.contains("visible")){
                    x.classList.remove("visible")
                }else{
                    x.classList.add("visible")
                }
            })
        }
/////////
        let curentDiv = x.target;
        let p = curentDiv.getElementsByClassName("pharm-placeP")
        let span = curentDiv.getElementsByClassName("lineVertical")
        Array.from(span).forEach(x=>{
            if(x.classList.contains("offLine")){
                x.classList.remove("offLine")
            }else{
                x.classList.add("offLine")
            }
        })
        Array.from(p).forEach(x=>{
            if(x.classList.contains("visible")){
                x.classList.remove("visible")
            }else{
                x.classList.add("visible")
            }
            
        })
        
    })
})

let vacancy = document.getElementsByClassName("vacancy-place");
Array.from(vacancy).forEach(x=>{
    x.addEventListener("click", function(x){

        let allP = document.getElementsByClassName("vacancy-placeP")
        Array.from(allP).forEach(x=>{
            x.classList.remove("visible")
            let Allspan = document.getElementsByClassName("lineVertical")
            Array.from(Allspan).forEach(x=>{
             
                    x.classList.remove("offLine")
                
            })
        })   
        
//for span element for CLICK WORK ON PLUS 
        if (x.target.parentNode.classList.contains("vacancy-place")){
            let p = x.target.parentNode.getElementsByClassName("vacancy-placeP")
            let span = x.target.parentNode.getElementsByClassName("lineVertical")
            Array.from(span).forEach(x=>{
                if(x.classList.contains("offLine")){
                    x.classList.remove("offLine")
                }else{
                    x.classList.add("offLine")
                }
            })
            Array.from(p).forEach(x=>{
                if(x.classList.contains("visible")){
                    x.classList.remove("visible")
                }else{
                    x.classList.add("visible")
                }
            })
        }
/////////



        let curentDiv = x.target;
        let p = curentDiv.getElementsByClassName("vacancy-placeP")
        let span = curentDiv.getElementsByClassName("lineVertical")
        Array.from(span).forEach(x=>{
            if(x.classList.contains("offLine")){
                x.classList.remove("offLine")
            }else{
                x.classList.add("offLine")
            }
        })

        Array.from(p).forEach(x=>{
            if(x.classList.contains("visible")){
                x.classList.remove("visible")
            }else{
                x.classList.add("visible")
            }
        })
        
    })
})

// open menu
let menu = document.getElementById("menu-button");
let isopen = document.getElementById("isopen");
menu.addEventListener("click",function(e){
    e.preventDefault();
    if(isopen.classList.contains("isopen")){
        isopen.classList.remove("isopen")
    }else{
        isopen.classList.add("isopen")
    }
})

$("#contactsForm").validate()
$("#about").validate()
$("#newsForm").validate()
$("#newsInnerForm").validate()
$("#FormsPromo").validate()
$("#vacancyForm").validate()


jQuery.extend(jQuery.validator.messages, {
    required: "Це поле обов'язкове для заповнення",
    remote: "Please fix this field.",
    email: "Введіть вірний e-mail",
    url: "Please enter a valid URL.",
    date: "Please enter a valid date.",
    dateISO: "Please enter a valid date (ISO).",
    number: "Please enter a valid number.",
    digits: "Введіть телефон формату 098-644-55-44-39",
    creditcard: "Please enter a valid credit card number.",
    equalTo: "Please enter the same value again.",
    accept: "Please enter a value with a valid extension.",
    maxlength: jQuery.validator.format("Please enter no more than {0} characters."),
    minlength: jQuery.validator.format("Введіть не меньше ніж {0} літери."),
    rangelength: jQuery.validator.format("Please enter a value between {0} and {1} characters long."),
    range: jQuery.validator.format("Please enter a value between {0} and {1}."),
    max: jQuery.validator.format("Please enter a value less than or equal to {0}."),
    min: jQuery.validator.format("Please enter a value greater than or equal to {0}.")
});

if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)){
    let viber = document.getElementById("viber");
    let viberHref = viber.getAttribute("href").split("")
    let news = viberHref.splice(8,4,"a","d","d")
    let viberForMobile = viberHref.join("")
    viber.setAttribute("href", viberForMobile)
}
console.log(document.getElementById("viber").getAttribute("href"))
}

    window.onscroll = function() {
        let pageY = window.pageYOffset || document.documentElement.scrollTop;
        let innerHeight = document.documentElement.clientHeight;
        let buttonTop = document.getElementById("buttonForTop")

        if(pageY>=innerHeight){
            buttonTop.classList.remove("buttonForTopInvisible")
        }else{
            buttonTop.classList.add("buttonForTopInvisible")
        }
        
      }