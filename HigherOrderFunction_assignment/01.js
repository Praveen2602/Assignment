//1. Reverse String with Delay
function reverseString(input) {
    setTimeout(() => {
        let reversed = input.split('').reverse().join('');
        console.log(reversed);
    }, 2000);
}

reverseString("Hello World");  // Output after 2 seconds: "dlroW olleH"
