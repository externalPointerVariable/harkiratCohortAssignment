let count = 0;

const counter = () => {
    console.clear();
    count++;
    console.log(count);
    setTimeout(counter, 1000);
};

setTimeout(counter, 1000);