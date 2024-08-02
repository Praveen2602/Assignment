//2. Random Number Generator with Delay and Progress Indication
function generateRandomNumberWithDelay(delay) {
    let timeRemaining = delay;

    let interval = setInterval(() => {
        console.log(`Time remaining: ${timeRemaining} seconds`);
        timeRemaining--;
        if (timeRemaining < 0) {
            clearInterval(interval);
            let randomNumber = Math.floor(Math.random() * 100);
            console.log(`Generated Number: ${randomNumber}`);
        }
    }, 1000);
}

generateRandomNumberWithDelay(3);
