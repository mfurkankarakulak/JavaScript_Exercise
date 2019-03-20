//windows objesi methodlarıdır.
//SetTimeout belli bir işlemi belli bir zaman sonra gerçekleştirmeye yarar

setTimeout(function(){
    console.log("SetTimeOut");
},5000);

//SetInterval belirlenen aralıklarla function'u çalıştırır
setInterval(function(){

    console.log("SetInterval");
},2000);
//ClearInterval SetInterval işlmini durdumak için kullanılır
//Bunu saglamak için setInteval bir degişkene atadık ve butona basınca durmasını sagladık

let interval = setInterval(function(){

    console.log("SetIntervalClear");
},2000);

document.getElementById("btn").addEventListener("click",function(){
    
    clearInterval(interval);


});