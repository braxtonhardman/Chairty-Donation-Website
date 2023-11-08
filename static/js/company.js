let retrievedData = JSON.parse(localStorage.getItem('data'));
console.log("RetrivedData=", retrievedData);

document.addEventListener("DOMContentLoaded", function(){
    console.log("Company Js Running")
    let company_container = document.querySelector(".company-container");
    company_container.querySelector(".content h1").innerHTML = retrievedData.name;
    company_container.querySelector(".content p").innerHTML = retrievedData.description;
    company_container.querySelector("img").src = retrievedData.coverImageUrl;

    // Get the modal
    var modal = document.getElementById('donateModal');

    // Get the button that opens the modal
    var btn = document.getElementById('donateButton');

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName('close')[0];

    // When the user clicks the button, open the modal 
    btn.onclick = function() {
        modal.style.display = "block";
        var submitButton = document.querySelector("#submit-donation");
        submitButton.addEventListener('click', submitDonation);
        
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Dummy function to simulate donation submission
    function submitDonation(){
        modal.style.display = "none";
        var amount = document.getElementById('donationAmount').value;
        alert('Thank you for your donation of $' + amount);        
    }

});
