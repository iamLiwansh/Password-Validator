const pass = document.getElementById("password");
const conPass = document.getElementById("confirmPassword");
const mat = document.getElementById("matches");

function passwordMatchesOrNot(){
    firstTimePassword = pass.value;
    confirmationPassword = conPass.value;

    if(firstTimePassword === confirmationPassword){
        console.log("Password Matches ");
    }
    else{
        console.log("Password Doesn't Matches");
    }

}



mat.addEventListener("click", passwordMatchesOrNot)