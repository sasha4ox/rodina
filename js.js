
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
            //     if (this.icon==="img/pin.svg"){
            //     this.setIcon("img/pinHover.svg")
            // }else { this.setIcon("img/pin.svg")}
            })
        }
       
}

// let button = document.getElementById("button");
// let aside = document.getElementById("aside");
// let hiddenBar = document.getElementById("hiddenBar");
let map = document.getElementById("map");
// button.classList.remove("buttonHidden");
// aside.classList.remove("asideHidden");
// hiddenBar.classList.remove("hiddenBar");

// button.addEventListener("click",function(){
//     if (button.classList.contains("buttonHidden")){
//         button.classList.remove("buttonHidden");
//         aside.classList.remove("asideHidden");
//         hiddenBar.classList.add("hiddenBarHiden");
//         map.style.width= "68.75%"
//     }else {
//         button.classList.add("buttonHidden");
//         aside.classList.add("asideHidden");
//         hiddenBar.classList.remove("hiddenBarHiden");
//         hiddenBar.classList.add("hiddenBar");
//        map.style.width= "95%"
//     }
   
// })