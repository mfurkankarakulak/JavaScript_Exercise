function proccess1(callback){

    setTimeout(function(){

        console.log("Proccess 1");
        callback();

    },3000);

}

function proccess2(){

    setTimeout(function(){
        
        console.log("Proccess 2");
    
    },2000);
}
proccess1(proccess2);

const langs = ["Python","Java","C++"];

function addlang(lang,callback){

    setTimeout(function(){

        langs.push(lang);
        console.log("Eklendi");
        callback();
    },2000);
}
function getAllLangs(){

    setTimeout(function(){

        langs.forEach(function(lang){
            
            console.log(lang);

        });
    },1000);
}
addlang("JavaScript",getAllLangs);

