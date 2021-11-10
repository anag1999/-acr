const sendEmail = () => {

    const contactform= document.querySelector("#submit");
    let name = document.getElementById("name");
    let phone = document.getElementById("phone");
    let email = document.getElementById("email");
    let comment = document.getElementById("comment");

    contactform.addEventListener("click", () => {
       
        let FormData = {
            name: name.value,
            phone: phone.value,
            email:email.value,
            comment: comment.value,
        }

        let xhr = new XMLHttpRequest();
        xhr.open("POST","https://acr-dev.herokuapp.com/");
        xhr.setRequestHeader("content-type", "application/json"); 
        xhr.onload = function(){
            console.log(xhr.responseText);
            if(xhr.responseText == "success"){
                alert("Información enviada");
                name.value = "";
                phone.value = "";
                email.value = "";
                comment.value = "";
            }else{
                alert("Algo salió mal, vuleve a intentar más tarde.")
            }
        }

    xhr.send(JSON.stringify(FormData));

    })

  
}

export default sendEmail;