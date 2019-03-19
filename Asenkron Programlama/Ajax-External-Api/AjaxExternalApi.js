document.getElementById("change").addEventListener("click",change);

function change(){

    const xml = new XMLHttpRequest();

    xml.open("GET","https://api.exchangeratesapi.io/latest");

    xml.onload = function(){

        if(this.status === 200){

            
            var euroAmount = parseInt( document.getElementById("amount").value,10);
            var responseAjax = JSON.parse(this.responseText);
            document.getElementById("tl").value =  (responseAjax.rates.TRY * euroAmount);

        }
    }

    xml.send();


}
