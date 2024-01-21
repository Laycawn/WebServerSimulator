/*********************************************************************************
*  WEB700 – Assignment 1
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: __Olalekan Jimoh ___ Student ID: __156555229___ Date: ____20/01/2024____
*
********************************************************************************/ 

console.log('Web Server Simulator');


// Predefined arrays
var serverVerbs = ["GET", "GET", "GET", "POST", "GET", "POST"];
var serverPaths = ["/", "/about", "/contact", "/login", "/panel", "/logout"];
var serverResponses = [
    "Welcome to WEB700 Assignment 1",
    "This assignment was prepared by Olalekan Yusau Jimoh",
    "Olalekan Yusau Jimoh: oyjimoh@myseneca.ca",
    "User Logged In",
    "Main Panel",
    "Logout Complete"
];

// The httpRequest function
function httpRequest(httpVerb, path) {
    for (var i = 0; i < serverVerbs.length; i++) {
        if (serverVerbs[i] === httpVerb && serverPaths[i] === path) {
            return `200: ${serverResponses[i]}`;
        }
    }
    return `404: Unable to process ${httpVerb} request for ${path}`;
}

// Manual Testing
console.log(httpRequest("POST", "/login")); // Should return "200: User Logged In"
console.log(httpRequest("GET", "/about")); // Should return "200: This assignment was prepared by Olalekan Jimoh"
console.log(httpRequest("PUT", "/")); // shows "404: Unable to process PUT request for /"




// Utility function to generate random integers
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

// Function to automate tests
function automateTests() {
    var testVerbs = ["GET", "POST"];
    var testPaths = ["/", "/about", "/contact", "/login", "/panel", "/logout", "/randomPath1", "/randomPath2"];
    function randomRequest() {
        
        var randomVerb = testVerbs[getRandomInt(testVerbs.length)];
        var randomPath = testPaths[getRandomInt(testPaths.length)];
        var response = httpRequest(randomVerb, randomPath);
        console.log(`Request: ${randomVerb} ${randomPath} - Response: ${response}`);
    }

    var testInterval = setInterval(randomRequest, 1000); // Calls randomRequest every second
}

// Running automated tests
automateTests();
