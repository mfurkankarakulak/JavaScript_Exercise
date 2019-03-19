var ajaxButton = document.getElementById("ajax").addEventListener("click",GetAllEmployees);

function GetAllEmployees(){

        const xml  = new XMLHttpRequest();

        let List = document.getElementById("employees");

        xml.onload = function(){

            if(this.status ===200){
                
                var employessList = JSON.parse(this.responseText);

                employessList.forEach(function(employe){

                    List.innerHTML+= `<tr>
                                                    <td>${employe.name}</td>
                                                    <td>${employe.departmant}</td>
                                                    <td>${employe.salary}</td>
                                                </tr>`;           

                });

               

            }
        }

        xml.open("GET","employess.json",true);

        xml.send();





}