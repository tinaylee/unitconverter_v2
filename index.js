/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

// Grab the number to convert from the DOM
let numToConvert = document.getElementById("num-to-convert")
let convertNum = numToConvert.value
//Grab the Convert button
const convertBtn = document.getElementById("convert-button")

// Conversion functions
function metersToFeet(num) {
    let feet = num * 3.280
    return Math.round(feet*1000)/1000
}

function feetToMeters(num) {
    let meters = num / 3.280
    return Math.round(meters*1000)/1000
}

function litersToGallons(num) {
    let gallons = num *0.264
    return Math.round(gallons*1000)/1000
}

function gallonsToLiters(num) {
    let liters = num /0.264
    return Math.round(liters*1000)/1000
}

function kilogramsToPounds(num) {
    let pounds = num * 2.204
    return Math.round(pounds*1000)/1000
}

function poundsToKilograms(num) {
    let kilograms = num / 2.204
    return Math.round(kilograms*1000)/1000
}

//convert on page load
function pageLoad() {
    //start with 20 as example value
    numToConvert.value = 20
    convertValue(numToConvert.value)
}

convertBtn.addEventListener("click", function() {
    let new_num = numToConvert.value
    convertValue(new_num)
})

function convertValue(number) {
     document.getElementById("meters-conversion").textContent = `${number} meters = ${metersToFeet(number)} feet |  ${number} feet = ${feetToMeters(number)} meters`
    
    document.getElementById("liters-conversion").textContent = `${number} liters =  ${litersToGallons(number)} gallons | ${number} gallons = ${gallonsToLiters(number)} liters`
    
    document.getElementById("kilograms-conversion").textContent = `${number} kilograms = ${kilogramsToPounds(number)} pounds | ${number} pounds = ${poundsToKilograms(number)} kilograms`
}
// Call function on pageload
window.onload = pageLoad();
