//6. LinkedIn Profile URL Validator
function isValidLinkedInURL(url) {
    let regex = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}$/;
    return regex.test(url);
}

console.log(isValidLinkedInURL("https://www.linkedin.com/in/johndoe123"));  // Output: true
console.log(isValidLinkedInURL("https://www.linkedin.com/in/jane_doe-2023")); // Output: true
console.log(isValidLinkedInURL("https://www.linkedin.com/in/jd"));          // Output: false
console.log(isValidLinkedInURL("https://www.linkedin.com/in/jane.doe@123")); // Output: false
