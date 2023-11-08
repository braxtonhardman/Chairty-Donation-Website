
document.addEventListener("DOMContentLoaded", function(){
    console.log("General Js Running");
    let signIn = document.getElementById("signin");
    let getStarted = document.getElementById("getstarted");
    let about = document.getElementById("about");
    let home = document.getElementById("home");
    let donate = document.getElementById("donate")

    // home | Donate | About | Sign In | Get Started | 

    if(document.querySelector(".loginbox h1") == null) {
        // About | Home | Donate
        if(document.querySelector(".about-info h1") == null){
            // Home | Donate
            if(document.querySelector(".title header") == null) {
                return;
            }

            if(document.querySelector(".container-info h1") == null){
                donate.style.backgroundColor = "#8b7058";
                donate.style.borderColor = "#8b7058";
            }
            
        } else {
            about.style.backgroundColor = "#8b7058";
            about.style.borderColor = "#8b7058";
            localStorage.clear()
        }
    
    } else if(document.querySelector(".loginbox h1").innerText == "Login Here"){
        signIn.style.backgroundColor = "#8b7058";
        signIn.style.borderColor = "#8b7058";
        localStorage.clear();

    } else if(document.querySelector(".loginbox h1").innerText == "Create Account"){
        getStarted.style.backgroundColor = "#8b7058";
        getStarted.style.borderColor = "#8b7058";
        localStorage.clear();
        
    } 
        
});
