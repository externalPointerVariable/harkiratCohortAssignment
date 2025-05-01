let count = 0;

const counter = () => {
    console.clear();
    count++;
    console.log(count);
};

setInterval(counter, 1000);