document.addEventListener("DOMContentLoaded", function () {
    
    //find the element with the id "funny-text"
    let funnyText = document.getElementById("funny-text");
    
    //when mouse goes over the text change it to something funny 
    funnyText.addEventListener("mouseover", function () {
        this.innerHTML = "🎈 BOO! Did I scare you? 😂"; //change text 
        this.style.color = "red"; //makes the text red 
    });

    //when mouse leaves change it back to normal 
    funnyText.addEventListener("mouseleave", function () {
        this.innerHTML = "Hover over this text for a surprise! 🎉";
        this.style.color = "black"; //and change the color back to black 
    });
});


