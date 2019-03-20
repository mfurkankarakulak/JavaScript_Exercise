class Request {

    constructor(){

        this.xhr = new XMLHttpRequest();
    }
    put(url,data,callback){

        this.xhr.open("PUT",url);
        this.xhr.setRequestHeader("Content-type","application/json"); // JSON VERİSİ GÖNDERME
        
        this.xhr.onload = () => {

            if(this.xhr.status === 200)
            {
                callback(null,this.xhr.responseText);
            }
            else{
                callback("Herhangi bir hata oluştu",null);   
            }

        }

        this.xhr.send(JSON.stringify(data));
    }
}

const request = new Request();

request.put("https://jsonplaceholder.typicode.com/albums/10",{userId:142,title:"PUT"},function(err,response){

    if(err === null){
        console.log(response);
    }
    else{
        console.log(err);
    }
   

});