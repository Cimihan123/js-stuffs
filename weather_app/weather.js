function apiFetch(){

    var location = document.getElementById("mytxt").value;
   
    
    var url = `https://api.openweathermap.org/data/2.5/weather\?q\=${location}\&appid\=5516fb8e1cb159afa0bc41ac8813a9e0`;
    
    fetch(url).then(
        response => {
            if (response.status == 200 ){
            return response.json()
            }
            else {

                return "Api Not Working"
            }
        }).then(
            data => {
               
                country = "Country: " + data["name"];
                wind_speed = "Wind Speed:" + data.wind["speed"];
                description = data.weather[0].description;
                temp = "Temp: " + data.main["temp"];
                country_code = data.sys["country"];
                // console.log(country,wind_speed,description,temp,country_code)
                //repeated p elemtns remove
                var element = document.getElementsByTagName("p"), index;
                for (index = element.length - 1; index >= 0; index--) {
                    
                    element[index].parentNode.removeChild(element[index]);
                }
                //repeated img elements remove
                var img_element = document.getElementsByTagName("img"), index;
                for (index = img_element.length - 1 ; index >=0 ; index --){
                        img_element[index].parentNode.removeChild(img_element[index]);
                }
                getFlag(country_code);
                addDetail(country,wind_speed,description,temp);
                

                
        });   
        

}

function enterClick(){

    var input = document.getElementById("mytxt");
    input.addEventListener("keyup" , function(event){

        if (event.keyCode === 13) {

            event.preventDefault();
            document.getElementById("img").click()
        }

    });

}

enterClick()



var icon_click = document.getElementById("img")

icon_click.onclick = function() {apiFetch()};


function addDetail(){
   
    for(var i=0 ; i < arguments.length; i++){

            var para = document.createElement("P");
            para.innerHTML = arguments[i];
            document.getElementById("detail").appendChild(para);
     }


}




function getFlag(country_code){

    var img = document.createElement("img");
    img.src = `https://www.countryflags.io/${country_code}/shiny/64.png`;
    document.getElementById("detail").appendChild(img);


}




// async function apiFetch(){
//     var flag_url = "https://www.countryflags.io/be/shiny/64.png";


//     var response = await fetch(flag_url ,{

        
//         origin : "cors"
//     }
//     );
//     var res = await response.json();
//     return res;
// }

// var a = apiFetch();
// a.then(data => console.log(data["id"]));


