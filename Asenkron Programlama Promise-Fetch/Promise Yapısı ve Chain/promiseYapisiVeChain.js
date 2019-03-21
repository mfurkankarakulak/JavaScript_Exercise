//Promise yapısında birden fazla then kullandıgın zaman sadece bir tane catch kullanabiliriz.
//hata durumun da program her türlü catch'e düşecektir.
//Promise Chain yapısı oluşturmuş oluruz.

function addTwo(number){

    return new Promise(function(resolve,reject){

        setTimeout(function(){

            if(typeof number === "number"){
    
                resolve(number+2);
            }
            else{
                reject(new Error("lütfen bir sayi giriniz "));
            }
    
        },2000);


    });
}

addTwo(23)
.then(response => 
    {
        console.log(response);
        return addTwo(response);
    })
.then(response => console.log(response))
.catch(err => console.log(console.error(err)));