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
if(windowWidth >1400){
    $('.social-programs-wrapper').slick({
        autoplay:false,
        arrows: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        prevArrow: $('.prev'),
        nextArrow: $('.next')
    });
    
}else if (windowWidth < 1400 && windowWidth>=1200){
    $('.social-programs-wrapper').slick({
        autoplay:false,
        arrows: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow: $('.prev'),
        nextArrow: $('.next')
    });
}else if (windowWidth < 1200 && windowWidth>=970){
    $('.social-programs-wrapper').slick({
        autoplay:false,
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: $('.prev'),
        nextArrow: $('.next')
    });
}else if (windowWidth < 970 && windowWidth>=740){
    $('.social-programs-wrapper').slick({
        autoplay:false,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: $('.prev'),
        nextArrow: $('.next')
    });
}else if (windowWidth < 740 && windowWidth>=525){
    $('.social-programs-wrapper').slick({
        autoplay:false,
        arrows: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: $('.prev'),
        nextArrow: $('.next')
    });
}else if (windowWidth < 525){
    $('.social-programs-wrapper').slick({
        autoplay:false,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('.prev'),
        nextArrow: $('.next')
    });
}

// banner slider
$('.main-banner').slick({
    autoplay:false,
    arrows: true,
    autoplaySpeed: 2000,
    prevArrow: $('.Back-banenr'),
    nextArrow: $('.next-banner'),
});

// click on page ourpharmacies
let pharm = document.getElementsByClassName("pharm-place");
Array.from(pharm).forEach(x=>{
    x.addEventListener("click", function(x){
        let curentDiv = x.target;
        let p = curentDiv.getElementsByClassName("pharm-placeP")
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
        let curentDiv = x.target;
        let p = curentDiv.getElementsByClassName("vacancy-placeP")
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
console.log(windowWidth)

$("#contactsForm").validate()
$("#about").validate()
$("#newsForm").validate()
$("#newsInnerForm").validate()
$("#FormsPromo").validate()


jQuery.extend(jQuery.validator.messages, {
    required: "Це поле обов'язкове для заповнення",
    remote: "Please fix this field.",
    email: "Введіть вірний e-mail",
    url: "Please enter a valid URL.",
    date: "Please enter a valid date.",
    dateISO: "Please enter a valid date (ISO).",
    number: "Please enter a valid number.",
    digits: "Please enter only digits.",
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
}
    