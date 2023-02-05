function palindrome(str) {
    var reg = /[\W_]/g;

    var smallStr = str.toLowerCase().replace(reg, "");

    var reversed = smallStr.split("").reverse().join("");
    if (reversed === smallStr) {
        return true;
    }
    return false;
}

console.log(palindrome("kodok"));
console.log(palindrome("malam"));
console.log(palindrome("sapi"));
console.log(palindrome("123"));
console.log(palindrome("12321"));
console.log(palindrome("@#$#@"));
console.log(palindrome("@#$%^"));