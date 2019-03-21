//promise yapısı

function getData(data){

    return new Promise(function(resolve,reject){

        setTimeout(function(){
            
            if(typeof data === "string")
            {
                resolve(data);
            }
            else{
                reject(new Error("lütfen bir string bir deger giriniz"));
            }

        },5000);

       
    });
}

getData("Merhaba").then(function(response){

    console.log("Gelen deger : " + response);
}).catch(function(err){
    console.error(err);
});

//arrow funciton ile yazılması
getData("Selam Arrow :) ")
.then(response => console.log(response))
.then(err => console.error(err));