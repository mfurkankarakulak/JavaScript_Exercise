//Http Status
//200 OK
//403 Forbidden
//404 Not Found
//505 İnternal Server Error   

//Holds the status of the XMLHttpRequest.
//0: request not initialized 
//1: server connection established
//2: request received 
//3: processing request 
//4: request finished and response is ready

var ajaxButton = document.getElementById("btn").addEventListener("click",function(){

    var xml = new XMLHttpRequest();


    //Kullanımı eskide kaldı daha iyisi var
    /* xml.onreadystatechange = function(){


        if(this.status === 200 && this.readyState === 4){

            
            var divAjax =  document.getElementById("ajax");

            divAjax.innerHTML+=
                                `<h1>
                                    ${this.responseText}
                                
                                </h1>
                                `;
        }

    }*/
    xml.onload = function(){
        if(this.status === 200){
            document.getElementById("ajax").textContent = this.responseText;
        }
    }
    

    xml.open("GET","example.txt",true);
    xml.send();

})