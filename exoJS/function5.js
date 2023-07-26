function numberToWords(num) {
    const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'foureen', 'fifteen', 'sixteen', 'eighteen']

    if (num < 10) {
        return ones[num]
    } else if (num <20){
        return teens[num -10]
    } else {
        return tens[Math.floor(num/10)] + '-' + ones [num % 10]
    }
            
}
console.log(numberToWords(0))
 