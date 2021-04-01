function DigitalClock() {
    setInterval(function () {
    let date = new Date();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    document.getElementById("time").innerHTML  = `<h1>${hour} : ${minutes} : ${seconds}</h1>`
},1000)
}    
DigitalClock();


