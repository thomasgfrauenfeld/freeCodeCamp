function palindrome(str) {
    str = str.replace(/[^A-Za-z0-9]+/g, "").toLowerCase();
    return str === str.split("").reverse().join("");
}