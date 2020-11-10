const btn = document.getElementById("click")

btn.addEventListener("click" , function(){

    var mytext = document.getElementById("mytxt").value;
    if (mytext == ''){

        alert("you must write something");

    }

    else{

    

    //creating list node
    var node = document.createElement("li");
    node.id = "sad";
    var text_node = document.createTextNode(mytext);

    // node.appendChild(text_node);
    document.getElementById("list").appendChild(node);

    //cancel_icon
    var i_node = document.createElement("i");
    i_node.classList.add("fa","fa-window-close")
    node.appendChild(i_node);




    //p tag
    var p_node = document.createElement("p");
    var node_text = document.createTextNode(mytext);
    p_node.appendChild(node_text);
    node.appendChild(p_node);
    
    //clearing input value 
    document.getElementById('mytxt').value = ''
    

}


const closebtn = document.getElementsByClassName("fa-window-close");


for (var i=0 ; i < closebtn.length ; i++){



        closebtn[i].onclick = hidePara;
        function hidePara(){
          
            var div = this.parentElement;
            div.style.display = "none";
        }
              
              
          
}


});




