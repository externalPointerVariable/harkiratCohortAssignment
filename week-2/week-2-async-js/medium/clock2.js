function timer() {
    console.clear();
    let date = new Date();
    console.log(date.toLocaleTimeString());
}
setInterval(timer, 1000);