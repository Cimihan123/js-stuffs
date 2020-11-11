const stars = document.querySelectorAll('.star');
// const ouput = document.querySelector("  ")


for( i = 0; i < stars.length ; i++){

    stars[i].starValue = (i+1);

["click" , "mouseover" , "mouseout"].forEach(function(e){

stars[i].addEventListener(e , showRating);

})



}

function showRating(e){
    let type = e.type;

    let starValue = this.starValue;
   
    stars.forEach(function(elem , ind){

        if(type == "click"){
            if(ind < starValue){
                elem.classList.add("orange")
                }
            else {
                elem.classList.remove("orange")
            }
        }



    })

}