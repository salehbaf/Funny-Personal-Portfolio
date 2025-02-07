

//wait for the page to fully load before running the script
document.addEventListener("DOMContentLoaded", function () {
    //list of random fun facts 
    const facts = [
        "I'm taking 6 classes this semester... nothing fun about that. ☹️",
        "I once spent 6 hours debugging a missing semicolon. 🤦🏽‍♂️",
        "I drink more coffee than water. ☕",
        "I thought 'console.log' meant logging into a console at first. 🤡",
        "I have attempted (and failed) to build 3 projects in one night. 🛠️",
        "I'm the type to Google 'How to center a div' multiple times. 🎯"
    ];
//when buton is clicked show a random fact
    document.getElementById("fact-btn").addEventListener("click", function () {
        let randomIndex = Math.floor(Math.random() * facts.length);
        document.getElementById("fact").innerText = facts[randomIndex];
    });
});
