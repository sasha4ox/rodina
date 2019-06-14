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
    autoplay:true,
    arrows: false,
    autoplaySpeed: 2000,
    nextArrow: $('.main-banner')
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
}
    