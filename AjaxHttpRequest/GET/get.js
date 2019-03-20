//arrow functionlar windows bir üst objeyi gösteriyor

class Request{

    constructor(){

        this.xhr = new XMLHttpRequest();
    }
    get(url,callback){

        this.xhr.open("GET",url);

        //norrmal Kullanım
        /*
        this.xhr.onload = function (){
            
            
            if(this.status == 200){
                console.log(JSON.parse(this.responseText));
            }    
        }
        */

        //Arrow function ile kullanım
        this.xhr.onload  = () => {
            
            
            if(this.xhr.status == 200){
                callback(null,JSON.parse(this.xhr.responseText));
            }
            else{
                callback("Herhangi bir hata oluştu",null);
            }    
        }   

        this.xhr.send();


    }

}

const request = new Request();

request.get("https://jsonplaceholder.typicode.com/albums    ",function(err,response){

    if(err === null){
        console.log(response);
    }
    else{
        console.log(err);
    }
   

});