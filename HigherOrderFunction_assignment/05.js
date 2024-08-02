//5. URL Validation
function isValidURL(url) {
    let regex = /^(http:\/\/|https:\/\/)[a-zA-Z\d-]+(\.[a-zA-Z\d-]+)+$/;
    return regex.test(url);
}

console.log(isValidURL("https://example.com"));  // Output: true
console.log(isValidURL("http://example.com"));   // Output: true
console.log(isValidURL("example.com"));          // Output: false
